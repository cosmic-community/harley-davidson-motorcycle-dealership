import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-harley-black text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-harley-orange font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/news" className="hover:text-harley-orange transition-colors">News</Link></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-harley-orange font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/motorcycles" className="hover:text-harley-orange transition-colors">Motorcycles</Link></li>
              <li><Link href="/parts" className="hover:text-harley-orange transition-colors">Parts & Accessories</Link></li>
              <li><Link href="/apparel" className="hover:text-harley-orange transition-colors">Apparel</Link></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-harley-orange font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-harley-orange transition-colors">All Services</Link></li>
              <li><Link href="/dealers" className="hover:text-harley-orange transition-colors">Find a Dealer</Link></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-harley-orange font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-harley-orange transition-colors">H.O.G. Chapter</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Museum</a></li>
              <li><a href="#" className="hover:text-harley-orange transition-colors">Rentals</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Harley-Davidson Motor Company. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-harley-orange transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-harley-orange transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-harley-orange transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}