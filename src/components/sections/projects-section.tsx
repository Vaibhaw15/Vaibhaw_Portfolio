
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Layers, Target, Flame } from 'lucide-react';

export const projectsData: Project[] = [
  {
    id: '1',
    title: '1Channel CRM',
    description: 'This app helps businesses store and manage customer information in one place. It allows users to track leads, monitor sales, and improve customer interactions.\n\nThe app includes important features such as user management, where businesses can add team members and assign roles. It also has lead tracking, which helps businesses follow up with potential customers. Custom dashboards show sales performance in an easy-to-understand way, helping businesses make better decisions.\n\nAnother key feature is real-time notifications, which keep users updated on important activities like new leads, sales updates, or customer interactions. The goal of this app is to provide a simple and effective way for businesses to manage their customers and grow their sales.',
    imageUrl: 'https://play-lh.googleusercontent.com/3ToisVJsNVlEvmPEACTvmZvVswOf5AChrOc-TuKHiy6sYJWh-V9RLx5FYENNKKma5V4=w1052-h592-rw', 
    images: [ 
      'https://play-lh.googleusercontent.com/ArCPkw-6nSITNrB5qj61KDF48xyuBv7LkX5gjYt6cDGCMjz7Xsy2Htks2xJSfAXspxA=w1052-h592-rw', 
      'https://play-lh.googleusercontent.com/3ToisVJsNVlEvmPEACTvmZvVswOf5AChrOc-TuKHiy6sYJWh-V9RLx5FYENNKKma5V4=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/cyF5QFy9IHUFhK9_0pUZBr-f6iRkMQe_rW5fXokZbVtLUU0L12ztQe8y5_FGR0ML-2qb=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/ommeYuHEQY-IpbR9j6q8YwOlmTIiEV7293A4Erd_NOXIcFJOo-seMMu3FEHNQDQLpmw=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/qMTcy6htZ8_lNvQzBLW9G3FsTBCpF8SyLs4t3UgXhe3SZQBW1Wmb_PTjNpoJkSCd9P4=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/fy5F_FtvCPJ9c54uTPmivOuZq1SfZA2ztKnAqYOTE-uHbOrGBvDijyV1KfuI-cJjjg=w1052-h592-rw',
    ],
    imageHint: 'mobile app portfolio',
    technologies: ['Flutter', 'Dart', 'Firebase','BLoC','Crashlytics','Push Notification','SQLite'],
    projectUrl: '#', 
    androidLiveUrl: 'https://play.google.com/store/apps/details?id=com.onechannelcrm.assistive&hl=en_IN', 
    iosLiveUrl: 'https://sagaranghan.com/',
    duration: '18 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'User Authentication (Email)',
      'User Management & Role Assignment',
      'Lead Tracking & Sales Monitoring',
      'Customizable Dashboards & Reporting',
      'Real-time Notifications',
      'Secure User Authentication'
    ],
  },
  {
    id: '2',
    title: 'RC Start',
    description: 'The Royal Canin Start application is designed for Royal Canin’s retailers and customers. It serves as a platform to recruit young pet parents and guide them through the early stages of pet parenthood. The app offers tailored nutritional guidance for young pets, helping ensure their healthy growth.\n\nRetailers and customers can use the app to share useful insights, educate new pet owners, and provide personalized pet care recommendations. In return, they earn incentives for successful recruitments. The goal of the app is to strengthen customer engagement while promoting responsible and informed pet parenting with Royal Canin’s expert support.',
    imageUrl: 'https://play-lh.googleusercontent.com/OVDQ_vaEx5FB3JCec0NPKpUucuGEaAxhGms51U1N26xF8O6euKog72m35VRy9kfXVJU=w1052-h592-rw',
    images: [
      'https://play-lh.googleusercontent.com/OVDQ_vaEx5FB3JCec0NPKpUucuGEaAxhGms51U1N26xF8O6euKog72m35VRy9kfXVJU=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/gICXMiSCR-hUMnKI9slNg1EzW4odlu0UtQgUxrVOZQvmGBYrOd4KE09bYgbrDjHjWes=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/KoNDi1YFXuQNlM5OrG3rAIeY6nHEZPIZV-pZ_cXBcIq8xJC9X0y6wGbAp5_ipNPLoWI=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/BDdUWO9wTEf3YxWGA24_ndtPk7e_8jFGvLKlY8sQYe0bkc2pVLLPG-vElH54e8QK7CAn=w1052-h592-rw'
    ],
    imageHint: 'grocery app interface',
    technologies: ['Flutter','Dart','BLoC', 'Firebase', 'Push Notification','SQLite'],
    projectUrl: '#',
    androidLiveUrl: 'https://play.google.com/store/apps/details?id=com.rcstartapp.com',
    iosLiveUrl: 'https://apps.apple.com/is/app/rc-start/id6443498892',
    duration: '6 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'User Authentication (Mobile Number Otp)',
      'Product Catalog Search',
      'Shopping Cart Management',
      'Secure Checkout with Stripe',
      'Order History & Tracking',
      'Push Notifications for Order Status',
      'Help & Support Section with FAQs',
      'Push Notifications',
      'Help & Support Section with FAQs'
    ],
  },
  {
    id: '3',
    title: 'Crompton SAATHI',
    description: 'Crompton SAATHI App is developed for professionals like plumbers, borers, and electricians. The app empowers users to earn and manage reward points for every installation of Crompton pumps. These points can be easily redeemed by transferring them directly to Paytm or GPay accounts.\n\nSaathi simplifies the reward tracking process, helping users stay updated on their earnings, manage their transactions, and benefit from their association with Crompton in a seamless and rewarding way.',
    imageUrl: 'https://play-lh.googleusercontent.com/8IiRG9l6QCmwqQoiUM9wVPdGzATmKaPTMoMoXB3jhIh0XsB9eALFhZVFT-VTmkpAydw=w1052-h592-rw',
    images: [
      'https://play-lh.googleusercontent.com/8IiRG9l6QCmwqQoiUM9wVPdGzATmKaPTMoMoXB3jhIh0XsB9eALFhZVFT-VTmkpAydw=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/dVykGt2Fi0sqUxRIVASIsxe19QV-ElcJVfvbzZkB9_sHob1IRAjp3lB-fCsEesl7_lo=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/FdnQuxmWi9BEA2sSrfW1yH1FpyPSEcK5qx9GIJ3jpX8GTQm2m2fzt8Fh7VTTiAUXMQ=w1052-h592-rw',
    ],
    imageHint: 'task list productivity',
    technologies: ['Flutter', 'Dart','BLoC', 'SQLite','Push Notification'],
    projectUrl: '#',
    androidLiveUrl: 'https://play.google.com/store/apps/details?id=com.crompton.saathi&hl=en_IN',
    iosLiveUrl: 'https://apps.apple.com/in/app/crompton-saathi/id1608880919',
    duration: '4 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'User Authentication (Mobile Number OTP)',
      'Cahfree Integration for Payments',
      'Loyalty & Reward Points System',
      'Real-time Reward Point Updates',
      'Transaction History and Earnings Summary',
      'Push Notifications for Offers and Updates',
      'Help & Support Section with FAQs'
    ],
  },
  {
    id: '4',
    title: 'Chat Application',
    description: 'A real-time chat application enabling users to connect and communicate seamlessly. Features include one-on-one messaging and group chats.',
    imageUrl: 'https://placehold.co/600x400.png',
    images: [
      'https://placehold.co/800x600.png',
      'https://placehold.co/400x300.png',
      'https://placehold.co/400x300.png',
    ],
    imageHint: 'chat interface messages',
    technologies: ['Flutter', 'Firebase Firestore', 'Firebase Auth'],
    projectUrl: '#',
    androidLiveUrl: 'https://sagaranghan.com/',
    iosLiveUrl: 'https://sagaranghan.com/',
    duration: '4 Months',
    role: 'Flutter Developer',
    keyFeatures: [
      'User Authentication (Mobile Number OTP)',
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
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="bg-background relative overflow-hidden">
      <Layers
        className="absolute -top-16 -left-16 h-72 w-72 text-primary/10 opacity-30 transform -rotate-12 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Target
        className="absolute -bottom-20 -right-20 h-80 w-80 text-accent/10 opacity-30 transform rotate-[30deg] pointer-events-none z-0"
        aria-hidden="true"
      />
       <Flame
        className="hidden md:block absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 text-primary/5 opacity-20 rotate-[15deg] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <Link href={`/projects/${project.id}`} className="flex flex-col group flex-grow">
                <div className="relative w-full h-60 md:h-72 flex overflow-hidden">
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
          ))}
        </div>
      </div>
    </section>
  );
}
