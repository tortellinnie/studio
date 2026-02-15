'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isShortened, setIsShortened] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle visibility (Hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Handle "shortening" contraction
      if (currentScrollY > 50) {
        setIsShortened(true);
      } else {
        setIsShortened(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Journey', href: '/#journey' },
    { label: 'Impact', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Education', href: '/#education' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Honors', href: '/#achievements' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 z-[100] w-full pt-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center",
      isVisible 
        ? "translate-y-0 opacity-100" 
        : "-translate-y-32 opacity-0 pointer-events-none"
    )}>
      <div className={cn(
        "container px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isShortened ? "max-w-4xl" : "max-w-full"
      )}>
        <div className={cn(
          "h-16 lg:h-20 glass-card rounded-[2.5rem] flex items-center justify-between border-white/[0.1] shadow-[0_8px_48px_0_rgba(0,0,0,0.6)] backdrop-blur-[48px] bg-white/[0.03] transition-all duration-700",
          isShortened ? "px-6 lg:px-8" : "px-6 lg:px-10"
        )}>
          <Link href="/" className="text-lg md:text-2xl font-headline font-black tracking-tighter hover:scale-105 transition-transform group shrink-0 text-white">
            TECHNOLEADER<span className="text-primary group-hover:animate-pulse">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 transition-all duration-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[9px] uppercase font-black tracking-[0.25em] text-white/50 hover:text-white transition-all hover:translate-y-[-2px] whitespace-nowrap",
                  isShortened ? "opacity-100 translate-x-0" : "opacity-100"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 ml-4">
              <Button variant="ghost" asChild className="rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/10 px-6 font-black tracking-widest text-[9px] uppercase h-11 transition-all hover:scale-105 shrink-0 backdrop-blur-xl">
                <Link href="/resume">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  Resume
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-10 font-black tracking-widest text-[9px] uppercase h-11 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 shrink-0">
                <Link href="/#contact">Connect</Link>
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex gap-2">
            <Button variant="ghost" asChild className="rounded-full border border-white/10 text-white px-3 h-10 backdrop-blur-xl">
              <Link href="/resume"><FileText className="w-4 h-4" /></Link>
            </Button>
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-6 font-black tracking-widest text-[9px] uppercase h-10">
              <Link href="/#contact">Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
