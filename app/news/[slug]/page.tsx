// app/news/[slug]/page.tsx
import { notFound } from 'next/navigation'
import NewsDetail from '@/components/NewsDetail'
import { getNewsArticle } from '@/lib/cosmic'

interface NewsPageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params
  
  let news
  
  try {
    news = await getNewsArticle(slug)
  } catch (error) {
    console.error('Error fetching news article:', error)
    notFound()
  }
  
  if (!news) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <NewsDetail news={news} />
    </div>
  )
}

export async function generateMetadata({ params }: NewsPageProps) {
  const { slug } = await params
  
  try {
    const news = await getNewsArticle(slug)
    
    if (!news) {
      return {
        title: 'News Article Not Found',
      }
    }

    return {
      title: `${news.metadata?.headline || news.title} | Harley-Davidson Dealership`,
      description: news.metadata?.summary || undefined,
    }
  } catch (error) {
    return {
      title: 'News Article Not Found',
    }
  }
}