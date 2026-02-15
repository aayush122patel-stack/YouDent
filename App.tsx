
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Automatically open the appointment modal after the page loads
      setIsModalOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onBookClick={() => setIsModalOpen(true)} />
            <WhyChooseUs />
            <Services />
            <Testimonials />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return (
          <>
            <Services />
            <WhyChooseUs />
          </>
        );
      case 'reviews':
        return <Testimonials />;
      case 'contact':
        return <BookingForm />;
      default:
        return <Hero onBookClick={() => setIsModalOpen(true)} />;
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-cyan-100 border-t-cyan-600 rounded-full animate-spin mb-4"></div>
          <span className="text-cyan-800 font-bold tracking-widest uppercase text-xs">YouDent Clinic</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900 min-h-screen flex flex-col">
      <Header activePage={activePage} setActivePage={setActivePage} onBookClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      <WhatsAppButton />
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
