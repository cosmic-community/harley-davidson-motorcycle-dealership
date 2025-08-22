import { Motorcycle } from '@/types'
import MotorcycleCard from '@/components/MotorcycleCard'

interface MotorcycleGridProps {
  motorcycles: Motorcycle[]
}

export default function MotorcycleGrid({ motorcycles }: MotorcycleGridProps) {
  if (!motorcycles || motorcycles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">No Motorcycles Found</h3>
        <p className="text-gray-600">Check back soon for new models.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {motorcycles.map((motorcycle) => (
        <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </div>
  )
}