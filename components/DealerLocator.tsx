import Link from 'next/link'
import { getDealers } from '@/lib/cosmic'

export default async function DealerLocator() {
  let dealers
  
  try {
    dealers = await getDealers()
  } catch (error) {
    console.error('Error fetching dealers:', error)
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Find a Dealer</h2>
          <p className="text-center text-gray-600">Unable to load dealer information at this time.</p>
        </div>
      </section>
    )
  }

  if (!dealers || dealers.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Find a Dealer</h2>
          <p className="text-center text-gray-600">No dealers available.</p>
        </div>
      </section>
    )
  }

  // Show first dealer as featured
  const featuredDealer = dealers[0]
  const image = featuredDealer?.metadata?.store_image
  const imageUrl = image?.imgix_url 
    ? `${image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`
    : '/placeholder-dealer.jpg'

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find a Dealer</h2>
          <p className="text-xl text-gray-600">
            Locate your nearest Harley-Davidson dealership
          </p>
        </div>

        {featuredDealer && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={imageUrl}
                    alt={featuredDealer.metadata?.dealer_name || featuredDealer.title}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {featuredDealer.metadata?.dealer_name || featuredDealer.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {featuredDealer.metadata?.address && (
                      <div className="flex items-start">
                        <span className="text-gray-700">
                          📍 {featuredDealer.metadata.address}
                          {featuredDealer.metadata.city && featuredDealer.metadata.state && (
                            <br />
                            {featuredDealer.metadata.city}, {featuredDealer.metadata.state} {featuredDealer.metadata.zip_code}
                          )}
                        </span>
                      </div>
                    )}
                    
                    {featuredDealer.metadata?.phone_number && (
                      <div className="flex items-center">
                        <span className="text-gray-700">
                          📞 {featuredDealer.metadata.phone_number}
                        </span>
                      </div>
                    )}
                    
                    {featuredDealer.metadata?.website && (
                      <div className="flex items-center">
                        <a 
                          href={`https://${featuredDealer.metadata.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          🌐 {featuredDealer.metadata.website}
                        </a>
                      </div>
                    )}
                  </div>

                  {featuredDealer.metadata?.hours && Object.keys(featuredDealer.metadata.hours).length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Hours</h4>
                      <div className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                        {Object.entries(featuredDealer.metadata.hours).slice(0, 4).map(([day, time]) => (
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
            </div>
          </div>
        )}

        <div className="text-center">
          <Link 
            href="/dealers"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View All Dealers
          </Link>
        </div>
      </div>
    </section>
  )
}