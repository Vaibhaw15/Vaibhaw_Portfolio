import IntroSection from '@/components/sections/intro-section';
import ProjectsSection from '@/components/sections/projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
