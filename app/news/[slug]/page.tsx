// app/news/[slug]/page.tsx
import { getNewsArticle, getNews } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import NewsDetail from '@/components/NewsDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const news = await getNews(50)
  return news.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const article = await getNewsArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Harley-Davidson News',
    }
  }

  return {
    title: `${article.metadata.headline} | Harley-Davidson News`,
    description: article.metadata.summary,
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  return <NewsDetail article={article} />
}