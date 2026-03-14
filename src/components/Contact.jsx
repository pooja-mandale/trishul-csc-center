import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappNumber = '916306121646'; // Added 91 for India
    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">Contact Us</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch with Us</h3>
              <p className="text-gray-600 mb-8 max-w-md">
                Have questions or need assistance? Fill out the form or reach us via our WhatsApp for instant response.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Call or WhatsApp</p>
                  <p className="text-lg font-bold text-gray-800 tracking-tight">+91 6306121646</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Our Office</p>
                  <p className="text-lg font-bold text-gray-800 tracking-tight">Satyajeet Banerjee, Dafi, Varanasi</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
               <div className="p-6 bg-blue-900 rounded-3xl text-white shadow-2xl transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold mb-2">Business Hours</h4>
                  <div className="flex justify-between border-b border-blue-800 py-2">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold text-amber-400">10:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300 shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300 shadow-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-300 shadow-sm min-h-[150px]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-sm"
              >
                Send Message via WhatsApp
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
