export default function WarrantySection() {
  const warrantyFeatures = [
    {
      title: "2-Year Unlimited Mileage",
      description: "Complete coverage for your new Harley-Davidson motorcycle with no mileage restrictions during the warranty period.",
      icon: "🛡️"
    },
    {
      title: "Genuine Parts Guarantee",
      description: "All warranty repairs use authentic Harley-Davidson parts to maintain your motorcycle's performance and value.",
      icon: "🔧"
    },
    {
      title: "Authorized Dealer Network", 
      description: "Get warranty service at any authorized Harley-Davidson dealer nationwide for your convenience.",
      icon: "🏪"
    },
    {
      title: "Extended Protection Available",
      description: "Optional extended service plans available to protect your investment beyond the standard warranty period.",
      icon: "📋"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <img
              src="https://images.ctfassets.net/5vy1mse9fkav/78rzR89t28gPHAepqNx7kS/cf3a9fbd13f89b084cdaa5bee77db3fb/shield-icon-black.svg"
              alt="Warranty Shield"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Harley-Davidson Warranty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your investment is protected with our comprehensive warranty coverage. 
            Ride with confidence knowing you're backed by legendary Harley-Davidson quality and service.
          </p>
        </div>

        {/* Warranty Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {warrantyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warranty Details */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coverage Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <img
                  src="https://images.ctfassets.net/5vy1mse9fkav/78rzR89t28gPHAepqNx7kS/cf3a9fbd13f89b084cdaa5bee77db3fb/shield-icon-black.svg"
                  alt="Shield"
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-3"
                />
                What's Covered
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Engine and transmission components
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Electrical system and electronics
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Fuel system and emissions control
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Suspension and braking systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Factory defects in materials and workmanship
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  24-month roadside assistance program
                </li>
              </ul>
            </div>

            {/* Important Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Important Information
              </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Warranty Period</h4>
                  <p>24 months from the date of original retail sale with unlimited mileage coverage.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Registration Required</h4>
                  <p>Warranty registration must be completed within 10 days of purchase for full coverage benefits.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Maintenance Requirements</h4>
                  <p>Regular scheduled maintenance using genuine Harley-Davidson parts and fluids is required.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transferable Coverage</h4>
                  <p>Remaining warranty coverage can be transferred to subsequent owners at no additional cost.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Register Your Motorcycle
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Download Warranty Guide
              </button>
              <button className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
                Find Service Center
              </button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For detailed warranty terms and conditions, or to learn about extended service plans, 
            contact your local Harley-Davidson dealer or visit our support center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dealers" className="text-orange-500 hover:text-orange-600 font-semibold hover:underline">
              Find a Dealer →
            </a>
            <a href="/support" className="text-orange-500 hover:text-orange-600 font-semibold hover:underline">
              Contact Support →
            </a>
            <a href="/parts" className="text-orange-500 hover:text-orange-600 font-semibold hover:underline">
              Genuine Parts & Accessories →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}