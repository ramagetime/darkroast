import React from 'react';
import { Coffee, Award, Leaf, Users } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: "Artisanal Roasting",
    description: "Each batch is carefully roasted to perfection in our small-batch roaster, ensuring optimal flavor development."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We source only the top 1% of specialty grade coffee beans from sustainable farms worldwide."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Our commitment to environmental responsibility shapes every decision we make, from farming to packaging."
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building lasting relationships with our farmers, customers, and local community."
  }
];

export function AboutPage() {
  return (
    <div className="pt-20 bg-zinc-900">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300">
              Crafting exceptional coffee experiences since 2024
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Dark Roast, we believe that great coffee is more than just a beverage – it's an experience that brings people together. Our mission is to source the finest beans, roast them with precision, and share our passion for coffee with the world.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-zinc-800 hover:border-amber-500 transition-colors">
                <feature.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">James Wilson</h3>
              <p className="text-amber-500">Master Roaster</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Sarah Chen</h3>
              <p className="text-amber-500">Green Coffee Buyer</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Michael Rodriguez</h3>
              <p className="text-amber-500">Head of Quality Control</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}