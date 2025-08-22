import { getDealers } from '@/lib/cosmic'
import DealersGrid from '@/components/DealersGrid'

export const metadata = {
  title: 'Dealers | Harley-Davidson',
  description: 'Find authorized Harley-Davidson dealers near you. Get contact information, hours, and available services.',
}

export default async function DealersPage() {
  const dealers = await getDealers()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-black text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find a Dealer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Locate authorized Harley-Davidson dealers for sales, service, parts, 
            and accessories.
          </p>
        </div>
      </div>

      {/* Dealers Grid */}
      <div className="section-padding">
        <div className="container-max">
          <DealersGrid dealers={dealers} />
        </div>
      </div>
    </div>
  )
}