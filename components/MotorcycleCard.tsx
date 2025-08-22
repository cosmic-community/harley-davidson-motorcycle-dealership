import Link from 'next/link'
import { Motorcycle } from '@/types'

interface MotorcycleCardProps {
  motorcycle: Motorcycle
}

export default function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  const mainImage = motorcycle.metadata.main_image

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {mainImage && (
        <div className="relative h-64">
          <img
            src={`${mainImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={motorcycle.metadata.model_name}
            className="w-full h-full object-cover"
          />
          {motorcycle.metadata.featured && (
            <div className="absolute top-4 left-4 bg-harley-orange text-white px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-harley-orange font-semibold">
            {motorcycle.metadata.category?.value}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-harley-black mb-2">
          {motorcycle.metadata.model_name}
        </h3>
        
        {motorcycle.metadata.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {motorcycle.metadata.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-harley-black">
            Starting at {motorcycle.metadata.starting_price}
          </div>
          <Link 
            href={`/motorcycles/${motorcycle.slug}`}
            className="text-harley-orange hover:text-orange-600 font-semibold"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  )
}