import React from 'react';

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80",
    description: "Bright, complex with floral notes"
  },
  {
    id: 2,
    name: "Colombian Dark",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80",
    description: "Bold, rich with chocolate undertones"
  },
  {
    id: 3,
    name: "Indonesian Sumatra",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80",
    description: "Earthy, full-bodied with spice notes"
  }
];

export function FeaturedProducts() {
  return (
    <section className="bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Roasts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-gray-400 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-amber-500 font-bold">${product.price}</span>
                  <button className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}