
"use client";

import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonialsData: Testimonial[] = [
  {
    "id": "1",
    "quote": "Vaibhaw's expertise in Flutter is exceptional. He delivered a robust, high-quality application that went beyond our expectations. His dedication, attention to detail, and problem-solving skills truly stand out.",
    "authorName": "Sudipta Samanta",
    "authorTitle": "Technical Lead, 1Channel",
    "authorImageUrl": "https://placehold.co/100x100.png",
    "authorImageHint": "Professional male portrait"
  },
  {
    "id": "2",
    "quote": "Vaibhaw was a pleasure to collaborate with. His ability to translate backend logic into intuitive Flutter interfaces made the development process seamless. His proactive approach and technical know-how ensured smooth integration and timely delivery.",
    "authorName": "Ankit Kumar",
    "authorTitle": "Backend Developer",
    "authorImageUrl": "https://placehold.co/100x100.png",
    "authorImageHint": "Man smiling, professional portrait"
  }, 
  {
    "id": "3",
    "quote": "Working with Vaibhaw was smooth and productive. As a backend developer, I valued how easily he integrated the frontend with our APIs. He’s not only a skilled Flutter developer but also an excellent communicator who brought valuable ideas to the table throughout the project.",
    "authorName": "Ashish Kumar",
    "authorTitle": "Backend Developer",
    "authorImageUrl": "https://placehold.co/100x100.png",
    "authorImageHint": "Professional tech person"
  },
  {
    "id": "4",
    "quote": "Collaborating with Vaibhaw was a great experience. His clean architecture, attention to UI detail, and solid understanding of Flutter best practices stood out. As a fellow Flutter developer, I appreciated his ability to balance performance, maintainability, and user experience seamlessly.",
    "authorName": "Anagh Bhattacharjee",
    "authorTitle": "Senior Flutter Developer",
    "authorImageUrl": "https://placehold.co/100x100.png",
    "authorImageHint": "Flutter tech person"
  }   
];

export default function TestimonialsSection() {
  // Duplicate testimonials for a seamless marquee effect
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Words From Colleagues
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee hover:animate-marquee-paused whitespace-nowrap">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-none w-full max-w-sm sm:max-w-md md:w-[calc(100%/2.5)] lg:w-[calc(100%/3.3)] xl:w-[calc(100%/3.5)] mx-3" // Responsive width with fixed aspect, mx for spacing
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                    <blockquote className="italic text-foreground leading-relaxed whitespace-normal">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
