
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Calendar, User, Phone, Mail, Stethoscope, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { saveAppointment, AppointmentData } from '../services/db';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingStep = 'details' | 'success';

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<BookingStep>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
  });

  const validateForm = () => {
    // Basic Name Validation
    if (formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return false;
    }

    // Phone Validation: Must be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    // Email Validation: Standard format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!formData.service) {
      setErrorMessage("Please select a service.");
      return false;
    }

    if (!formData.date) {
      setErrorMessage("Please select a preferred date.");
      return false;
    }

    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // For phone, only allow numbers
    if (name === 'phone') {
      const onlyNums = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrorMessage(null);
    try {
      await saveAppointment(formData);
      setStep('success');
      setTimeout(() => {
        onClose();
        resetForm();
      }, 5000);
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to book appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep('details');
    setFormData({ name: '', phone: '', email: '', service: '', date: '' });
    setErrorMessage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="overflow-y-auto p-8 md:p-12 scrollbar-hide">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-all z-20"
              >
                <X size={20} />
              </button>

              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-red-600 text-sm"
                >
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {step === 'details' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl mb-4">
                      <Calendar size={32} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2 leading-tight">Book Appointment</h3>
                    <p className="text-slate-500">Fast and easy booking in less than a minute.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <User size={18} />
                      </div>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone size={18} />
                        </div>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          placeholder="10-Digit Mobile"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-medium"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail size={18} />
                        </div>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Stethoscope size={18} />
                      </div>
                      <select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-medium appearance-none"
                      >
                        <option value="" disabled>Select Service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      </select>
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Calendar size={18} />
                      </div>
                      <input 
                        required
                        name="date"
                        type="date" 
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-medium"
                      />
                    </div>

                    <button 
                      disabled={isLoading}
                      type="submit"
                      className="w-full bg-cyan-600 text-white px-8 py-5 rounded-2xl font-extrabold text-lg hover:bg-cyan-700 transition-all flex items-center justify-center space-x-2 shadow-xl disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Confirm Booking</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Success!</h3>
                  <p className="text-slate-600 max-w-sm mx-auto text-lg leading-relaxed">
                    Thank you, {formData.name.split(' ')[0]}! Your appointment request has been received. We'll call you shortly to confirm your slot.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
