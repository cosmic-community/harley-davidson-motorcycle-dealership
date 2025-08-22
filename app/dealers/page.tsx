import { getDealers } from '@/lib/cosmic'
import DealersGrid from '@/components/DealersGrid'

export default async function DealersPage() {
  const dealers = await getDealers()

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-harley-black mb-4">
            Find a Dealer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Locate your nearest Harley-Davidson dealer for sales, service, and parts
          </p>
        </div>

        <DealersGrid dealers={dealers} />
      </div>
    </div>
  )
}