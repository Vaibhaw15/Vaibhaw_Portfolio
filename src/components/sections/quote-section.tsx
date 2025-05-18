
import { Card, CardContent } from '@/components/ui/card';
import { Quote as QuoteIcon, Layers, Target } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section id="personal-philosophy" className="py-6 md:py-8 lg:py-10 bg-secondary relative overflow-hidden">
       <Layers
        className="absolute top-1/4 left-10 h-24 w-24 text-primary/10 opacity-50 transform -rotate-[15deg] pointer-events-none z-0"
        aria-hidden="true"
      />
      <Target
        className="absolute bottom-1/4 right-10 h-20 w-20 text-accent/10 opacity-50 transform rotate-[30deg] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="max-w-5xl mx-auto shadow-lg rounded-lg">
          <CardContent className="p-6 md:p-8 relative">
            <QuoteIcon
              className="absolute top-4 left-4 md:top-6 md:left-6 h-12 w-12 md:h-16 md:w-16 text-primary opacity-30"
              aria-hidden="true"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-primary z-10 relative">
              Lessons & Growth
            </h2>
            <blockquote className="text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-relaxed z-10 relative px-8 md:px-12">
                "Throughout my 3-year coding journey, I've tackled imposter syndrome, real-world challenges, and evolving technologies. Embracing small wins and continuous learning has sharpened my skills, boosted my confidence, and fueled my passion for building impactful solutions. I believe in action over words!"
              </p>
            </blockquote>
            <QuoteIcon
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 h-12 w-12 md:h-16 md:w-16 text-primary opacity-30 transform rotate-180"
              aria-hidden="true"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
