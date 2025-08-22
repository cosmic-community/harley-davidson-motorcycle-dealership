'use client'

import { useState, useEffect } from 'react'
import { Dealer } from '@/types'

interface DealerLocatorProps {
  dealers?: Dealer[]
}

export default function DealerLocator({ dealers = [] }: DealerLocatorProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>(dealers)
  const [selectedState, setSelectedState] = useState('')
  
  // Get unique states from dealers
  const states = Array.from(new Set(
    dealers
      .filter(dealer => dealer?.metadata?.state)
      .map(dealer => dealer.metadata.state)
  )).sort()

  useEffect(() => {
    let filtered = dealers

    // Filter by search term (city, name, or address)
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(dealer => {
        if (!dealer?.metadata) return false
        
        const dealerName = dealer.metadata.dealer_name?.toLowerCase() || ''
        const city = dealer.metadata.city?.toLowerCase() || ''
        const address = dealer.metadata.address?.toLowerCase() || ''
        const state = dealer.metadata.state?.toLowerCase() || ''
        
        return dealerName.includes(search) || 
               city.includes(search) || 
               address.includes(search) ||
               state.includes(search)
      })
    }

    // Filter by selected state
    if (selectedState) {
      filtered = filtered.filter(dealer => 
        dealer?.metadata?.state === selectedState
      )
    }

    setFilteredDealers(filtered)
  }, [searchTerm, selectedState, dealers])

  const formatHours = (hours: Record<string, string> | undefined) => {
    if (!hours) return null

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    const todayHours = hours[today]

    if (!todayHours) return null

    return (
      <div className="text-sm text-gray-600">
        <strong>Today:</strong> {todayHours}
      </div>
    )
  }

  if (!dealers || dealers.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Local Dealer</h2>
          <p className="text-gray-600">No dealers available at this time.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Your Local Dealer</h2>
          <p className="text-xl text-gray-600">
            Visit our authorized dealers for sales, service, and genuine parts
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search by city, dealer name, or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-harley-orange focus:border-transparent"
              />
            </div>
            <div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-harley-orange focus:border-transparent"
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredDealers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">
              No dealers found matching your criteria. Try adjusting your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer) => {
              if (!dealer?.id || !dealer.metadata) {
                return null
              }

              const storeImage = dealer.metadata.store_image
              const imageUrl = storeImage?.imgix_url 
                ? `${storeImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`
                : '/placeholder-dealer.jpg'

              return (
                <div key={dealer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={dealer.metadata.dealer_name || dealer.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">
                      {dealer.metadata.dealer_name || dealer.title}
                    </h3>
                    
                    <div className="text-gray-600 mb-3">
                      {dealer.metadata.address && (
                        <p>{dealer.metadata.address}</p>
                      )}
                      {dealer.metadata.city && dealer.metadata.state && dealer.metadata.zip_code && (
                        <p>
                          {dealer.metadata.city}, {dealer.metadata.state} {dealer.metadata.zip_code}
                        </p>
                      )}
                    </div>

                    {dealer.metadata.phone_number && (
                      <div className="mb-2">
                        <a
                          href={`tel:${dealer.metadata.phone_number}`}
                          className="text-harley-orange hover:underline font-medium"
                        >
                          {dealer.metadata.phone_number}
                        </a>
                      </div>
                    )}

                    {dealer.metadata.website && (
                      <div className="mb-3">
                        <a
                          href={dealer.metadata.website.startsWith('http') 
                            ? dealer.metadata.website 
                            : `https://${dealer.metadata.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-harley-orange hover:underline text-sm"
                        >
                          Visit Website →
                        </a>
                      </div>
                    )}

                    {formatHours(dealer.metadata.hours)}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}