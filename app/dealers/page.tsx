import DealersGrid from '@/components/DealersGrid'
import { getDealers } from '@/lib/cosmic'

export const metadata = {
  title: 'Dealers | Harley-Davidson Dealership',
  description: 'Find your local Harley-Davidson dealership for sales, service, and parts.'
}

export default async function DealersPage() {
  let dealers
  
  try {
    dealers = await getDealers()
  } catch (error) {
    console.error('Error fetching dealers:', error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Find a Dealer</h1>
        <p className="text-center text-gray-600">Unable to load dealers at this time.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find a Dealer</h1>
        <p className="text-xl text-gray-600">
          Locate your nearest Harley-Davidson dealership
        </p>
      </div>
      
      <DealersGrid dealers={dealers} />
    </div>
  )
}