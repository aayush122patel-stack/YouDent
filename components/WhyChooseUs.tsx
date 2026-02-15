
import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-4">The YouDent Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Why Patients Trust Our <br /> <span className="text-gradient">Expertise</span>
            </h3>
          </div>
          <p className="text-slate-600 text-lg lg:max-w-md lg:text-right text-center lg:text-left">
            We prioritize your health, comfort, and time with every visit. Discover what makes us the preferred choice for dental care in Bhayander.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-cyan-600 transition-all duration-300 cursor-default hover:shadow-2xl hover:shadow-cyan-200"
            >
              <div className="bg-cyan-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-300">
                <div className="text-cyan-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
