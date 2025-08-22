import { getParts } from '@/lib/cosmic'
import PartsGrid from '@/components/PartsGrid'

export const metadata = {
  title: 'Parts & Accessories | Harley-Davidson',
  description: 'Genuine Harley-Davidson parts and accessories. Find engine parts, exhaust systems, wheels, lighting, seats, handlebars, and storage solutions.',
}

export default async function PartsPage() {
  const parts = await getParts(20)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-gray text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Parts & Accessories
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Genuine Harley-Davidson parts and accessories to customize, maintain, 
            and enhance your motorcycle experience.
          </p>
        </div>
      </div>

      {/* Parts Grid */}
      <div className="section-padding">
        <div className="container-max">
          <PartsGrid parts={parts} />
        </div>
      </div>
    </div>
  )
}