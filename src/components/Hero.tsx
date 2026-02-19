'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const headshot = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-black text-primary uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                SOFTWARE ENGINEERING & R&D
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Architecting <br />
                Technical <br />
                Solutions<span className="text-primary">.</span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                <span className="text-foreground font-bold">Shann Karl Felipe</span> • Executive Lead & Engineer. 
                Focusing on high-impact AI, distributed systems, and technical leadership in Manila.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-14 px-10 text-base font-bold flex items-center gap-2 group shadow-xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-base font-bold bg-white border-border hover:bg-gray-50 flex items-center gap-2 shadow-sm" asChild>
                  <Link href="/resume">
                    <FileText className="w-4 h-4" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto overflow-hidden rounded-[3rem] border border-border shadow-2xl group bg-white/5">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover transition-all duration-700 scale-105 group-hover:scale-110"
                  data-ai-hint={headshot.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/40 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl w-fit">
                  <p className="text-[10px] font-black uppercase text-white/60 tracking-widest leading-none mb-1">Status 2026</p>
                  <p className="text-sm font-bold text-white uppercase italic tracking-tighter leading-none">P&G IT Intern</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          </div>

        </div>
      </div>
    </section>
  );
}