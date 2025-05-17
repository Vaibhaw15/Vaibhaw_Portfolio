
"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/components/sections/projects-section';
import type { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, CalendarDays, UserCircle2 as UserIcon, Layers, Target, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const projectId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundProject = projectsData.find(p => p.id === projectId);
      
      if (foundProject) {
        // Ensure images array exists and includes imageUrl if empty
        let projectImages = foundProject.images && foundProject.images.length > 0 
                            ? foundProject.images 
                            : [foundProject.imageUrl];
        // Filter out any empty or invalid image URLs
        projectImages = projectImages.filter(img => img && img.trim() !== '');
        if (projectImages.length === 0) projectImages = ['https://placehold.co/800x600.png']; // Default placeholder if no valid images

        setProject({ ...foundProject, images: projectImages });

      } else {
        router.push('/#projects'); // Redirect if project not found
      }
      setIsLoading(false);
    }
  }, [params.id, router]);

  if (isLoading) {
     return (
      <div className="container mx-auto px-4 py-12 text-center min-h-screen flex flex-col justify-center items-center">
        <p className="text-xl text-muted-foreground">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-screen flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-destructive mb-4">Project Not Found</p>
        <p className="text-muted-foreground mb-6">The project you are looking for does not exist or may have been moved.</p>
        <Button asChild variant="outline">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  const projectImages = project.images as string[]; // Assert as string[] after filtering

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section className="py-8 md:py-12 bg-background relative overflow-hidden">
       <Layers
        className="absolute -top-8 -left-12 h-64 w-64 text-primary/10 opacity-50 transform -rotate-12 pointer-events-none z-0 hidden lg:block"
        aria-hidden="true"
      />
      <Target
        className="absolute bottom-1/4 right-5 h-56 w-56 text-accent/10 opacity-50 transform rotate-[25deg] pointer-events-none z-0 hidden md:block"
        aria-hidden="true"
      />
      <Flame
        className="absolute top-1/3 -right-10 h-72 w-72 text-primary/10 opacity-50 transform rotate-[10deg] pointer-events-none z-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Button variant="outline" asChild className="text-sm hover:bg-muted/80">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <Card className="overflow-hidden shadow-lg rounded-lg">
              <CardContent className="p-0 relative aspect-video bg-muted/30">
                <Image
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity duration-300 rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  priority={currentImageIndex === 0} // Prioritize loading the first image
                  data-ai-hint={project.imageHint || "app screenshot"}
                />
                {projectImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10"
                      onClick={handlePrevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {projectImages.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {projectImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`overflow-hidden rounded-md border-2 transition-all aspect-square
                                ${index === currentImageIndex ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-border hover:border-primary/70'}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                        sizes="120px"
                        data-ai-hint="app thumbnail"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.androidLiveUrl && project.androidLiveUrl !== '#' && (
                <Button size="lg" asChild className="w-full sm:w-auto transition-transform hover:scale-105">
                  <Link href={project.androidLiveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Android Live Demo
                  </Link>
                </Button>
              )}
              {project.iosLiveUrl && project.iosLiveUrl !== '#' && (
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto transition-transform hover:scale-105">
                  <Link href={project.iosLiveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> iOS Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">{project.title}</h1>

            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
              {project.duration && (
                <Badge variant="secondary" className="text-base px-4 py-2 rounded-md shadow-sm">
                  <CalendarDays className="mr-2.5 h-5 w-5 text-primary" />
                  {project.duration}
                </Badge>
              )}
              {project.role && (
                <Badge variant="secondary" className="text-base px-4 py-2 rounded-md shadow-sm">
                  <UserIcon className="mr-2.5 h-5 w-5 text-primary" />
                  {project.role}
                </Badge>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify">{project.description}</p>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground border-b pb-2">Key Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1 text-sm rounded-md hover:bg-accent/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
             {project.projectUrl && project.projectUrl !== '#' && (
                <div className="pt-4">
                    <Button variant="link" asChild className="px-0 text-primary hover:underline">
                        <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            View Project Source/More Info <ExternalLink className="ml-1.5 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get project data by ID (can be moved to a utils file)
// export const getProjectById = (id: string): Project | undefined => {
//   return projectsData.find(p => p.id === id);
// };
