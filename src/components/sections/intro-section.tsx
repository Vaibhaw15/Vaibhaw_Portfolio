
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function IntroSection() {
  const expertiseText = "Flutter expert";
  const [animatedExpertise, setAnimatedExpertise] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopDelay, setLoopDelay] = useState(200); // Controls the speed/delay of the next step
  const [showCursor, setShowCursor] = useState(true);

  const TYPING_SPEED = 200;
  const DELETING_SPEED = 100;
  const PAUSE_DURATION_AFTER_TYPING = 2000; // Pause after full text is typed
  const PAUSE_DURATION_AFTER_DELETING = 500; // Pause before restarting

  useEffect(() => {
    const handleTypingLoop = () => {
      if (!isDeleting) { // Typing forward
        if (currentIndex < expertiseText.length) {
          setAnimatedExpertise((prev) => prev + expertiseText.charAt(currentIndex));
          setCurrentIndex((prev) => prev + 1);
          setLoopDelay(TYPING_SPEED);
        } else { // Finished typing
          setLoopDelay(PAUSE_DURATION_AFTER_TYPING); // Pause
          setIsDeleting(true); // Then start deleting
        }
      } else { // Deleting
        if (animatedExpertise.length > 0) {
          setAnimatedExpertise((prev) => prev.substring(0, prev.length - 1));
          setLoopDelay(DELETING_SPEED);
        } else { // Finished deleting
          setIsDeleting(false);
          setCurrentIndex(0);
          setLoopDelay(PAUSE_DURATION_AFTER_DELETING); // Pause before restart
        }
      }
    };

    const timeoutId = setTimeout(handleTypingLoop, loopDelay);
    return () => clearTimeout(timeoutId);
  }, [animatedExpertise, currentIndex, isDeleting, expertiseText, loopDelay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Standard blink rate
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="intro" className="bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 items-center overflow-hidden rounded-lg px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1">
            Hi, I'm Vaibhaw Soni
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-6 min-h-[1.5em]">
            {animatedExpertise}
            {showCursor && <span className="animate-pulse ml-0.5 text-accent">|</span>}
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
    </section>
  );
}
