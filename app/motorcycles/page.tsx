import { getMotorcycles } from '@/lib/cosmic'
import MotorcycleGrid from '@/components/MotorcycleGrid'

export const metadata = {
  title: 'Motorcycles | Harley-Davidson',
  description: 'Browse the complete lineup of Harley-Davidson motorcycles including Grand American Touring, Cruiser, Trike, Adventure, and Sport models.',
}

export default async function MotorcyclesPage() {
  const motorcycles = await getMotorcycles(20)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-black text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Motorcycles
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover the legendary Harley-Davidson lineup. From Grand American Touring to Sport models, 
            find the motorcycle that matches your spirit of freedom.
          </p>
        </div>
      </div>

      {/* Motorcycles Grid */}
      <div className="section-padding">
        <div className="container-max">
          <MotorcycleGrid motorcycles={motorcycles} />
        </div>
      </div>
    </div>
  )
}