import { getDealers } from '@/lib/cosmic'

export default async function DealerLocator() {
  let dealers
  
  try {
    dealers = await getDealers()
  } catch (error) {
    console.error('Error fetching dealers:', error)
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Find a Dealer</h2>
            <p className="text-gray-600">Unable to load dealer information at this time.</p>
          </div>
        </div>
      </section>
    )
  }

  if (!dealers || dealers.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Find a Dealer</h2>
            <p className="text-gray-600">No dealers found. Please check back later.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find a Dealer</h2>
          <p className="text-xl text-gray-600">
            Visit an authorized Harley-Davidson dealer near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealers.map((dealer) => {
            if (!dealer || !dealer.id) {
              return null
            }

            const image = dealer.metadata?.store_image
            const imageUrl = image?.imgix_url 
              ? `${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
              : '/placeholder-dealer.jpg'

            const hours = dealer.metadata?.hours

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
                  <h3 className="font-bold text-xl mb-3">
                    {dealer.metadata?.dealer_name || dealer.title}
                  </h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p>{dealer.metadata?.address}</p>
                    <p>
                      {dealer.metadata?.city && dealer.metadata?.state && dealer.metadata?.zip_code && (
                        `${dealer.metadata.city}, ${dealer.metadata.state} ${dealer.metadata.zip_code}`
                      )}
                    </p>
                    {dealer.metadata?.phone_number && (
                      <p className="font-medium">{dealer.metadata.phone_number}</p>
                    )}
                  </div>

                  {hours && Object.keys(hours).length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Hours:</h4>
                      <div className="text-sm text-gray-600">
                        <p className="capitalize">
                          Today: {hours[new Date().toLocaleLowerCase().substring(0, 3)] || 'Closed'}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2">
                    {dealer.metadata?.phone_number && (
                      <a
                        href={`tel:${dealer.metadata.phone_number}`}
                        className="bg-harley-orange text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors text-center"
                      >
                        Call Now
                      </a>
                    )}
                    {dealer.metadata?.website && (
                      <a
                        href={`https://${dealer.metadata.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-harley-orange text-harley-orange px-4 py-2 rounded-lg text-sm font-medium hover:bg-harley-orange hover:text-white transition-colors text-center"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}