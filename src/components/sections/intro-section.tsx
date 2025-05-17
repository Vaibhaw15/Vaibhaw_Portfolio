
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

const phrases = ["Flutter Expert", "Flutter Developer", "Cross-Platform Expert"];

export default function IntroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [animatedExpertise, setAnimatedExpertise] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopDelay, setLoopDelay] = useState(150); 
  const [showCursor, setShowCursor] = useState(true);

  const TYPING_SPEED = 150;
  const DELETING_SPEED = 75;
  const PAUSE_DURATION_AFTER_TYPING = 2000;
  const PAUSE_DURATION_AFTER_DELETING = 500;

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTypingLoop = () => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentPhrase.length) {
          setAnimatedExpertise((prev) => prev + currentPhrase.charAt(currentIndex));
          setCurrentIndex((prev) => prev + 1);
          setLoopDelay(TYPING_SPEED);
        } else {
          // Pause after typing
          setLoopDelay(PAUSE_DURATION_AFTER_TYPING);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (animatedExpertise.length > 0) {
          setAnimatedExpertise((prev) => prev.substring(0, prev.length - 1));
          setLoopDelay(DELETING_SPEED);
        } else {
          // Pause after deleting, then switch phrase
          setIsDeleting(false);
          setCurrentIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setLoopDelay(PAUSE_DURATION_AFTER_DELETING);
        }
      }
    };

    const timeoutId = setTimeout(handleTypingLoop, loopDelay);
    return () => clearTimeout(timeoutId);
  }, [animatedExpertise, currentIndex, isDeleting, phraseIndex, loopDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); 
    return () => clearInterval(cursorInterval);
  }, []);


  return (
    <section id="intro" className="bg-secondary pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center overflow-hidden rounded-lg px-4 sm:px-6 lg:px-8">
        {/* Image container - made square, centered, rounded, and hides overflow */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto my-8 md:my-0 rounded-full overflow-hidden ring-2 ring-primary/50 ring-offset-4 ring-offset-secondary">
          <img
            src="https://i.im.ge/2025/05/15/v8yF5T.1000027700-removebg-preview-1-1.png"
            alt="Vaibhaw Soni - Professional Headshot"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="grayscale hover:grayscale-0 transition-all duration-500 rounded-full" 
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
          <h1 className="font-bold text-primary mb-2">
            <span className="block text-2xl md:text-3xl lg:text-4xl">Hi, I'm</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">Vaibhaw Soni</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-6 min-h-[1.5em]"> 
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
              <Link href="https://drive.google.com/file/d/1V8ImmLIFuOcaRld1ukWcNVFt6TO0Ieyi/view" target="_blank" download>
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
