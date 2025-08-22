import { Dealer } from '@/types'

interface DealersGridProps {
  dealers: Dealer[]
}

export default function DealersGrid({ dealers }: DealersGridProps) {
  if (!dealers || dealers.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-600 mb-4">No Dealers Found</h3>
        <p className="text-gray-500">Please check back later for dealer information.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dealers.map((dealer) => {
        if (!dealer || !dealer.id) {
          return null
        }

        const storeImage = dealer.metadata?.store_image
        const imageUrl = storeImage?.imgix_url 
          ? `${storeImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`
          : '/placeholder-dealer.jpg'

        const hours = dealer.metadata?.hours
        const hasHours = hours && typeof hours === 'object' && Object.keys(hours).length > 0

        return (
          <div key={dealer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={dealer.metadata?.dealer_name || dealer.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-harley-black">
                {dealer.metadata?.dealer_name || dealer.title}
              </h3>
              
              <div className="space-y-2 text-gray-600 mb-4">
                {dealer.metadata?.address && (
                  <p>{dealer.metadata.address}</p>
                )}
                <p>
                  {dealer.metadata?.city && `${dealer.metadata.city}, `}
                  {dealer.metadata?.state && `${dealer.metadata.state} `}
                  {dealer.metadata?.zip_code}
                </p>
              </div>

              {dealer.metadata?.phone_number && (
                <div className="mb-4">
                  <a 
                    href={`tel:${dealer.metadata.phone_number}`}
                    className="text-harley-orange hover:text-harley-orange-dark font-semibold"
                  >
                    {dealer.metadata.phone_number}
                  </a>
                </div>
              )}

              {dealer.metadata?.website && (
                <div className="mb-4">
                  <a 
                    href={`https://${dealer.metadata.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-harley-orange hover:text-harley-orange-dark font-semibold"
                  >
                    Visit Website →
                  </a>
                </div>
              )}

              {hasHours && (
                <div className="mt-4">
                  <h4 className="font-semibold text-harley-black mb-2">Hours:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {Object.entries(hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span>{time as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dealer.metadata?.services_offered && dealer.metadata.services_offered.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-harley-black mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dealer.metadata.services_offered.slice(0, 3).map((service, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {service.metadata?.service_name || service.title}
                      </span>
                    ))}
                    {dealer.metadata.services_offered.length > 3 && (
                      <span className="text-gray-500 text-sm">
                        +{dealer.metadata.services_offered.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}