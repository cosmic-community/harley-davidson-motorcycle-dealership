import NewsGrid from '@/components/NewsGrid'
import { getNews } from '@/lib/cosmic'

export const metadata = {
  title: 'News | Harley-Davidson Dealership',
  description: 'Stay up to date with the latest Harley-Davidson news, product announcements, and events.'
}

export default async function NewsPage() {
  let news
  
  try {
    news = await getNews(50)
  } catch (error) {
    console.error('Error fetching news:', error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
        <p className="text-center text-gray-600">Unable to load news at this time.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
        <p className="text-xl text-gray-600">
          Stay up to date with the latest Harley-Davidson news and updates
        </p>
      </div>
      
      <NewsGrid news={news} />
    </div>
  )
}