
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Card and CardContent are no longer used
import { Download, Briefcase } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="intro" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card and CardContent components removed. Styles like shadow and rounded corners moved to this div */}
        <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-xl rounded-lg">
          <div className="relative h-80 md:h-[500px] w-full">
            <Image
              src="/vaibhaw-profile.jpg"
              alt="Vaibhaw Soni - Professional Headshot"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              data-ai-hint="professional portrait"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
              Hi, I'm Vaibhaw Soni
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-6">
              A passionate Flutter Developer & Tech Enthusiast
            </p>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
              Passionate Flutter Developer with strong experience in building responsive, scalable, and real-time mobile applications. Skilled in Dart, Flutter, Firebase, REST APIs, and advanced state management solutions like BLoC, Riverpod, GetX, and MobX. Proficient in implementing animations (implicit & explicit), API integrations, real-time features (WebRTC), and testing (unit/BLoC testing)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="https://drive.google.com/file/d/15kVTMC_tzbz_RG-rC7gQ3LBcIbv9iIei/view?usp=sharing" target="_blank" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
