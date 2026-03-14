import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* About Section - Brief placeholder as requested by Menu item */}
        <section id="about" className="py-24 bg-blue-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-tight">About Trishul CSC Center</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                We are a government authorized Digital Seva Kendra dedicated to providing essential digital services to our community. 
                With years of experience in handling GST, ITR, banking, and travel services, we ensure accuracy and speed in every transaction.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">500+</div>
                  <div className="text-sm uppercase tracking-widest opacity-70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">15+</div>
                  <div className="text-sm uppercase tracking-widest opacity-70">Expert Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
                  <div className="text-sm uppercase tracking-widest opacity-70">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">24/7</div>
                  <div className="text-sm uppercase tracking-widest opacity-70">Support</div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30" />
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
