
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
  const [showCursor, setShowCursor] = useState(true);

  // Effect to reset animation state when expertiseText changes or for empty text
  useEffect(() => {
    setAnimatedExpertise('');
    setCurrentIndex(0);
    setShowCursor(true); // Ensure cursor is visible on reset or for empty text

    let blinkInterval: NodeJS.Timeout | undefined;
    if (expertiseText.length === 0) {
      // If there's no text to type, just make cursor blink
      blinkInterval = setInterval(() => setShowCursor(prev => !prev), 530);
    }
    
    return () => {
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, [expertiseText]);

  // Effect to perform the typing animation step and post-typing blink
  useEffect(() => {
    if (expertiseText.length === 0) {
      // Reset effect handles blinking for empty text, so this effect can be a no-op.
      return;
    }

    let typingTimeoutId: NodeJS.Timeout | undefined;
    let cursorBlinkIntervalId: NodeJS.Timeout | undefined;

    if (currentIndex < expertiseText.length) {
      // Still typing
      typingTimeoutId = setTimeout(() => {
        setAnimatedExpertise((prev) => prev + expertiseText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 200); // Slower typing speed (e.g., 200ms)
    } else {
      // Typing finished (and expertiseText.length > 0)
      // Start blinking cursor
      cursorBlinkIntervalId = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530); // Cursor blink speed
    }

    return () => {
      if (typingTimeoutId) clearTimeout(typingTimeoutId);
      if (cursorBlinkIntervalId) clearInterval(cursorBlinkIntervalId);
    };
  }, [currentIndex, expertiseText]); // Depends on currentIndex to step and expertiseText for content

  return (
    <section id="intro" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center overflow-hidden rounded-lg">
          <div className="relative h-80 md:h-[500px] w-full">
            <Image
              src="https://placehold.co/800x1000.png"
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
              {currentIndex < expertiseText.length && expertiseText.length > 0 && (
                <span className="ml-0.5 text-accent">|</span>
              )}
              {currentIndex === expertiseText.length && showCursor && expertiseText.length > 0 && (
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              )}
               {expertiseText.length === 0 && showCursor && (
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              )}
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

