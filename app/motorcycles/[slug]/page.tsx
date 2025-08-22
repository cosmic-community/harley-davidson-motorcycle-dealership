// app/motorcycles/[slug]/page.tsx
import { getMotorcycle, getMotorcycles } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import MotorcycleDetail from '@/components/MotorcycleDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const motorcycles = await getMotorcycles(50)
  return motorcycles.map((motorcycle) => ({
    slug: motorcycle.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const motorcycle = await getMotorcycle(slug)

  if (!motorcycle) {
    return {
      title: 'Motorcycle Not Found | Harley-Davidson',
    }
  }

  return {
    title: `${motorcycle.metadata.model_name} | Harley-Davidson`,
    description: motorcycle.metadata.description || `Discover the ${motorcycle.metadata.model_name} motorcycle from Harley-Davidson.`,
  }
}

export default async function MotorcyclePage({ params }: PageProps) {
  const { slug } = await params
  const motorcycle = await getMotorcycle(slug)

  if (!motorcycle) {
    notFound()
  }

  return <MotorcycleDetail motorcycle={motorcycle} />
}