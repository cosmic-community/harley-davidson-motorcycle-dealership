import { Apparel } from '@/types'

interface ApparelGridProps {
  apparel: Apparel[]
}

export default function ApparelGrid({ apparel }: ApparelGridProps) {
  if (!apparel || apparel.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No apparel items found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {apparel.map((item) => {
        if (!item || !item.id) {
          return null
        }

        const image = item.metadata?.product_image
        const imageUrl = image?.imgix_url 
          ? `${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`
          : '/placeholder-apparel.jpg'

        return (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={imageUrl}
                alt={item.metadata?.product_name || item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                {item.metadata?.product_name || item.title}
              </h3>
              {item.metadata?.category?.value && (
                <p className="text-sm text-gray-600 mb-2">
                  {item.metadata.category.value}
                </p>
              )}
              {item.metadata?.price && (
                <p className="text-xl font-bold text-orange-600 mb-2">
                  {item.metadata.price}
                </p>
              )}
              {item.metadata?.description && (
                <p className="text-gray-700 text-sm line-clamp-2">
                  {item.metadata.description}
                </p>
              )}
              {item.metadata?.available_sizes && item.metadata.available_sizes.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-600 mb-1">Available sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.metadata.available_sizes.map((size: string) => (
                      <span key={size} className="px-2 py-1 bg-gray-100 text-xs rounded">
                        {size}
                      </span>
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