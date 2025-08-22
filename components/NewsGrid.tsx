import Link from 'next/link'
import { News } from '@/types'

interface NewsGridProps {
  news: News[]
}

export default function NewsGrid({ news }: NewsGridProps) {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No news articles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              
              <h3 className="font-bold text-xl mb-3 group-hover:text-orange-600 transition-colors">
                {article.metadata?.headline || article.title}
              </h3>
              
              {article.metadata?.summary && (
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.metadata.summary}
                </p>
              )}
              
              {publishDate && (
                <div className="text-sm text-gray-500">
                  {publishDate}
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}