// src/pages/Marketplace.jsx
import React from "react";
import { Star, MessageCircle, ArrowRight } from "lucide-react";

const Marketplace = () => {
  const coffeeProducts = [
    {
      id: 1,
      name: "Grade 1 Ethiopian Moka Harar",
      grade: "Grade 1",
      region: "Harar, Ethiopia",
      price: "$8.50/lb",
      rating: 4.9,
      available: true,
    },
    {
      id: 2,
      name: "Sidamo Washed Grade 2",
      grade: "Grade 2",
      region: "Sidamo, Ethiopia",
      price: "$7.25/lb",
      rating: 4.7,
      available: true,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Green Coffee Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct-to-farm transactions with Ethiopian coffee producers. Simple,
            transparent, and sustainable.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coffeeProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                      {product.grade}
                    </span>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-gray-600 mt-1">{product.region}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="text-2xl font-bold text-[#3B2322]">
                      {product.price}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#3B2322] text-white rounded-lg hover:bg-[#2d1a1a] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    Contact Sales
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3B2322] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Looking for Processed Products?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For roasted coffee, brewing equipment, and finished products, visit
            our sister company.
          </p>
          <a
            href="https://acaciabeverage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3B2322] font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Visit Acacia Beverage
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
