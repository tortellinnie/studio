'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const headshot = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                Software Engineering & R&D
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Architecting <br />
                Technical <br />
                Solutions<span className="text-blue-600">.</span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Shann Karl Felipe • <span className="text-foreground">Executive Lead & Engineer</span>. 
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
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-[4rem] border border-border shadow-2xl group">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  data-ai-hint={headshot.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/40 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl">
                  <p className="text-[10px] font-black uppercase text-black tracking-widest leading-none mb-1">Status 2026</p>
                  <p className="text-sm font-bold text-black uppercase italic tracking-tighter leading-none">P&G IT Intern</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
