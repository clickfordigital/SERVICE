export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  consultationType: 'video' | 'phone' | 'report';
  dateOfBirth?: string;
  timeOfBirth?: string;
  placeOfBirth?: string;
  gender?: string;
  message: string;
  preferredDate?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  companyOrDomain: string;
  category: 'job-switch' | 'promotion' | 'business' | 'foreign' | 'govt';
  rating: number;
  date: string;
  story: string;
  outcome: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyAspects: string[];
  idealFor: string;
  planetaryKey: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  included: string[];
  icon: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'timing' | 'houses' | 'remedies';
  schemaAnswerHtml: string;
}

export interface InternalLinkItem {
  title: string;
  href: string;
  category: 'service' | 'blog' | 'guide';
  badge?: string;
  description?: string;
}

export interface CareerHouseInfo {
  houseNumber: number;
  houseName: string;
  sanskritName: string;
  careerSignificance: string;
  planetaryRulers: string;
  sampleOutcomes: string[];
}

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  hindiHeadline?: string;
  description: string;
  category: 'job-timing' | 'promotion' | 'business' | 'govt-job' | 'remedies';
  views: string;
  duration: string;
  highlight: string;
  topics: string[];
  thumbnailUrl: string;
  badgeColor?: string;
}

