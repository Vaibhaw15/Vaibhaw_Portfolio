
"use client";

import { useRef } from 'react'; 
import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Layers, Target, Flame } from 'lucide-react';

const testimonialsData: Testimonial[] = [
  {
    "id": "1",
    "quote": "Vaibhaw's expertise in Flutter is exceptional. He delivered a robust, high-quality application that went beyond our expectations. His dedication, attention to detail, and problem-solving skills truly stand out.",
    "authorName": "Sudipta Samanta",
    "authorTitle": "Technical Lead, 1Channel",
    "authorImageUrl": "https://media.licdn.com/dms/image/v2/C5603AQH5Z_ksaiOB4g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1594881554401?e=1752710400&v=beta&t=ceD7zHMIBuRQy3gfwirOzE3e3WYq2e9r0N4CcmaiTVc",
    "authorImageHint": "Professional male portrait"
  },
  {
    "id": "2",
    "quote": "Vaibhaw was a pleasure to collaborate with. His ability to translate backend logic into intuitive Flutter interfaces made the development process seamless. His proactive approach and technical know-how ensured smooth integration and timely delivery.",
    "authorName": "Ankit Kumar",
    "authorTitle": "Backend Developer",
    "authorImageUrl":"https://media.licdn.com/dms/image/v2/D5603AQGvxW3Vd5eXmw/profile-displayphoto-shrink_800_800/B56ZOmnhc9GoAg-/0/1733667199592?e=1752710400&v=beta&t=eLzEd1svGtwjDrrfPiQn2qKEvPb3Nx_LbupJUocWudg",
    "authorImageHint": "Man smiling, professional portrait"
  },
  {
    "id": "4",
    "quote": "Collaborating with Vaibhaw was a great experience. His clean architecture, attention to UI detail, and solid understanding of Flutter best practices stood out. As a fellow Flutter developer, I appreciated his ability to balance performance, maintainability, and user experience seamlessly.",
    "authorName": "Anagh Bhattacharjee",
    "authorTitle": "Senior Flutter Developer",
    "authorImageUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHNoxyXLQB97g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667125968230?e=1752710400&v=beta&t=XfJPuap9_2hjiRO7KLxAynxurIV7mC6pmo8GQrsetUs",
    "authorImageHint": "Flutter tech person"
  },
  {
    "id": "3",
    "quote": "Working with Vaibhaw was smooth and productive. As a backend developer, I valued how easily he integrated the frontend with our APIs. He is not only a skilled Flutter developer but also an excellent communicator who brought valuable ideas to the table throughout the project.",
    "authorName": "Ashish Kumar Rajak",
    "authorTitle": "Java Full Stack Developer",
    "authorImageUrl": "https://media.licdn.com/dms/image/v2/D5603AQFxHa3mkGbdoA/profile-displayphoto-shrink_800_800/B56ZbAgDMLGoAc-/0/1746986349854?e=1752710400&v=beta&t=1VUduthIAAn1mmSbd1D8ytpeq4PYWOLql0BYHO9y3iY",
    "authorImageHint": "Professional tech person"
  }
];

export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];
  const marqueeRef = useRef<HTMLDivElement>(null); 

  const handleMouseEnterCard = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeaveCard = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section id="testimonials" className="bg-background py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <Layers
        className="absolute top-1/4 left-1/4 h-48 w-48 text-primary/10 opacity-50 transform -translate-x-1/2 -translate-y-1/2 rotate-12 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Target
        className="hidden sm:block absolute bottom-1/3 right-1/4 h-40 w-40 text-accent/10 opacity-50 transform translate-x-1/2 translate-y-1/2 -rotate-[25deg] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Words From Colleagues
          </h2>
          <div className="mt-3 h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div ref={marqueeRef} className="flex animate-marquee whitespace-nowrap"> 
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-none w-full max-w-sm sm:max-w-md md:w-[calc(100%/2.5)] lg:w-[calc(100%/3.3)] xl:w-[calc(100%/3.5)] mx-3"
                onMouseEnter={handleMouseEnterCard} 
                onMouseLeave={handleMouseLeaveCard} 
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
