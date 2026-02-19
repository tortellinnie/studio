'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isShortened, setIsShortened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShortened(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Journey', href: '/#journey' },
    { label: 'Impact', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full flex justify-center pt-8 pointer-events-none">
      <div className={cn(
        "w-full px-6 transition-all duration-1000 ease-premium flex justify-center pointer-events-auto",
        isShortened ? "max-w-[1000px]" : "max-w-7xl"
      )}>
        <div className={cn(
          "h-14 md:h-16 rounded-full flex items-center justify-between border border-white/[0.05] bg-[#02040a]/80 backdrop-blur-3xl shadow-2xl transition-all duration-1000 ease-premium w-full px-8",
          isShortened ? "bg-white/10" : ""
        )}>
          <div className={cn(
            "flex items-center transition-all duration-1000 ease-premium",
            isShortened ? "gap-6" : "gap-12"
          )}>
            <Link href="/" className="text-xl font-black italic tracking-tighter text-white shrink-0 group">
              TL<span className="hidden sm:inline">.STUDIO</span>
            </Link>
            
            <div className={cn(
              "hidden lg:flex items-center transition-all duration-1000 ease-premium",
              isShortened ? "gap-x-4" : "gap-x-8"
            )}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[9px] uppercase font-black transition-all duration-500 text-white/40 hover:text-white tracking-[0.4em] whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={cn(
            "flex items-center transition-all duration-1000 ease-premium",
            isShortened ? "gap-4" : "gap-6"
          )}>
            <Link href="/resume" className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
              <FileText className="w-3 h-3" />
              Resume
            </Link>
            
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 h-10 px-8 text-[10px] font-black uppercase tracking-widest transition-all duration-1000">
              <Link href="/#contact">Connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
