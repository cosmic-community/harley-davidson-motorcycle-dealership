import { Service } from '@/types'

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => {
        if (!service || !service.id) {
          return null
        }

        const image = service.metadata?.service_image
        const imageUrl = image?.imgix_url 
          ? `${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`
          : '/placeholder-service.jpg'

        return (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={service.metadata?.service_name || service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              {service.metadata?.category?.value && (
                <div className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mb-3">
                  {service.metadata.category.value}
                </div>
              )}
              
              <h3 className="font-bold text-xl mb-3">
                {service.metadata?.service_name || service.title}
              </h3>
              
              <div className="flex justify-between items-center mb-4">
                {service.metadata?.starting_price && (
                  <div className="text-orange-600 font-bold text-lg">
                    {service.metadata.starting_price}
                  </div>
                )}
                
                {service.metadata?.duration && (
                  <div className="text-gray-600 text-sm">
                    ⏱️ {service.metadata.duration}
                  </div>
                )}
              </div>
              
              {service.metadata?.description && (
                <div 
                  className="text-gray-700 text-sm prose prose-sm max-w-none line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: service.metadata.description }}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}