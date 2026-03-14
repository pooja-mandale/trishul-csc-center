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
                className="w-full py-4 md:py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-black rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884h.001c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
