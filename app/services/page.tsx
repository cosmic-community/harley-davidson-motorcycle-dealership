import ServicesGrid from '@/components/ServicesGrid'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Services | Harley-Davidson Dealership',  
  description: 'Professional motorcycle services including maintenance, repairs, training, and customization.'
}

export default async function ServicesPage() {
  let services
  
  try {
    services = await getServices()
  } catch (error) {
    console.error('Error fetching services:', error)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-center text-gray-600">Unable to load services at this time.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Professional motorcycle services and training
        </p>
      </div>
      
      <ServicesGrid services={services} />
    </div>
  )
}