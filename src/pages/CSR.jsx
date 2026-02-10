import React from "react";
import {
  Droplets,
  GraduationCap,
  Heart,
  Users,
  PawPrint,
  MapPin,
  TreePine,
  Target,
} from "lucide-react";
import hararImage from "../assets/harar-region.jpg";

const CSR = () => {
  const impactAreas = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Clean Water",
      description:
        "Providing access to clean drinking water for farming communities",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Scholarship programs and school infrastructure development",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Health",
      description: "Healthcare facilities and nutrition programs",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women’s Empowerment",
      description:
        "Training and leadership programs for women in coffee farming",
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Cheetah Rescue",
      description: "Wildlife conservation and habitat protection initiatives",
    },
  ];

  const hararFeatures = [
    { icon: <MapPin />, text: "Eastern Highlands of Ethiopia" },
    { icon: <TreePine />, text: "Organic coffee farming since 1950" },
    { icon: <Target />, text: "Direct support to 500+ farming families" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Foundation: Rooted in Purpose
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our corporate social responsibility initiatives are deeply
            integrated into our business model, creating sustainable impact in
            the communities where we work.
          </p>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3B2322]/10 flex items-center justify-center text-[#3B2322] mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harar Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Harar Region Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nestled in the Eastern Highlands of Ethiopia, Harar is where
                  our journey began. This ancient city, a UNESCO World Heritage
                  Site, is home to some of the world's most distinctive coffee
                  varieties.
                </p>
                <p>
                  For generations, local farmers have cultivated the unique Moka
                  Harar beans using traditional methods passed down through
                  families. We partner directly with these farming communities,
                  ensuring fair compensation and sustainable practices.
                </p>
                <p>
                  Our foundation works hand-in-hand with local leaders to
                  address community needs, from clean water access to education,
                  creating a model of ethical sourcing that benefits everyone in
                  the supply chain.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {hararFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3B2322] flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={hararImage}
                alt="Harar Region"
                className="aspect-square rounded-2xl object-cover w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="aspect-square rounded-2xl bg-gradient-to-br from-[#3B2322] to-[#5c3a38]"></div>
                    <div class="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-2xl bg-gradient-to-tr from-amber-900/20 to-transparent border border-white/10 backdrop-blur-sm p-6">
                      <div class="text-white">
                        <div class="text-4xl font-bold mb-2">500+</div>
                        <div class="text-lg">Farming Families Supported</div>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-2xl bg-gradient-to-tr from-amber-900/20 to-transparent border border-white/10 backdrop-blur-sm p-6">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg">Farming Families Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Every purchase supports our foundation's work in the Harar region.
            Together, we can create lasting change.
          </p>
          <a
            href="/marketplace"
            className="inline-block px-8 py-4 bg-[#3B2322] text-white font-medium rounded-lg hover:bg-[#2d1a1a] transition-colors"
          >
            Shop with Purpose
          </a>
        </div>
      </section>
    </div>
  );
};

export default CSR;
