
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vaibhawsoni900@gmail.com',
    href: 'mailto:vaibhawsoni900@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 84346 00175',
    href: 'tel:+918434600175',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, India',
    href: '#',
  },
];

const socialLinks = [
  {
    href: 'https://github.com/Vaibhaw15',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/vaibhawsoni15/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export default function ContactInformationSection() {
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
      id="contact-info"
      ref={cardRef}
      className={cn(
        'w-full shadow-lg rounded-lg scroll-animated-item',
        isVisible ? 'slide-from-left-active' : 'slide-from-left-initial'
      )}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl text-primary">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6 pt-4">
        <ul className="space-y-4">
          {contactDetails.map((item) => (
            <li key={item.label} className="flex items-start">
              <item.icon className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                {item.href !== '#' ? (
                   <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-border/40 pt-6">
          <p className="text-center text-lg font-semibold text-primary mb-4">
            Connect with me on
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="mr-2 h-5 w-5" />
                  {social.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
