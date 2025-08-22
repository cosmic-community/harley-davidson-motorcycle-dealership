import { getMotorcycles } from '@/lib/cosmic'
import MotorcycleCard from '@/components/MotorcycleCard'
import Link from 'next/link'

export default async function FeaturedMotorcycles() {
  const motorcycles = await getMotorcycles(3)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-harley-black mb-4">
            Featured Motorcycles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular models that define the spirit of freedom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/motorcycles" className="btn-harley">
            View All Motorcycles
          </Link>
        </div>
      </div>
    </section>
  )
}