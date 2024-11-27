import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Craft Coffee for the Bold
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Small-batch roasted beans for those who dare to taste the difference
          </p>
          <button className="bg-amber-500 text-black px-8 py-3 rounded-none hover:bg-amber-400 transition font-semibold">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}