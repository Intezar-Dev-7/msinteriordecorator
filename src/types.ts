export interface StudioConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  hours: string;
  whatsappNumber: string; // E.164 format without + for wa.me link
  displayWhatsapp: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export interface FounderInfo {
  name: string;
  role: string;
  contactNumber?: string;
  whatsappNumber?: string;
  image: string;
  bio: string[];
  philosophy: string;
  approach: string;
  signatureQuote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  iconName: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Kitchen & Living' | 'Renovation';
  location: string;
  year: string;
  area: string;
  image: string;
  gallery: string[];
  description: string;
  palette: string[];
  materials: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrLocation: string;
  projectType: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}
