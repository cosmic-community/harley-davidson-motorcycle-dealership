'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-harley-black text-white sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-harley-orange">
            HARLEY-DAVIDSON
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/motorcycles" className="hover:text-harley-orange transition-colors">
              Motorcycles
            </Link>
            <Link href="/parts" className="hover:text-harley-orange transition-colors">
              Parts
            </Link>
            <Link href="/apparel" className="hover:text-harley-orange transition-colors">
              Apparel
            </Link>
            <Link href="/services" className="hover:text-harley-orange transition-colors">
              Services
            </Link>
            <Link href="/dealers" className="hover:text-harley-orange transition-colors">
              Dealers
            </Link>
            <Link href="/news" className="hover:text-harley-orange transition-colors">
              News
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/motorcycles" className="py-2 hover:text-harley-orange transition-colors">
                Motorcycles
              </Link>
              <Link href="/parts" className="py-2 hover:text-harley-orange transition-colors">
                Parts
              </Link>
              <Link href="/apparel" className="py-2 hover:text-harley-orange transition-colors">
                Apparel
              </Link>
              <Link href="/services" className="py-2 hover:text-harley-orange transition-colors">
                Services
              </Link>
              <Link href="/dealers" className="py-2 hover:text-harley-orange transition-colors">
                Dealers
              </Link>
              <Link href="/news" className="py-2 hover:text-harley-orange transition-colors">
                News
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}