import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">DARK ROAST</h3>
          <p className="text-gray-400">
            Crafting bold experiences through exceptional coffee since 2024.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-amber-500 transition">Shop</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Brewing Guides</a></li>
            <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Coffee Street</li>
            <li>Portland, OR 97201</li>
            <li>hello@darkroast.com</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Instagram className="h-6 w-6 hover:text-amber-500 cursor-pointer transition" />
            <Twitter className="h-6 w-6 hover:text-amber-500 cursor-pointer transition" />
            <Facebook className="h-6 w-6 hover:text-amber-500 cursor-pointer transition" />
            <Mail className="h-6 w-6 hover:text-amber-500 cursor-pointer transition" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Dark Roast. All rights reserved.</p>
      </div>
    </footer>
  );
}