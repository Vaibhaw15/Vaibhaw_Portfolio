import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Flutter Portfolio App',
    description: 'My personal portfolio website built with Flutter, showcasing my skills and projects. The design you are seeing is inspired by this!',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app portfolio',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    projectUrl: 'https://github.com/sagaranghan/Portfolio',
    liveUrl: 'https://sagaranghan.com/',
  },
  {
    id: '2',
    title: 'E-commerce Groceries App',
    description: 'A comprehensive e-commerce application for ordering groceries online, featuring user authentication, product catalog, cart, and checkout.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'grocery app interface',
    technologies: ['Flutter', 'Firebase', 'Stripe SDK'],
    projectUrl: 'https://github.com/sagaranghan/GrocaryApp',
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A sleek and intuitive task management application to help users organize their daily tasks, set reminders, and track progress.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task list productivity',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    projectUrl: 'https://github.com/sagaranghan/TaskApp',
  },
   {
    id: '4',
    title: 'Chat Application',
    description: 'A real-time chat application enabling users to connect and communicate seamlessly. Features include one-on-one messaging and group chats.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chat interface messages',
    technologies: ['Flutter', 'Firebase Firestore', 'Firebase Auth'],
    projectUrl: 'https://github.com/sagaranghan/ChatApp',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-60 md:h-72">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent text-accent-foreground hover:bg-opacity-80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4">
                <Button variant="outline" asChild className="w-full sm:w-auto transition-transform hover:scale-105">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild className="w-full sm:w-auto transition-transform hover:scale-105">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
