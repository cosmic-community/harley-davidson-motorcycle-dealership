'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Shield icon and brand text */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L3 7v5c0 6.6 4.5 11.2 9 12 4.5-.8 9-5.4 9-12V7l-9-5z" />
              </svg>
            </div>
            <Link href="/" className="text-xl font-bold">
              Premium Motorcycles
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/motorcycles" className="hover:text-orange-500 transition-colors">
              Motorcycles
            </Link>
            <Link href="/parts" className="hover:text-orange-500 transition-colors">
              Parts & Accessories
            </Link>
            <Link href="/apparel" className="hover:text-orange-500 transition-colors">
              Apparel
            </Link>
            <Link href="/services" className="hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/dealers" className="hover:text-orange-500 transition-colors">
              Dealers
            </Link>
            <Link href="/news" className="hover:text-orange-500 transition-colors">
              News
            </Link>
            <Link href="/warranty" className="hover:text-orange-500 transition-colors">
              Warranty
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <nav className="py-4 space-y-2">
              <Link
                href="/motorcycles"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Motorcycles
              </Link>
              <Link
                href="/parts"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Parts & Accessories
              </Link>
              <Link
                href="/apparel"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Apparel
              </Link>
              <Link
                href="/services"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/dealers"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dealers
              </Link>
              <Link
                href="/news"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/warranty"
                className="block py-2 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Warranty
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}