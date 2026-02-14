import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const navItems = [
    { label: 'Journey', href: '/#journey' },
    { label: 'Featured', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Education', href: '/#education' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Honors', href: '/#achievements' },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full pt-6">
      <div className="container mx-auto px-6">
        <div className="h-20 glass-card rounded-[2rem] px-8 flex items-center justify-between border-white/[0.08] shadow-2xl gap-8">
          <Link href="/" className="text-xl md:text-2xl font-headline font-black tracking-tighter hover:scale-105 transition-transform group flex-shrink-0">
            TECHNOLEADER<span className="text-primary group-hover:animate-pulse">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-foreground hover:text-white transition-all hover:translate-y-[-2px] whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-8 font-black tracking-widest text-[10px] uppercase h-11 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 flex-shrink-0">
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile indicator or simplified menu could go here if needed, but keeping original structure */}
          <div className="lg:hidden">
             <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-6 font-black tracking-widest text-[10px] uppercase h-10">
              <Link href="/#contact">Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
