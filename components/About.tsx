
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Dentist"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 glass p-6 rounded-2xl shadow-xl z-20 border-cyan-100">
              <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider mb-2">Our Mission</p>
              <p className="text-slate-700 font-medium italic">
                "To deliver exceptional dental care with a gentle touch, making every patient smile with confidence."
              </p>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-4">About YouDent</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Leading the Way in Modern Dentistry
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At YouDent, we combine artistry with advanced science to provide the best dental outcomes. Our clinic in Bhayander is designed to offer a soothing environment where your comfort is our top priority.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Modern & Minimal Pain Procedures",
                "Advanced Digital 3D Scanners",
                "Expert Multi-Specialist Team",
                "Sterilized & Hygienic Environment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="bg-cyan-100 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-slate-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all">
              Learn More Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
