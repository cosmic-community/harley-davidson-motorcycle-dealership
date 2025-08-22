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

        const productImage = part.metadata?.product_image
        const imageUrl = productImage?.imgix_url 
          ? `${productImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`
          : '/placeholder-part.jpg'

        const compatibleModels = part.metadata?.compatible_models
        const hasCompatibleModels = compatibleModels && Array.isArray(compatibleModels) && compatibleModels.length > 0

        return (
          <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={imageUrl}
                alt={part.metadata?.part_name || part.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              {part.metadata?.category?.value && (
                <div className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium mb-2">
                  {part.metadata.category.value}
                </div>
              )}
              
              <h3 className="font-bold text-lg mb-2">
                {part.metadata?.part_name || part.title}
              </h3>
              
              {part.metadata?.part_number && (
                <p className="text-sm text-gray-500 mb-2">
                  Part #: {part.metadata.part_number}
                </p>
              )}

              {part.metadata?.description && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {part.metadata.description}
                </p>
              )}

              {part.metadata?.price && (
                <div className="text-2xl font-bold text-harley-orange mb-3">
                  {part.metadata.price}
                </div>
              )}

              {hasCompatibleModels && (
                <div className="text-xs text-gray-500 mb-3">
                  <span className="font-medium">Compatible with:</span>
                  <div className="mt-1">
                    {compatibleModels.slice(0, 3).map((model: any, index: number) => (
                      <span key={model?.id || index}>
                        {model?.metadata?.model_name || model?.title || 'Unknown Model'}
                        {index < Math.min(compatibleModels.length, 3) - 1 ? ', ' : ''}
                      </span>
                    ))}
                    {compatibleModels.length > 3 && (
                      <span> and {compatibleModels.length - 3} more...</span>
                    )}
                  </div>
                </div>
              )}

              <button className="w-full bg-harley-orange hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                Learn More
              </button>

              {part.metadata?.installation_instructions && (
                <div className="mt-2 text-center">
                  <a
                    href={typeof part.metadata.installation_instructions === 'object' && part.metadata.installation_instructions?.url
                      ? part.metadata.installation_instructions.url
                      : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-harley-orange"
                  >
                    Installation Instructions →
                  </a>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}