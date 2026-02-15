
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-4">Our Specialities</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Full Suite of Dental <span className="text-gradient">Services</span>
            </h3>
            <p className="text-lg text-slate-600">
              From routine cleanings to complex surgical procedures, we offer comprehensive dental care for all ages.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-cyan-200 transition-all hover:shadow-2xl hover:shadow-cyan-100 group cursor-pointer"
            >
              <div className="bg-cyan-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-cyan-600 font-bold group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
