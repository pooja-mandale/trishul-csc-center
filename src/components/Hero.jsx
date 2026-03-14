import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/image-1.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-white z-10" />
        <img 
          src={heroImg} 
          alt="Trishul CSC Center Hero" 
          className="w-full h-full object-cover"
        />
      </div>


      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-400 uppercase bg-blue-900/40 backdrop-blur-md rounded-full border border-amber-400/30">
            Government Authorized Service Center
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            TRISHUL <span className="text-amber-400">CSC</span> CENTER
          </h1>
          <p className="text-sm md:text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed font-medium italic drop-shadow-md">
            "Aapka Apna Digital Seva Kendra"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-600 text-blue-950 font-black rounded-2xl shadow-xl flex items-center justify-center transition-all uppercase tracking-wider"
            >
              Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 shadow-lg transition-all uppercase tracking-wider"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>


      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#services" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
