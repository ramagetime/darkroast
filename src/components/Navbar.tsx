import React from 'react';
import { Coffee, ShoppingCart, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-amber-500" : "text-white hover:text-amber-500";
  };

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8" />
          <span className="font-bold text-xl tracking-tighter">DARK ROAST</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`transition ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`transition ${isActive('/about')}`}>About</Link>
          <Link to="#" className="hover:text-amber-500 transition">Shop</Link>
          <Link to="#" className="hover:text-amber-500 transition">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <ShoppingCart className="h-6 w-6 hover:text-amber-500 cursor-pointer transition" />
          <Menu className="h-6 w-6 md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}