
import React, { useState, useEffect } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onBookClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass py-3 shadow-sm' : 'bg-white/80 py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 group">
            <div className="bg-cyan-600 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              You<span className="text-cyan-600">Dent</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  activePage === link.id ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                {link.name}
                {activePage === link.id && (
                  <motion.div 
                    layoutId="activeNav" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600 rounded-full" 
                  />
                )}
              </button>
            ))}
            <button
              onClick={onBookClick}
              className="bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-200 hover:shadow-cyan-300 transform hover:-translate-y-0.5"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2 py-6 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
                    activePage === link.id ? 'bg-cyan-50 text-cyan-600' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-cyan-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg shadow-cyan-100"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
