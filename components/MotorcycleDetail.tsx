import { Motorcycle } from '@/types'
import Link from 'next/link'

interface MotorcycleDetailProps {
  motorcycle: Motorcycle
}

export default function MotorcycleDetail({ motorcycle }: MotorcycleDetailProps) {
  const mainImage = motorcycle.metadata.main_image
  const galleryImages = motorcycle.metadata.gallery_images
  const specifications = motorcycle.metadata.specifications
  const features = motorcycle.metadata.key_features

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        {mainImage && (
          <>
            <img
              src={`${mainImage.imgix_url}?w=1920&h=1000&fit=crop&auto=format,compress`}
              alt={motorcycle.metadata.model_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </>
        )}
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full pb-12">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                  {motorcycle.metadata.category?.value}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {motorcycle.metadata.model_name}
              </h1>
              <div className="text-2xl md:text-3xl font-bold">
                Starting at {motorcycle.metadata.starting_price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description & Features */}
            <div>
              {motorcycle.metadata.description && (
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {motorcycle.metadata.description}
                  </p>
                </div>
              )}

              {features && (
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <div 
                    className="text-gray-600 prose prose-lg"
                    dangerouslySetInnerHTML={{ __html: features }}
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dealers" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-center transition-colors">
                  Find a Dealer
                </Link>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                  Request Quote
                </button>
              </div>
            </div>

            {/* Specifications */}
            {specifications && Object.keys(specifications).length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specifications</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                        <dt className="font-semibold text-gray-900 capitalize">
                          {key.replace(/_/g, ' ')}:
                        </dt>
                        <dd className="text-gray-600">{value as string}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}
          </div>

          {/* Gallery */}
          {galleryImages && galleryImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={`${motorcycle.metadata.model_name} view ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}