import { Dealer } from '@/types'

interface DealersGridProps {
  dealers: Dealer[]
}

export default function DealersGrid({ dealers }: DealersGridProps) {
  if (!dealers || dealers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No dealers found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dealers.map((dealer) => {
        if (!dealer || !dealer.id) {
          return null
        }

        const image = dealer.metadata?.store_image
        const imageUrl = image?.imgix_url 
          ? `${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`
          : '/placeholder-dealer.jpg'

        const hours = dealer.metadata?.hours

        return (
          <div key={dealer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={dealer.metadata?.dealer_name || dealer.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3">
                {dealer.metadata?.dealer_name || dealer.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                {dealer.metadata?.address && (
                  <div className="flex items-start">
                    <span className="text-gray-600 text-sm">
                      📍 {dealer.metadata.address}
                      {dealer.metadata.city && dealer.metadata.state && (
                        <br />
                        {dealer.metadata.city}, {dealer.metadata.state} {dealer.metadata.zip_code}
                      )}
                    </span>
                  </div>
                )}
                
                {dealer.metadata?.phone_number && (
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm">
                      📞 {dealer.metadata.phone_number}
                    </span>
                  </div>
                )}
                
                {dealer.metadata?.website && (
                  <div className="flex items-center">
                    <a 
                      href={`https://${dealer.metadata.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 text-sm hover:underline"
                    >
                      🌐 {dealer.metadata.website}
                    </a>
                  </div>
                )}
              </div>

              {hours && Object.keys(hours).length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <div className="text-sm text-gray-600">
                    {Object.entries(hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span>{time as string}</span>
                      </div>
                    ))}
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