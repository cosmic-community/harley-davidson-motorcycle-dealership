import Link from 'next/link'
import { getNews } from '@/lib/cosmic'

export default async function LatestNews() {
  let news
  
  try {
    news = await getNews(3)
  } catch (error) {
    console.error('Error fetching news:', error)
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-center text-gray-600">Unable to load news articles at this time.</p>
        </div>
      </section>
    )
  }

  if (!news || news.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-center text-gray-600">No news articles available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">
            Stay up to date with the latest Harley-Davidson news and updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => {
            if (!article || !article.id) {
              return null
            }

            const image = article.metadata?.featured_image
            const imageUrl = image?.imgix_url 
              ? `${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`
              : '/placeholder-news.jpg'

            const publishDate = article.metadata?.publish_date 
              ? new Date(article.metadata.publish_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              : ''

            return (
              <Link 
                key={article.id}
                href={`/news/${article.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={article.metadata?.headline || article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  {article.metadata?.category?.value && (
                    <div className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mb-3">
                      {article.metadata.category.value}
                    </div>
                  )}
                  
                  <h3 className="font-bold text-lg mb-3 group-hover:text-orange-600 transition-colors">
                    {article.metadata?.headline || article.title}
                  </h3>
                  
                  {article.metadata?.summary && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.metadata.summary}
                    </p>
                  )}
                  
                  {publishDate && (
                    <div className="text-xs text-gray-500">
                      {publishDate}
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link 
            href="/news"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}