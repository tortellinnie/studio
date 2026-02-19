'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '/#journey' },
    { label: 'Featured', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Awards', href: '/#achievements' },
  ];

  return (
    <nav className="fixed top-8 z-[100] w-full flex justify-center px-6 pointer-events-none">
      <div className={cn(
        "h-14 rounded-full flex items-center justify-between premium-blur px-8 transition-all duration-500 pointer-events-auto shadow-sm border border-black/5",
        isScrolled ? "max-w-[900px] w-full" : "max-w-7xl w-full"
      )}>
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-black tracking-tighter uppercase italic">
            TECHNO<span className="text-primary">LEADER</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-tight"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden md:flex rounded-full h-9 px-4 text-[11px] font-bold gap-2">
            <Link href="/resume">
              <FileText className="w-3 h-3" />
              Resume
            </Link>
          </Button>
          <Button asChild className="rounded-full bg-black text-white hover:bg-black/90 h-9 px-5 text-[11px] font-bold">
            <Link href="/#contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
