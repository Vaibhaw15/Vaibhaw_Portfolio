
"use client"; // Added to enable client-side hooks for animation

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react'; // Imported hooks

export default function IntroSection() {
  const expertiseText = "Flutter expert";
  const [animatedExpertise, setAnimatedExpertise] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset animation states if expertiseText changes (e.g., on HMR or future prop change)
    setAnimatedExpertise('');
    setCurrentIndex(0);
    setShowCursor(true);

    // Clear previous timeouts/intervals if any
    let typingTimeoutId: NodeJS.Timeout;
    let cursorIntervalId: NodeJS.Timeout;

    if (expertiseText.length > 0) { // Only start if there's text to type
        const type = () => {
            if (currentIndex < expertiseText.length) {
                typingTimeoutId = setTimeout(() => {
                    setAnimatedExpertise((prev) => prev + expertiseText[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, 150); // Typing speed
            } else {
                // Typing finished, make cursor blink
                cursorIntervalId = setInterval(() => {
                    setShowCursor((prev) => !prev);
                }, 530); // Cursor blink speed
            }
        };
        type(); // Initial call
    }
    
    return () => {
        clearTimeout(typingTimeoutId);
        clearInterval(cursorIntervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, expertiseText]); // Rerun effect when currentIndex or expertiseText changes

  // Effect to handle the initial setup based on expertiseText length
  useEffect(() => {
    setCurrentIndex(0);
    setAnimatedExpertise('');
    setShowCursor(true);
    if (expertiseText.length === 0) {
        // If there's no text to type, just show a blinking cursor or nothing
        const blinkInterval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(blinkInterval);
    }
  }, [expertiseText]);


  return (
    <section id="intro" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Styles like rounded corners moved to this div */}
        <div className="grid md:grid-cols-2 items-center overflow-hidden rounded-lg">
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
            {/* Animated "Flutter expert" text */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-6 min-h-[1.5em]"> {/* min-h to prevent layout shift */}
              {animatedExpertise}
              {/* Static cursor while typing */}
              {currentIndex < expertiseText.length && expertiseText.length > 0 && (
                <span className="ml-0.5 text-accent">|</span>
              )}
              {/* Blinking cursor after typing is complete or if no text to type */}
              {currentIndex === expertiseText.length && showCursor && expertiseText.length > 0 && (
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              )}
               {expertiseText.length === 0 && showCursor && ( // Blinking cursor if no text
                <span className="animate-pulse ml-0.5 text-accent">|</span>
              )}
            </p>
            
            {/* This line was removed: 
            <p className="text-xl md:text-2xl text-foreground mb-6">
              A passionate Flutter Developer & Tech Enthusiast
            </p> 
            */}
            
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
