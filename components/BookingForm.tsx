
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import { Send, CheckCircle2, ShieldCheck, Mail, AlertCircle, Phone, User, Calendar } from 'lucide-react';
import { saveAppointment, AppointmentData } from '../services/db';

type BookingStep = 'details' | 'success';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState<BookingStep>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0].id,
    date: '',
  });

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!formData.date) {
      setErrorMessage("Please select a date.");
      return false;
    }

    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setStep('details');
    setFormData({ name: '', phone: '', email: '', service: SERVICES[0].id, date: '' });
    setErrorMessage(null);
  };

  return (
    <section id="booking" className="py-24 bg-gradient-soft relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side: Info */}
          <div className="lg:w-1/2 p-8 md:p-16 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">Book Online</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Experience Better Care</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Schedule your appointment instantly. Fill in the details, and we'll see you at the clinic!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Instant Confirmation</h4>
                    <p className="text-slate-400">Your details are sent directly to our reception.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safe & Secure</h4>
                    <p className="text-slate-400">Your privacy is our utmost priority.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3 text-red-600 text-sm">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          placeholder="10-Digit Mobile"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        >
                          {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                        <input 
                          required
                          name="date"
                          type="date" 
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      disabled={isLoading}
                      type="submit"
                      className="w-full bg-cyan-600 text-white px-8 py-5 rounded-xl font-extrabold text-lg hover:bg-cyan-700 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-cyan-100 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Book Appointment Now</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle2 size={56} />
                  </div>
                  <h4 className="text-4xl font-extrabold text-slate-900 mb-4">Done!</h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10">
                    Thank you, {formData.name.split(' ')[0]}! Your visit is requested for {formData.date}. We will call you at {formData.phone} shortly.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="text-cyan-600 font-bold hover:underline text-lg"
                  >
                    Go back to form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
