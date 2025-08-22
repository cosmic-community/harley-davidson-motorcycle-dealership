import Link from 'next/link'
import { Motorcycle } from '@/types'

interface MotorcycleCardProps {
  motorcycle: Motorcycle
}

export default function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  const image = motorcycle.metadata.main_image
  const imageUrl = image?.imgix_url 
    ? `${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`
    : '/placeholder-motorcycle.jpg'

  const category = motorcycle.metadata.category?.value || 'Motorcycle'
  const featured = motorcycle.metadata.featured

  return (
    <Link href={`/motorcycles/${motorcycle.slug}`} className="group block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          {featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-harley-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </span>
            </div>
          )}
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <img
              src={imageUrl}
              alt={motorcycle.metadata.model_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-3">
            <span className="text-harley-orange text-sm font-bold uppercase tracking-wide">
              {category}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-harley-black mb-3 group-hover:text-harley-orange transition-colors">
            {motorcycle.metadata.model_name}
          </h3>
          
          {motorcycle.metadata.description && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {motorcycle.metadata.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-harley-black">
              {motorcycle.metadata.starting_price}
            </div>
            <span className="text-harley-orange font-semibold group-hover:underline">
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}