
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  projectUrl: string; // Kept for data integrity, but no button for it now
  androidLiveUrl?: string;
  iosLiveUrl?: string;
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
