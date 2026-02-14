import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const navItems = [
    { label: 'Journey', href: '/#journey' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Achievements', href: '/#achievements' },
    { label: 'Experience', href: '/#experience' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-headline font-black tracking-tighter">
          ASCENSION<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-all hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Link href="/#contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}