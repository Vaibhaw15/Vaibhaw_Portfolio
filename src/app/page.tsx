
import IntroSection from '@/components/sections/intro-section';
import QuoteSection from '@/components/sections/quote-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceEducationSection from '@/components/sections/experience-education-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactInformationSection from '@/components/sections/contact-information-section';
import ContactSection from '@/components/sections/contact-section';


export default function HomePage() {
  return (
    <>
      <IntroSection />
      <QuoteSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <TestimonialsSection />

      {/* Combined Contact Row */}
      <section className="bg-background"> {/* Ensure alternating background and default section padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <ContactInformationSection />
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  );
}
