import { News } from '@/types'

interface NewsDetailProps {
  news: News
}

export default function NewsDetail({ news }: NewsDetailProps) {
  if (!news) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">News article not found.</p>
      </div>
    )
  }

  const image = news.metadata?.featured_image
  const imageUrl = image?.imgix_url 
    ? `${image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`
    : '/placeholder-news.jpg'

  const publishDate = news.metadata?.publish_date 
    ? new Date(news.metadata.publish_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : ''

  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Image */}
      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <img
          src={imageUrl}
          alt={news.metadata?.headline || news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        {news.metadata?.category?.value && (
          <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {news.metadata.category.value}
          </div>
        )}
        
        <h1 className="text-4xl font-bold mb-4">
          {news.metadata?.headline || news.title}
        </h1>
        
        {publishDate && (
          <div className="text-gray-600 mb-4">
            Published on {publishDate}
          </div>
        )}
        
        {news.metadata?.summary && (
          <p className="text-xl text-gray-700 leading-relaxed">
            {news.metadata.summary}
          </p>
        )}
      </header>

      {/* Article Content */}
      {news.metadata?.content && (
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: news.metadata.content }}
        />
      )}

      {/* Related Motorcycles */}
      {news.metadata?.related_motorcycles && news.metadata.related_motorcycles.length > 0 && (
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Related Motorcycles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.metadata.related_motorcycles.map((motorcycle) => {
              if (!motorcycle || !motorcycle.id) {
                return null
              }

              const motorcycleImage = motorcycle.metadata?.main_image
              const motorcycleImageUrl = motorcycleImage?.imgix_url 
                ? `${motorcycleImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
                : '/placeholder-motorcycle.jpg'

              return (
                <div key={motorcycle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={motorcycleImageUrl}
                      alt={motorcycle.metadata?.model_name || motorcycle.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">
                      {motorcycle.metadata?.model_name || motorcycle.title}
                    </h4>
                    {motorcycle.metadata?.starting_price && (
                      <p className="text-orange-600 font-bold">
                        Starting at {motorcycle.metadata.starting_price}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </article>
  )
}