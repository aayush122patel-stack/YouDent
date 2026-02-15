
import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../constants';
import { Phone, Calendar } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-soft rounded-bl-[100px] -z-10 hidden lg:block" />
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Dental Clinic"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] object-cover rounded-l-3xl shadow-2xl hidden lg:block"
        />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Professional Dental Care in Bhayander</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Confident <span className="text-gradient">Smiles</span> <br /> Start Here
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Experience world-class dental treatments with our expert team at YouDent. We provide high-quality, pain-free dental care tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onBookClick}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-cyan-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-800 border-2 border-slate-100 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">10k+</p>
                <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-500 font-medium">Expert Specialists</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                <p className="text-sm text-slate-500 font-medium">Google Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
