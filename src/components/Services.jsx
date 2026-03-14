import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, CreditCard, Building2, Landmark, 
  Plane, Ticket, Monitor, FileType, CheckCircle, 
  UserRound, HandCoins, Receipt, Info
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 transition-all hover:bg-blue-50/50 group"
  >
    <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors uppercase text-sm tracking-wide">{title}</h3>
      <p className="text-gray-500 text-sm">Professional service for your digital needs.</p>
    </div>
  </motion.div>
);

const Services = () => {
  const leftServices = [
    { title: 'GST Registration & Return', icon: FileText },
    { title: 'MSME / Udyam Registration', icon: CheckCircle },
    { title: 'ITR (Income Tax Return)', icon: Landmark },
    { title: 'Society Registration', icon: Building2 },
    { title: 'Trust Registration', icon: ShieldCheck },
    { title: 'Firm / Company Registration', icon: Building2 },
    { title: 'PAN Card / Aadhaar Services', icon: UserRound },
    { title: 'AEPS / Money Transfer', icon: HandCoins },
    { title: 'Banking Services', icon: Landmark },
    { title: 'Insurance Services', icon: ShieldCheck },
  ];

  const rightServices = [
    { title: 'Train / Bus / Flight Ticket', icon: Plane },
    { title: 'Bill Payment', icon: Receipt },
    { title: 'Passport Services', icon: FileType },
    { title: 'Document Printing', icon: Monitor },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">Our Services</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of digital and government authorized services provided with professionalism and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Government & Business</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leftServices.map((service, idx) => (
                <ServiceCard key={service.title} {...service} delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Right Column Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white">
                <Ticket size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Utility & Travel</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {rightServices.map((service, idx) => (
                <ServiceCard key={service.title} {...service} delay={idx * 0.1} />
              ))}
            </div>
            
            {/* Additional Info Cards inside Services Section as requested */}
            <div className="mt-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl flex items-center gap-6"
              >
                <div className="bg-white/20 p-4 rounded-2xl">
                  <Info className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Services Available at Your Home</h4>
                  <p className="text-blue-100 opacity-90">We bring our digital services directly to your doorstep for your convenience.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-amber-500 text-blue-900 p-8 rounded-3xl shadow-xl flex items-center gap-6"
              >
                <div className="bg-blue-900/10 p-4 rounded-2xl">
                  <UserRound className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Area Manager Required</h4>
                  <p className="font-semibold">Join our growing team! We are looking for dedicated professionals.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
