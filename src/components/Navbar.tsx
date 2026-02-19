'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle the "pill" narrowing effect
      setIsScrolled(currentScrollY > 20);

      // Handle the show/hide behavior on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'About', href: '/#journey' },
    { label: 'Impact', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Awards', href: '/#achievements' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 z-[100] w-full flex justify-center px-6 transition-all duration-500 pointer-events-none",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
    )}>
      <div className={cn(
        "h-16 rounded-full flex items-center justify-between premium-blur px-8 md:px-10 transition-all duration-500 pointer-events-auto shadow-sm border border-black/5",
        isScrolled ? "max-w-[1100px] w-full" : "max-w-7xl w-full"
      )}>
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-base md:text-lg font-black tracking-tighter uppercase italic text-foreground">
            TECHNOLEADER
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-black text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Button variant="ghost" asChild className="hidden md:flex rounded-full h-11 px-6 text-[11px] font-black gap-2 uppercase tracking-widest">
            <Link href="/resume">
              <FileText className="w-5 h-5" />
              Resume
            </Link>
          </Button>
          <Button asChild className="rounded-full bg-black text-white hover:bg-black/90 h-11 px-8 text-[11px] font-black uppercase tracking-widest">
            <Link href="/#contact">Connect</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
