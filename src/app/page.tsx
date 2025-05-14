
import IntroSection from '@/components/sections/intro-section';
import ProjectsSection from '@/components/sections/projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactInformationSection from '@/components/sections/contact-information-section';
import ContactSection from '@/components/sections/contact-section';


export default function HomePage() {
  return (
    <>
      <IntroSection />
      <ProjectsSection />
      <TestimonialsSection />

      {/* Combined Contact Row */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ContactInformationSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}

