
"use client";

import type { WorkExperienceItem, EducationItem } from '@/lib/types';
import { Briefcase, GraduationCap, Layers, Target, Flame } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedWorkExperienceCard from './AnimatedWorkExperienceCard';
import AnimatedEducationCard from './AnimatedEducationCard';

const workExperienceData: WorkExperienceItem[] = [
  {
    id: '1',
    title: 'Flutter Developer',
    company: '1Channel (Channelplay Saas Private Limited)',
    dateRange: 'May 2022 - Present',
"descriptionPoints": [
  "Contributed to the development and maintenance of a CRM And Loyality based Flutter application with 50,000+ users.",
  "Built scalable and maintainable mobile applications using Flutter, Dart, and Firebase.",
  "Optimized app performance, reducing load time by up to 40% through effective use of caching and efficient state management.",
  "Developed cross-platform Android and iOS applications with a focus on clean UI, responsiveness, and smooth UX.",
  "Integrated REST APIs, Firebase services, payment gateways, and social login features for seamless user experience.",
  "Set up CI/CD workflows using GitHub Actions, streamlining build and deployment processes.",
  "Worked with Google Maps API, push notifications, deep linking, and ensured compatibility across devices.",
  "Actively participated in Agile sprints, collaborating with cross-functional teams to meet project deadlines.",
  "Engaged in code reviews, followed best practices, and contributed to technical documentation.",
  "Integrated Spring Boot backend with Flutter frontend for real-time and secure data communication."
],
    skills: ['Flutter', 'Dart', 'Java', 'Kotlin', 'Swift', 'Firebase', 'Rest APIs', 'Material Theme', 'MVP', 'Bloc/Cubit', 'GetX', 'Riverpod', 'Provider', 'WebRTC', 'Social Auth', 'Video/Audio Call', 'Push Notifications', 'Payment Gateway'],
  },
];

const educationData: EducationItem[] = [
  {
    id: '1',
    degree: 'Bachelor of Electronics And Communication (ECE)',
    institution: 'Heritage Institute of Technology, Kolkata',
    year: '2022',
    description: 'Graduated with strong academic performance, focusing on programming, digital electronics, embedded systems, database management, and software development. Gained practical experience in building scalable applications and solving technical problems using industry-standard tools.',
  },
  {
    "id": "2",
    "degree": "Diploma in Electronics and Communication Engineering (ECE)",
    "institution": "Al-Kabir Polytechnic",
    "year": "2019",
    "description": "Completed a comprehensive 3-year diploma program with a focus on electronics, communication systems, and basic computer programming. Gained strong foundational knowledge in circuit design, digital electronics, and communication principles, preparing for further studies in engineering and technology."
  },
  {
    id: '3',
    degree: 'Secondary School Certificate (SSC)',
    institution: "Saraswati Shishu Vidya Mandir",
    year: '2016',
    description: 'Completed 10th grade with distinction, excelling in subjects that built a strong academic foundation. Developed problem-solving skills and adaptability, paving the way for future studies in computer science.',
  },
];

export default function ExperienceEducationSection() {
  const [isTitleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
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
    <section id="experience" className="bg-secondary relative overflow-hidden">
      <Layers
        className="absolute top-20 -left-20 h-64 w-64 text-primary/10 opacity-50 transform rotate-12 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Flame
        className="absolute bottom-10 -right-10 h-72 w-72 text-accent/10 opacity-50 transform -rotate-[20deg] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={cn(
              'text-3xl md:text-4xl font-bold text-primary scroll-animated-item',
              isTitleVisible ? 'slide-from-left-active' : 'slide-from-left-initial'
            )}
          >
            Experience & Education
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career.
          </p>
          <div className="mt-4 h-1 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center justify-center lg:justify-start">
              <Briefcase className="mr-3 h-7 w-7" />
              Work Experience
            </h3>
            <div className="relative space-y-10 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border before:hidden sm:before:block">
              {workExperienceData.map((exp, index) => (
                <AnimatedWorkExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center justify-center lg:justify-start">
              <GraduationCap className="mr-3 h-7 w-7" />
              Education
            </h3>
            <div className="relative space-y-10 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border before:hidden sm:before:block">
              {educationData.map((edu, index) => (
                <AnimatedEducationCard key={edu.id} education={edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
