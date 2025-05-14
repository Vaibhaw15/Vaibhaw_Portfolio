
import { Card, CardContent } from '@/components/ui/card';
import { Quote as QuoteIcon } from 'lucide-react'; // Renamed to avoid conflict if 'Quote' is used as a component name

export default function QuoteSection() {
  return (
    <section id="personal-philosophy" className="py-8 md:py-10 lg:py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto shadow-lg rounded-lg">
          <CardContent className="p-6 md:p-8 relative">
            <QuoteIcon
              className="absolute top-4 left-4 md:top-6 md:left-6 h-12 w-12 md:h-16 md:w-16 text-primary opacity-20"
              aria-hidden="true"
            />
            <blockquote className="text-center">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-relaxed z-10 relative px-8 md:px-12">
                "Throughout my 3-year coding journey, I've tackled imposter syndrome, real-world challenges, and evolving technologies. Embracing small wins and continuous learning has sharpened my skills, boosted my confidence, and fueled my passion for building impactful solutions. I believe in action over words!"
              </p>
            </blockquote>
            <QuoteIcon
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 h-12 w-12 md:h-16 md:w-16 text-primary opacity-20 transform rotate-180"
              aria-hidden="true"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
