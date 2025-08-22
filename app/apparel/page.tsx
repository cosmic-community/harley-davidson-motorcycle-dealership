import { getApparel } from '@/lib/cosmic'
import ApparelGrid from '@/components/ApparelGrid'

export const metadata = {
  title: 'Apparel | Harley-Davidson',
  description: 'Authentic Harley-Davidson clothing and accessories for men and women. Jackets, shirts, tanks, hats, gloves and more.',
}

export default async function ApparelPage() {
  const apparel = await getApparel(20)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-black text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Apparel
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Authentic Harley-Davidson clothing and accessories that embody the spirit 
            of freedom and rebellion.
          </p>
        </div>
      </div>

      {/* Apparel Grid */}
      <div className="section-padding">
        <div className="container-max">
          <ApparelGrid apparel={apparel} />
        </div>
      </div>
    </div>
  )
}