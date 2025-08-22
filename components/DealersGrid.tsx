import { getDealers } from '@/lib/cosmic'
import { Dealer } from '@/types'

export default async function DealersGrid() {
  let dealers: Dealer[] = []
  
  try {
    dealers = await getDealers()
  } catch (error) {
    console.error('Error fetching dealers:', error)
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Unable to load dealers at this time.</p>
      </div>
    )
  }

  if (dealers.length === 0) {
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
          ? `${storeImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
          : '/placeholder-dealer.jpg'

        // Format hours for display
        const formatHours = (hours: Record<string, string> | undefined) => {
          if (!hours) return null
          
          const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
          const todayHours = hours[today]
          
          return todayHours ? `Today: ${todayHours}` : null
        }

        const todayHours = formatHours(dealer.metadata?.hours)

        return (
          <div key={dealer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={imageUrl}
                alt={`${dealer.metadata?.dealer_name} storefront`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-harley-black">
                {dealer.metadata?.dealer_name}
              </h3>
              
              <div className="space-y-2 text-gray-600 mb-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div>{dealer.metadata?.address}</div>
                    <div>{dealer.metadata?.city}, {dealer.metadata?.state} {dealer.metadata?.zip_code}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{dealer.metadata?.phone_number}</span>
                </div>

                {dealer.metadata?.website && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    <a 
                      href={`https://${dealer.metadata.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-harley-orange hover:underline"
                    >
                      {dealer.metadata.website}
                    </a>
                  </div>
                )}

                {todayHours && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{todayHours}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="btn-harley text-sm">
                  Get Directions
                </button>
                <button className="btn-harley-outline text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}