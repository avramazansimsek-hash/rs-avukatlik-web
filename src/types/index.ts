export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
}

export interface Petition {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
