
import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Zap, 
  Smile, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

export const CLINIC_INFO = {
  name: "YouDent",
  location: "Bhayander, Maharashtra",
  phone: "+91 98765 43210",
  email: "care@youdentclinic.com",
  whatsapp: "919876543210",
  workingHours: "Mon - Sat: 10:00 AM - 8:00 PM"
};

export const SERVICES = [
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile instantly with long-lasting results.",
    icon: <Sparkles className="w-8 h-8 text-cyan-600" />
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacements using world-class implant technology.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
  },
  {
    id: "braces",
    title: "Braces & Invisalign",
    description: "Straighten your teeth with traditional braces or clear aligners for a perfect alignment.",
    icon: <Zap className="w-8 h-8 text-cyan-600" />
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Expert endodontic care to save your natural teeth with minimal discomfort.",
    icon: <Stethoscope className="w-8 h-8 text-cyan-600" />
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and full smile makeovers designed to boost your confidence.",
    icon: <Smile className="w-8 h-8 text-cyan-600" />
  },
  {
    id: "general",
    title: "General Checkup",
    description: "Regular cleanings and examinations to maintain optimal oral health for your family.",
    icon: <Calendar className="w-8 h-8 text-cyan-600" />
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Dentists",
    description: "Our team consists of highly qualified specialists with years of clinical expertise.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "Advanced Equipment",
    description: "We use the latest digital imaging and laser technology for precise treatments.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Pain-Free Procedures",
    description: "Gentle care and modern sedation techniques ensure a comfortable experience.",
    icon: <Smile className="w-6 h-6" />
  },
  {
    title: "Flexible Appointments",
    description: "Easy scheduling and emergency services to fit your busy lifestyle.",
    icon: <Clock className="w-6 h-6" />
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Arjun Sharma",
    role: "Local Resident",
    content: "The best dental experience I've had. The doctors at YouDent are incredibly patient and professional. My implant procedure was painless.",
    image: "https://picsum.photos/id/64/100/100",
    rating: 5
  },
  {
    id: "2",
    name: "Priya Mehta",
    role: "Teacher",
    content: "I opted for Invisalign here and the results are amazing. The clinic is super clean and the staff is very welcoming. Highly recommended!",
    image: "https://picsum.photos/id/65/100/100",
    rating: 5
  },
  {
    id: "3",
    name: "Rohan Das",
    role: "Software Engineer",
    content: "Affordable and premium care. They explained the entire root canal process clearly and I felt no pain at all during the treatment.",
    image: "https://picsum.photos/id/66/100/100",
    rating: 5
  }
];

export const SOCIAL_LINKS = [
  { icon: <Facebook className="w-5 h-5" />, href: "#" },
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
  { icon: <Instagram className="w-5 h-5" />, href: "#" }
];

export const CONTACT_DETAILS = [
  { icon: <MapPin className="w-5 h-5" />, text: CLINIC_INFO.location },
  { icon: <Phone className="w-5 h-5" />, text: CLINIC_INFO.phone },
  { icon: <Mail className="w-5 h-5" />, text: CLINIC_INFO.email },
  { icon: <Clock className="w-5 h-5" />, text: CLINIC_INFO.workingHours }
];
