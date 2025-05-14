
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/Vaibhaw15", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/vaibhawsoni15/", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Vaibhaw Soni. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((social) => (
            <Button key={social.label} variant="ghost" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
