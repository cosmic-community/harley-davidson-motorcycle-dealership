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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dealers.map((dealer) => {
        if (!dealer || !dealer.id) {
          return null
        }

        const storeImage = dealer.metadata?.store_image
        const imageUrl = storeImage?.imgix_url 
          ? `${storeImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`
          : '/placeholder-dealer.jpg'

        const hours = dealer.metadata?.hours
        const todayKey = new Date().toLocaleLowerCase('en-US', { weekday: 'long' })
        const todayHours = hours?.[todayKey]

        return (
          <div key={dealer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={dealer.metadata?.dealer_name || dealer.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">
                {dealer.metadata?.dealer_name || dealer.title}
              </h3>
              
              <div className="text-gray-600 mb-4">
                {dealer.metadata?.address && (
                  <p>{dealer.metadata.address}</p>
                )}
                {dealer.metadata?.city && dealer.metadata?.state && dealer.metadata?.zip_code && (
                  <p>
                    {dealer.metadata.city}, {dealer.metadata.state} {dealer.metadata.zip_code}
                  </p>
                )}
              </div>

              {dealer.metadata?.phone_number && (
                <div className="mb-3">
                  <strong className="text-harley-orange">Phone:</strong>{' '}
                  <a
                    href={`tel:${dealer.metadata.phone_number}`}
                    className="hover:text-harley-orange"
                  >
                    {dealer.metadata.phone_number}
                  </a>
                </div>
              )}

              {dealer.metadata?.website && (
                <div className="mb-4">
                  <a
                    href={dealer.metadata.website.startsWith('http') 
                      ? dealer.metadata.website 
                      : `https://${dealer.metadata.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-harley-orange hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}

              {todayHours && (
                <div className="text-sm text-gray-600">
                  <strong>Today:</strong> {todayHours}
                </div>
              )}

              {hours && (
                <details className="mt-3">
                  <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                    View All Hours
                  </summary>
                  <div className="mt-2 text-sm text-gray-600 space-y-1">
                    {Object.entries(hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}