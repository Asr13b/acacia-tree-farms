// pages/Home.jsx
import React from "react";
import { ArrowRight, Leaf, Shield, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Farming",
      description: "Ethically sourced coffee from the heart of Ethiopia",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Verified",
      description: "Transparent supply chain from farm to cup",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Supporting communities in the Harar region",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Trade",
      description: "Fair compensation for farmers",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sustainable Coffee.
            <span className="block text-[#3B2322]">Ethical Impact.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Partnering with Ethiopian farmers to deliver premium specialty
            coffee while creating lasting social and environmental change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/marketplace"
              className="px-8 py-4 bg-[#3B2322] text-white font-medium rounded-lg hover:bg-[#2d1a1a] transition-colors inline-flex items-center justify-center gap-2"
            >
              Browse Coffee
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/csr"
              className="px-8 py-4 border-2 border-[#3B2322] text-[#3B2322] font-medium rounded-lg hover:bg-[#3B2322] hover:text-white transition-colors"
            >
              Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3B2322]/10 flex items-center justify-center text-[#3B2322]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Purpose</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in transforming the coffee industry through sustainable
            practices and community development.
          </p>
          <a
            href="https://acaciabeverage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B2322] text-white font-medium rounded-lg hover:bg-[#2d1a1a] transition-colors"
          >
            Visit Our Beverage Company
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
