import WarrantySection from '@/components/WarrantySection'

export const metadata = {
  title: 'Warranty Information | Harley-Davidson',
  description: 'Learn about Harley-Davidson warranty coverage, terms, and conditions. Protect your investment with comprehensive warranty protection and nationwide dealer support.',
}

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white">
      <WarrantySection />
    </div>
  )
}