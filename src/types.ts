export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  priceRange: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Pagar' | 'Kanopi' | 'Pintu' | 'Tralis' | 'Tangga' | 'Railing' | 'Konstruksi';
  image: string;
  description: string;
  finishedYear: string;
  duration: string;
  material: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
