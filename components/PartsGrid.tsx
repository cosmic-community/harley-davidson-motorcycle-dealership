import { Part } from '@/types'

interface PartsGridProps {
  parts: Part[]
}

export default function PartsGrid({ parts }: PartsGridProps) {
  if (!parts || parts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No parts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {parts.map((part) => {
        if (!part || !part.id) {
          return null
        }

        const image = part.metadata?.product_image
        const imageUrl = image?.imgix_url 
          ? `${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`
          : '/placeholder-part.jpg'

        return (
          <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={imageUrl}
                alt={part.metadata?.part_name || part.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                {part.metadata?.part_name || part.title}
              </h3>
              
              {part.metadata?.category?.value && (
                <p className="text-sm text-gray-600 mb-2">
                  {part.metadata.category.value}
                </p>
              )}
              
              {part.metadata?.part_number && (
                <p className="text-xs text-gray-500 mb-2">
                  Part #: {part.metadata.part_number}
                </p>
              )}
              
              {part.metadata?.price && (
                <p className="text-xl font-bold text-orange-600 mb-3">
                  {part.metadata.price}
                </p>
              )}
              
              {part.metadata?.description && (
                <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                  {part.metadata.description}
                </p>
              )}

              {part.metadata?.compatible_models && part.metadata.compatible_models.length > 0 && (
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Compatible with:</span>
                  <div className="mt-1">
                    {part.metadata.compatible_models.slice(0, 2).map((model, index) => (
                      <span key={model.id || index}>
                        {model.metadata?.model_name || model.title}
                        {index < Math.min(part.metadata.compatible_models.length, 2) - 1 && ', '}
                      </span>
                    ))}
                    {part.metadata.compatible_models.length > 2 && (
                      <span> +{part.metadata.compatible_models.length - 2} more</span>
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