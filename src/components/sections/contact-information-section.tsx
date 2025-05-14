
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vaibhaw.soni@example.com',
    href: 'mailto:vaibhaw.soni@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Your Country',
    href: '#', // No direct link for location usually, or could be a map link
  },
];

const socialLinks = [
  {
    href: 'https://github.com/sagaranghan', // Assuming this is Vaibhaw's GitHub, update if different
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/sagaranghan', // Assuming this is Vaibhaw's LinkedIn, update if different
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export default function ContactInformationSection() {
  return (
    <Card id="contact-info" className="w-full shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-primary">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6 pt-4"> {/* Adjusted pt-4 since header provides some top padding */}
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
