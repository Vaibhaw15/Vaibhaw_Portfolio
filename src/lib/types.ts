
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Main image for card, can be first in detail gallery
  images?: string[]; // Array of image URLs for the detail page gallery
  imageHint: string;
  technologies: string[];
  projectUrl: string; // Kept for data integrity, might be used for a general "source" link if needed
  androidLiveUrl?: string;
  iosLiveUrl?: string;
  duration?: string; // e.g., "4 Months"
  role?: string; // e.g., "Developer"
  keyFeatures?: string[]; // Array of key features as strings
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl?: string;
  authorImageHint?: string;
}

export interface WorkExperienceItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  descriptionPoints: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}
