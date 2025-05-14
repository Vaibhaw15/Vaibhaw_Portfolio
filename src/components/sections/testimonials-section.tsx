
import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "Sagar's expertise in Flutter is truly impressive. He delivered a high-quality application that exceeded our expectations. A dedicated and skilled developer!",
    authorName: 'Aarav Sharma',
    authorTitle: 'Project Manager, Tech Solutions Ltd.',
    authorImageUrl: 'https://placehold.co/100x100.png',
    authorImageHint: 'man professional',
  },
  {
    id: '2',
    quote: "Working with Sagar was a fantastic experience. His attention to detail and commitment to deadlines made our project a success. Highly recommended for any Flutter development.",
    authorName: 'Priya Singh',
    authorTitle: 'Founder, Creative Startup Co.',
    authorImageUrl: 'https://placehold.co/100x100.png',
    authorImageHint: 'woman smiling',
  },
  {
    id: '3',
    quote: "Sagar is not only a talented developer but also a great communicator. He understood our requirements perfectly and provided valuable insights throughout the development process.",
    authorName: 'Rohan Mehta',
    authorTitle: 'Lead Engineer, Innovatech',
    authorImageUrl: 'https://placehold.co/100x100.png',
    authorImageHint: 'person tech',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Words From Colleagues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    {testimonial.authorImageUrl && (
                       <AvatarImage src={testimonial.authorImageUrl} alt={testimonial.authorName} data-ai-hint={testimonial.authorImageHint} />
                    )}
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.authorName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{testimonial.authorName}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.authorTitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="italic text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
