import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imgix.cosmicjs.com/95f74330-7f01-11f0-8dcc-651091f6a7c0-photo-1558618666-fcd25c85cd64-1755830520898.jpg?w=1920&h=1080&fit=crop&auto=format,compress"
          alt="Harley-Davidson Motorcycle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LIVE TO
          <span className="block text-harley-orange">RIDE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Experience the freedom of the open road with legendary Harley-Davidson motorcycles
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/motorcycles" className="btn-harley">
            Shop Motorcycles
          </Link>
          <Link href="/dealers" className="btn-harley-outline">
            Find a Dealer
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}