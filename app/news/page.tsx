import { getNews } from '@/lib/cosmic'
import NewsGrid from '@/components/NewsGrid'

export const metadata = {
  title: 'News | Harley-Davidson',
  description: 'Latest news and updates from Harley-Davidson including product announcements, events, and company news.',
}

export default async function NewsPage() {
  const news = await getNews(20)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-gray text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            News
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay up to date with the latest news, product announcements, and events 
            from Harley-Davidson.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="section-padding">
        <div className="container-max">
          <NewsGrid news={news} />
        </div>
      </div>
    </div>
  )
}