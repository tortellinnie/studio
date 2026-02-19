'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Shadow and scale change on initial scroll
      setIsScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      "fixed top-6 z-[100] w-full flex justify-center px-6 transition-all duration-700 ease-premium pointer-events-none",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
    )}>
      <div className={cn(
        "h-16 rounded-full flex items-center justify-between px-8 md:px-10 max-w-7xl w-full pointer-events-auto transition-all duration-500",
        "bg-white/95 backdrop-blur-xl border border-black/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
        isScrolled ? "scale-[0.98] shadow-[0_12px_40px_rgba(0,0,0,0.08)]" : "scale-100"
      )}>
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-sm md:text-base font-black tracking-tighter uppercase italic text-black transition-transform group-hover:scale-105 duration-300">
            TECHNOLEADER
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-bold text-black/50 hover:text-black transition-all uppercase tracking-[0.3em] whitespace-nowrap relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Link 
            href="/resume" 
            className="hidden md:flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/80 hover:text-black transition-colors group"
          >
            <FileText className="w-4 h-4 text-black/40 group-hover:text-primary transition-colors" />
            RESUME
          </Link>
          <Button asChild className="rounded-full bg-black text-white hover:bg-black/80 h-10 px-8 text-[10px] font-black uppercase tracking-[0.3em] shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/#contact">Connect</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
