export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  badge?: {
    text: string;
    variant: 'winner' | 'internship';
  };
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface TimelineYear {
  year: string;
  label: string;
  skills: string[];
  isCurrent?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  highlight?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
