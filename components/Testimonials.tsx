
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-4">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Hear From Our <span className="text-gradient">Patients</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-8 text-cyan-200">
                <Quote size={48} />
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-cyan-100"
                />
                <div>
                  <h5 className="font-bold text-slate-900">{review.name}</h5>
                  <p className="text-xs text-slate-500 font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
