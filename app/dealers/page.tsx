import { getDealers } from '@/lib/cosmic'
import DealersGrid from '@/components/DealersGrid'

export default async function DealersPage() {
  const dealers = await getDealers()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-black text-white py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Local Dealer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Connect with authorized Harley-Davidson dealers for expert service, 
            genuine parts, and your next motorcycle purchase.
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