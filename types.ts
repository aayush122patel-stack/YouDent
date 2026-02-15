
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
}
