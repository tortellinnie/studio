import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { label: 'Journey', href: '/#journey' },
    { label: 'Impact', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Education', href: '/#education' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Honors', href: '/#achievements' },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full pt-6">
      <div className="container mx-auto px-6">
        <div className="h-16 lg:h-20 glass-card rounded-3xl lg:rounded-[2.5rem] px-6 lg:px-8 flex items-center justify-between border-white/[0.08] shadow-2xl">
          <Link href="/" className="text-lg md:text-2xl font-headline font-black tracking-tighter hover:scale-105 transition-transform group shrink-0">
            TECHNOLEADER<span className="text-primary group-hover:animate-pulse">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[9px] uppercase font-black tracking-[0.2em] text-muted-foreground hover:text-white transition-all hover:translate-y-[-2px] whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild className="rounded-full border border-white/10 text-white hover:bg-white/5 px-5 font-black tracking-widest text-[9px] uppercase h-10 transition-all hover:scale-105 shrink-0">
                <Link href="/resume">
                  <FileText className="w-3 h-3 mr-2" />
                  Resume
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-6 font-black tracking-widest text-[9px] uppercase h-10 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 shrink-0">
                <Link href="/#contact">Connect</Link>
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex gap-2">
            <Button variant="ghost" asChild className="rounded-full border border-white/10 text-white px-3 h-9">
              <Link href="/resume"><FileText className="w-3.5 h-3.5" /></Link>
            </Button>
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-5 font-black tracking-widest text-[9px] uppercase h-9">
              <Link href="/#contact">Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}