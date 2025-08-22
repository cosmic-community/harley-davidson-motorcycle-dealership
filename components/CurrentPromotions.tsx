import { getPromotions } from '@/lib/cosmic'

export default async function CurrentPromotions() {
  let promotions
  
  try {
    promotions = await getPromotions()
  } catch (error) {
    console.error('Error fetching promotions:', error)
    return null // Don't show section if there's an error
  }

  if (!promotions || promotions.length === 0) {
    return null // Don't show section if no promotions
  }

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Promotions</h2>
          <p className="text-xl text-gray-600">
            Don't miss out on these limited-time offers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {promotions.map((promotion) => {
            if (!promotion || !promotion.id) {
              return null
            }

            const image = promotion.metadata?.promotion_image
            const imageUrl = image?.imgix_url 
              ? `${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`
              : '/placeholder-promotion.jpg'

            const startDate = promotion.metadata?.start_date 
              ? new Date(promotion.metadata.start_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              : ''

            const endDate = promotion.metadata?.end_date 
              ? new Date(promotion.metadata.end_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              : ''

            return (
              <div key={promotion.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={promotion.metadata?.promotion_title || promotion.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  {promotion.metadata?.type?.value && (
                    <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {promotion.metadata.type.value}
                    </div>
                  )}
                  
                  <h3 className="font-bold text-xl mb-3">
                    {promotion.metadata?.promotion_title || promotion.title}
                  </h3>
                  
                  {promotion.metadata?.description && (
                    <div 
                      className="text-gray-600 mb-4 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: promotion.metadata.description }}
                    />
                  )}
                  
                  {(startDate || endDate) && (
                    <div className="text-sm text-gray-500 mb-4">
                      {startDate && endDate && (
                        <span>Valid: {startDate} - {endDate}</span>
                      )}
                    </div>
                  )}

                  {promotion.metadata?.terms_conditions && (
                    <details className="mt-4">
                      <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                        Terms & Conditions
                      </summary>
                      <div 
                        className="mt-2 text-xs text-gray-500 prose prose-xs max-w-none"
                        dangerouslySetInnerHTML={{ __html: promotion.metadata.terms_conditions }}
                      />
                    </details>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}