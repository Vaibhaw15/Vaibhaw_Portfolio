export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  projectUrl: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl?: string;
  authorImageHint?: string;
}
