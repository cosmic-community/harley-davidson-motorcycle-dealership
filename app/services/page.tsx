import { getServices } from '@/lib/cosmic'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata = {
  title: 'Services | Harley-Davidson',
  description: 'Professional Harley-Davidson services including maintenance, repairs, training courses, customization, insurance, and financing.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-harley-gray text-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional services to keep you riding. From maintenance to training, 
            we've got you covered.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="section-padding">
        <div className="container-max">
          <ServicesGrid services={services} />
        </div>
      </div>
    </div>
  )
}