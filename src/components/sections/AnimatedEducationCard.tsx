
"use client";

import { useEffect, useRef, useState } from 'react';
import type { EducationItem } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AnimatedEducationCardProps {
  education: EducationItem;
  index: number;
}

export default function AnimatedEducationCard({ education, index }: AnimatedEducationCardProps) {
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
          } else {
            setIsVisible(false); // Reset when out of view
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
    <div
      ref={cardRef}
      className={cn(
        'relative scroll-animated-item',
        isVisible ? 'slide-from-left-active' : 'slide-from-left-initial'
      )}
      style={{ transitionDelay: `${index * 100}ms` }} // Optional: staggered delay
    >
      <div className="absolute -left-[calc(0.75rem+2px)] top-1.5 w-3.5 h-3.5 bg-primary rounded-full border-4 border-secondary hidden sm:block"></div>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <CardTitle className="text-xl text-foreground">{education.degree}</CardTitle>
            <Badge variant="secondary" className="text-xs whitespace-nowrap">{education.year}</Badge>
          </div>
          <p className="text-md text-accent">{education.institution}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{education.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
