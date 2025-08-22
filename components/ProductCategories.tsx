import Link from 'next/link'

const categories = [
  {
    title: 'Motorcycles',
    description: 'Discover our complete lineup of legendary motorcycles',
    image: 'https://imgix.cosmicjs.com/95f74330-7f01-11f0-8dcc-651091f6a7c0-photo-1558618666-fcd25c85cd64-1755830520898.jpg',
    href: '/motorcycles',
    bgColor: 'bg-harley-black'
  },
  {
    title: 'Parts & Accessories',
    description: 'Genuine parts to customize and maintain your ride',
    image: 'https://imgix.cosmicjs.com/9659ae80-7f01-11f0-8dcc-651091f6a7c0-photo-1609630875171-b1321377ee65-1755830521709.jpg',
    href: '/parts',
    bgColor: 'bg-harley-gray'
  },
  {
    title: 'Apparel',
    description: 'Authentic clothing that embodies the Harley spirit',
    image: 'https://imgix.cosmicjs.com/96121e30-7f01-11f0-8dcc-651091f6a7c0-photo-1551028719-00167b16eac5-1755830520991.jpg',
    href: '/apparel',
    bgColor: 'bg-harley-black'
  }
]

export default function ProductCategories() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-harley-black mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for the ultimate Harley-Davidson experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.title}
              href={category.href}
              className="group relative h-80 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={`${category.image}?w=600&h=600&fit=crop&auto=format,compress`}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${category.bgColor} bg-opacity-60 group-hover:bg-opacity-50 transition-all`}></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-harley-orange transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white transition-colors">
                  {category.description}
                </p>
                <div className="mt-4 text-harley-orange font-semibold">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}