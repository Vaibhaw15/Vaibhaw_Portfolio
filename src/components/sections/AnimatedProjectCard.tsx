
"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedProjectCardProps {
  project: Project;
  index: number; // For potential staggered animation delay
}

export default function AnimatedProjectCard({ project, index }: AnimatedProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={cn(
        'flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full scroll-animated-item',
        isVisible ? 'slide-from-left-active' : 'slide-from-left-initial'
      )}
      style={{ transitionDelay: `${index * 100}ms` }} // Optional: staggered delay
    >
      <Link href={`/projects/${project.id}`} className="flex flex-col group flex-grow">
        <div className="relative w-full h-60 md:h-72 flex overflow-hidden">
          <div className="relative w-1/3 h-full bg-muted/30">
            <Image
              src={(project.images && project.images.length > 0) ? project.images[0] : 'https://placehold.co/200x400.png'}
              alt={`${project.title} - Preview 1`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 11vw, 11vw" // Adjusted for 3 images
              data-ai-hint={project.imageHint ? project.imageHint.split(" ")[0] + " preview" : "app preview"}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative w-1/3 h-full bg-muted/30">
            <Image
              src={(project.images && project.images.length > 1) ? project.images[1] : 'https://placehold.co/200x400.png'}
              alt={`${project.title} - Preview 2`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 11vw, 11vw" // Adjusted
              data-ai-hint={project.imageHint ? project.imageHint.split(" ")[0] + " detail" : "app detail"}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative w-1/3 h-full bg-muted/30">
            <Image
              src={(project.images && project.images.length > 2) ? project.images[2] : 'https://placehold.co/200x400.png'}
              alt={`${project.title} - Preview 3`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 11vw, 11vw" // Adjusted
              data-ai-hint={project.imageHint ? project.imageHint.split(" ")[0] + " feature" : "app feature"}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-primary group-hover:underline">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 7).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="mt-auto pt-4 border-t flex flex-col items-start gap-3">
         <Link href={`/projects/${project.id}`} className="text-sm text-primary font-medium hover:underline">
           View Details →
         </Link>
         <div className="flex flex-wrap gap-2 w-full">
            {project.androidLiveUrl && project.androidLiveUrl !== '#' && (
                <Button size="sm" asChild className="flex-grow sm:flex-grow-0 transition-transform hover:scale-105">
                <Link href={project.androidLiveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" /> Android Demo
                </Link>
                </Button>
            )}
            {project.iosLiveUrl && project.iosLiveUrl !== '#' && (
                <Button size="sm" variant="outline" asChild className="flex-grow sm:flex-grow-0 transition-transform hover:scale-105">
                <Link href={project.iosLiveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" /> iOS Demo
                </Link>
                </Button>
            )}
         </div>
      </CardFooter>
    </Card>
  );
}

