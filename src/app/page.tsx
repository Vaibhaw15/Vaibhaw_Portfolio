
import IntroSection from '@/components/sections/intro-section';
import QuoteSection from '@/components/sections/quote-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceEducationSection from '@/components/sections/experience-education-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactInformationSection from '@/components/sections/contact-information-section';
import ContactSection from '@/components/sections/contact-section';
import { Layers, Target, Flame } from 'lucide-react';


export default function HomePage() {
  return (
    <>
      <IntroSection />
      <QuoteSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <TestimonialsSection />

      <section className="bg-background relative overflow-hidden">
        <Flame
            className="absolute top-1/2 right-10 h-56 w-56 text-primary/10 opacity-30 transform -translate-y-1/2 rotate-[10deg] pointer-events-none z-0 hidden lg:block"
            aria-hidden="true"
        />
        <Layers
            className="absolute bottom-0 left-5 h-48 w-48 text-accent/10 opacity-30 transform translate-y-1/4 -rotate-[5deg] pointer-events-none z-0 hidden md:block"
            aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
