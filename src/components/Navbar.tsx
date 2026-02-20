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
      
      setIsScrolled(currentScrollY > 20);

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
    { label: 'Impact', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Insights', href: '/#blogs' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 z-[100] w-full flex justify-center px-6 transition-all duration-700 ease-premium pointer-events-none",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
    )}>
      <div className={cn(
        "h-16 rounded-full flex items-center justify-between px-8 md:px-10 max-w-7xl w-full pointer-events-auto transition-all duration-500",
        "bg-white/95 backdrop-blur-xl border border-primary/10 shadow-sm",
        isScrolled ? "scale-[0.98] shadow-md" : "scale-100"
      )}>
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-lg md:text-xl font-semibold tracking-tight text-black">
            TechnoLeader<span className="text-primary">.</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-primary transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Link 
            href="/resume" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors group"
          >
            <FileText className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
            Resume
          </Link>
          <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 h-10 px-8 text-sm font-medium shadow-sm transition-all duration-300">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0lY_shann_karl_felipe" target="_blank" rel="noopener noreferrer">Connect</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}