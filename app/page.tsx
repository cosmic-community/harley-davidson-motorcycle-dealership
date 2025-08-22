import Hero from '@/components/Hero'
import FeaturedMotorcycles from '@/components/FeaturedMotorcycles'
import ProductCategories from '@/components/ProductCategories'
import LatestNews from '@/components/LatestNews'
import DealerLocator from '@/components/DealerLocator'
import CurrentPromotions from '@/components/CurrentPromotions'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMotorcycles />
      <ProductCategories />
      <CurrentPromotions />
      <LatestNews />
      <DealerLocator />
    </>
  )
}