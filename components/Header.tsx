'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-harley-black">
              Harley-Davidson
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/motorcycles" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              Motorcycles
            </Link>
            <Link href="/parts" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              Parts & Accessories
            </Link>
            <Link href="/apparel" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              Apparel
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              Services
            </Link>
            <Link href="/dealers" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              Dealers
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-orange-500 font-semibold transition-colors">
              News
            </Link>
            
            {/* Shield Icon */}
            <div className="flex items-center ml-6">
              <img
                src="https://images.ctfassets.net/5vy1mse9fkav/78rzR89t28gPHAepqNx7kS/cf3a9fbd13f89b084cdaa5bee77db3fb/shield-icon-black.svg"
                alt="Harley-Davidson Shield"
                className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>

            {/* Warranty Link */}
            <Link href="/warranty" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
              Warranty
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-orange-500 hover:border-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/motorcycles"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Motorcycles
              </Link>
              <Link
                href="/parts"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Parts & Accessories
              </Link>
              <Link
                href="/apparel"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Apparel
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/dealers"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Dealers
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              
              {/* Shield Icon for Mobile */}
              <div className="flex items-center px-3 py-2">
                <img
                  src="https://images.ctfassets.net/5vy1mse9fkav/78rzR89t28gPHAepqNx7kS/cf3a9fbd13f89b084cdaa5bee77db3fb/shield-icon-black.svg"
                  alt="Harley-Davidson Shield"
                  className="w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>

              <Link
                href="/warranty"
                className="block mx-3 my-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Warranty
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}