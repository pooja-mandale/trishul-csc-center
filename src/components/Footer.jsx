import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter uppercase">TRISHUL <span className="text-amber-400">CSC</span> CENTER</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner for all digital government services, banking, insurance, and travel bookings.
            </p>
            <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Address: Satyajeet Banerjee, Dafi, Varanasi
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400 uppercase tracking-widest text-[10px]">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs mb-2">
            &copy; {new Date().getFullYear()} TRISHUL CSC CENTER. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-medium">
            Designed and Developed by <span className="text-amber-400 font-bold">Pooja Mandale</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
