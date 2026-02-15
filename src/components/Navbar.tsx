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
      
      // Hiding logic
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Shortening logic
      if (currentScrollY > 80) {
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
      "fixed top-0 z-[100] w-full pt-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center pointer-events-none",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
    )}>
      <div className={cn(
        "w-full px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center pointer-events-auto",
        isShortened ? "max-w-[1000px]" : "max-w-7xl"
      )}>
        <div className={cn(
          "h-16 lg:h-20 glass-card rounded-[2.5rem] flex items-center justify-between border-white/[0.1] shadow-[0_8px_48px_0_rgba(0,0,0,0.6)] backdrop-blur-[48px] bg-white/[0.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full overflow-hidden",
          isShortened ? "px-6" : "px-10"
        )}>
          <div className={cn(
            "flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isShortened ? "gap-4" : "gap-12"
          )}>
            <Link href="/" className="text-lg md:text-2xl font-headline font-black tracking-tighter hover:scale-105 transition-transform group shrink-0 text-white">
              TECHNOLEADER<span className="text-primary group-hover:animate-pulse">.</span>
            </Link>
            
            <div className={cn(
              "hidden lg:flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isShortened ? "gap-x-4" : "gap-x-10"
            )}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[9px] uppercase font-black transition-all duration-500 text-white/50 hover:text-white hover:translate-y-[-2px] whitespace-nowrap tracking-[0.25em]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="ghost" 
                asChild 
                className="rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/10 font-black tracking-widest text-[9px] uppercase h-11 px-6 whitespace-nowrap backdrop-blur-xl transition-all duration-700"
              >
                <Link href="/resume">
                  <FileText className="w-3.5 h-3.5 mr-2" />
                  Resume
                </Link>
              </Button>
              
              <Button asChild className={cn(
                "rounded-full bg-white text-black hover:bg-white/90 font-black tracking-widest text-[9px] uppercase h-11 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0",
                isShortened ? "px-6" : "px-10"
              )}>
                <Link href="/#contact">
                  {isShortened ? 'Talk' : 'Connect'}
                </Link>
              </Button>
            </div>

            <div className="lg:hidden flex gap-2">
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-6 font-black tracking-widest text-[9px] uppercase h-10">
                <Link href="/#contact">Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}