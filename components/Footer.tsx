
import React from 'react';
import { CLINIC_INFO, SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { Stethoscope } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const handleNavClick = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 mb-6">
              <div className="bg-cyan-600 p-2 rounded-lg">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                You<span className="text-cyan-600">Dent</span>
              </span>
            </button>
            <p className="text-slate-600 leading-relaxed mb-8">
              Redefining dental experiences in Bhayander with modern technology and compassionate care. Your smile is our signature.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['home', 'about', 'services', 'reviews', 'contact'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => handleNavClick(page)}
                    className="text-slate-600 hover:text-cyan-600 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Our Clinic</h4>
            <ul className="space-y-4">
              {CONTACT_DETAILS.map((detail, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="text-cyan-600 mt-1 shrink-0">{detail.icon}</div>
                  <span className="text-slate-600 group-hover:text-cyan-700 transition-colors">{detail.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Locate Us</h4>
            <div className="rounded-2xl overflow-hidden h-[200px] bg-slate-200 relative group border-2 border-white shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.17637840131!2d72.85244195!3d19.29177195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02f90000001%3A0x6d11f0a3e817e01d!2sBhayandar%20East%2C%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} YouDent Dental Clinic. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
