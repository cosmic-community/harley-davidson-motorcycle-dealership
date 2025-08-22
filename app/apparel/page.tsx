import ApparelGrid from '@/components/ApparelGrid'
import { getApparel } from '@/lib/cosmic'

export const metadata = {
  title: 'Apparel | Harley-Davidson Dealership',
  description: 'Shop official Harley-Davidson apparel including jackets, shirts, accessories and more.'
}

export default async function ApparelPage() {
  let apparel
  
  try {
    apparel = await getApparel(50)
  } catch (error) {
    console.error('Error fetching apparel:', error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Harley-Davidson Apparel</h1>
        <p className="text-center text-gray-600">Unable to load apparel at this time.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Harley-Davidson Apparel</h1>
        <p className="text-xl text-gray-600">
          Authentic Harley-Davidson clothing and accessories
        </p>
      </div>
      
      <ApparelGrid apparel={apparel} />
    </div>
  )
}