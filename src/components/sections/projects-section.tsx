
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const projectsData: Project[] = [
  {
    id: '1',
    title: '1Channel CRM',
    description: 'This app helps businesses store and manage customer information in one place. It allows users to track leads, monitor sales, and improve customer interactions.\n\nThe app includes important features such as user management, where businesses can add team members and assign roles. It also has lead tracking, which helps businesses follow up with potential customers. Custom dashboards show sales performance in an easy-to-understand way, helping businesses make better decisions.\n\nAnother key feature is real-time notifications, which keep users updated on important activities like new leads, sales updates, or customer interactions. The goal of this app is to provide a simple and effective way for businesses to manage their customers and grow their sales.',
    imageUrl: 'https://placehold.co/600x400.png', // Card preview image
    images: [ // Gallery images for detail page
      'https://placehold.co/800x600.png', // Main display for detail
      'https://placehold.co/400x300.png',
      'https://placehold.co/400x300.png',
      'https://placehold.co/400x300.png',
    ],
    imageHint: 'mobile app portfolio',
    technologies: ['Flutter', 'Dart', 'Firebase', 'AWS', 'Razor Pay'],
    projectUrl: '#', // General project link (e.g. GitHub repo if public)
    androidLiveUrl: 'https://sagaranghan.com/', // Example
    iosLiveUrl: '#',
    duration: '12 Months',
    role: 'Lead Developer',
    keyFeatures: [
      'User Management & Role Assignment',
      'Lead Tracking & Sales Monitoring',
      'Customizable Dashboards & Reporting',
      'Real-time Notifications',
      'AWS Secure User Authentication',
      'Razor Pay Integration for Payments',
      'Loyalty & Reward Points System',
      'Product Catalog Management',
      'Shopping Cart & Checkout Process',
    ],
  },
  {
    id: '2',
    title: 'E-commerce Groceries App',
    description: 'A comprehensive e-commerce application for ordering groceries online, featuring user authentication, product catalog, cart, and checkout.',
    imageUrl: 'https://placehold.co/600x400.png',
    images: [
      'https://placehold.co/800x600.png',
      'https://placehold.co/400x300.png',
    ],
    imageHint: 'grocery app interface',
    technologies: ['Flutter', 'Firebase', 'Stripe SDK'],
    projectUrl: '#',
    androidLiveUrl: '#',
    iosLiveUrl: '#',
    duration: '6 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'User Authentication (Email/Social)',
      'Product Catalog Browsing & Search',
      'Shopping Cart Management',
      'Secure Checkout with Stripe',
      'Order History & Tracking',
      'Push Notifications for Order Status',
    ],
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A sleek and intuitive task management application to help users organize their daily tasks, set reminders, and track progress.',
    imageUrl: 'https://placehold.co/600x400.png',
    images: [
      'https://placehold.co/800x600.png',
      'https://placehold.co/400x300.png',
      'https://placehold.co/400x300.png',
    ],
    imageHint: 'task list productivity',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    projectUrl: '#',
    androidLiveUrl: '#',
    iosLiveUrl: '#',
    duration: '3 Months',
    role: 'Solo Developer',
    keyFeatures: [
      'Create, Edit, Delete Tasks',
      'Set Due Dates & Reminders',
      'Task Prioritization',
      'Categorization/Tagging',
      'Progress Tracking',
      'Local Data Storage with SQLite',
    ],
  },
  {
    id: '4',
    title: 'Chat Application',
    description: 'A real-time chat application enabling users to connect and communicate seamlessly. Features include one-on-one messaging and group chats.',
    imageUrl: 'https://placehold.co/600x400.png',
    images: [
      'https://placehold.co/800x600.png',
    ],
    imageHint: 'chat interface messages',
    technologies: ['Flutter', 'Firebase Firestore', 'Firebase Auth'],
    projectUrl: '#',
    androidLiveUrl: '#',
    iosLiveUrl: '#',
    duration: '4 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'Real-time One-on-One Messaging',
      'Group Chat Functionality',
      'Firebase Authentication',
      'Firebase Firestore for Message Storage',
      'User Presence Indication',
      'Push Notifications for New Messages',
    ],
  },
];

export default function ProjectsSection() {
  const displayedProjects = projectsData.slice(0, 3); // Show only first 3 projects

  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <Link href={`/projects/${project.id}`} className="flex flex-col group flex-grow">
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={project.imageHint}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary group-hover:underline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && <Badge variant="outline">...</Badge>}
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
          ))}
        </div>
      </div>
    </section>
  );
}
