
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
    description: 'A comprehensive CRM and Loyalty application for managing customer interactions, sales pipelines, and reward programs. Built with a focus on scalability and real-time data synchronization.',
    imageUrl: 'https://play-lh.googleusercontent.com/3ToisVJsNVlEvmPEACTvmZvVswOf5AChrOc-TuKHiy6sYJWh-V9RLx5FYENNKKma5V4=w1052-h592-rw', // Card preview image
    images: [ // Gallery images for detail page
      'https://play-lh.googleusercontent.com/ArCPkw-6nSITNrB5qj61KDF48xyuBv7LkX5gjYt6cDGCMjz7Xsy2Htks2xJSfAXspxA=w1052-h592-rw', // Main display for detail
      'https://play-lh.googleusercontent.com/9QVgRB-DYLB-5emBnt22ZKvkA358Y_18OkH4sWXA-YJ7qgQPEt-o0LL9afcmcGI2VGY=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/3ToisVJsNVlEvmPEACTvmZvVswOf5AChrOc-TuKHiy6sYJWh-V9RLx5FYENNKKma5V4=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/cyF5QFy9IHUFhK9_0pUZBr-f6iRkMQe_rW5fXokZbVtLUU0L12ztQe8y5_FGR0ML-2qb=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/ommeYuHEQY-IpbR9j6q8YwOlmTIiEV7293A4Erd_NOXIcFJOo-seMMu3FEHNQDQLpmw=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/qMTcy6htZ8_lNvQzBLW9G3FsTBCpF8SyLs4t3UgXhe3SZQBW1Wmb_PTjNpoJkSCd9P4=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/fy5F_FtvCPJ9c54uTPmivOuZq1SfZA2ztKnAqYOTE-uHbOrGBvDijyV1KfuI-cJjjg=w1052-h592-rw',
    ],
    imageHint: 'mobile app portfolio',
    technologies: ['Flutter', 'Dart', 'Firebase', 'AWS', 'Razor Pay'],
    projectUrl: '#', // General project link (e.g. GitHub repo if public)
    androidLiveUrl: 'https://play.google.com/store/apps/details?id=com.onechannelcrm.assistive&hl=en_IN', // Example
    iosLiveUrl: 'https://sagaranghan.com/', 
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
      'https://placehold.co/400x300.png', // Added third image
    ],
    imageHint: 'grocery app interface',
    technologies: ['Flutter', 'Firebase', 'Stripe SDK'],
    projectUrl: '#',
    androidLiveUrl: 'https://sagaranghan.com/',
    iosLiveUrl: 'https://sagaranghan.com/',
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
      'https://placehold.co/400x300.png', // Added third image
    ],
    imageHint: 'task list productivity',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    projectUrl: '#',
    androidLiveUrl: 'https://sagaranghan.com/',
    iosLiveUrl: 'https://sagaranghan.com/',
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
      'https://placehold.co/400x300.png', // Placeholder second image
      'https://placehold.co/400x300.png', // Placeholder third image
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
                <div className="relative w-full h-60 md:h-72 flex overflow-hidden">
                  {/* Section 1 - Image 1 */}
                  <div className="relative w-1/3 h-full bg-muted/30">
                    <Image
                      src={(project.images && project.images.length > 0) ? project.images[0] : 'https://placehold.co/200x400.png'}
                      alt={`${project.title} - Preview 1`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
                      data-ai-hint={project.imageHint || "app screenshot"}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Section 2 - Image 2 */}
                  <div className="relative w-1/3 h-full bg-muted/30">
                    <Image
                      src={(project.images && project.images.length > 1) ? project.images[1] : 'https://placehold.co/200x400.png'}
                      alt={`${project.title} - Preview 2`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
                      data-ai-hint={project.imageHint ? project.imageHint.split(" ")[0] + " detail" : "app detail"}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Section 3 - Image 3 */}
                  <div className="relative w-1/3 h-full bg-muted/30">
                    <Image
                      src={(project.images && project.images.length > 2) ? project.images[2] : 'https://placehold.co/200x400.png'}
                      alt={`${project.title} - Preview 3`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
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
                    {project.technologies.slice(0, 5).map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

