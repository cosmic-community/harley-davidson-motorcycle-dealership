import PartsGrid from '@/components/PartsGrid'
import { getParts } from '@/lib/cosmic'

export const metadata = {
  title: 'Parts & Accessories | Harley-Davidson Dealership',
  description: 'Shop genuine Harley-Davidson parts and accessories for your motorcycle.'
}

export default async function PartsPage() {
  let parts
  
  try {
    parts = await getParts(50)
  } catch (error) {
    console.error('Error fetching parts:', error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Parts & Accessories</h1>
        <p className="text-center text-gray-600">Unable to load parts at this time.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Parts & Accessories</h1>
        <p className="text-xl text-gray-600">
          Genuine Harley-Davidson parts and accessories
        </p>
      </div>
      
      <PartsGrid parts={parts} />
    </div>
  )
}