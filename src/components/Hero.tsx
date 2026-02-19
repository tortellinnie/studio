'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const headshot = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  const compactStats = [
    { label: 'BENEFICIARIES', value: '300K+' },
    { label: 'SPEAKERSHIP AUDIENCES', value: '2,000+' },
    { label: 'CAPITAL SECURED', value: '₱1.2M+' },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                SOFTWARE ENGINEERING & R&D
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1] tracking-tighter text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Architecting <br />
                Technical <br />
                Solutions<span className="text-primary">.</span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                <span className="text-foreground font-bold">Shann Karl Felipe</span> • Executive Lead & Engineer. 
                Focusing on high-impact AI, distributed systems, and technical leadership in Manila.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-12 px-8 text-sm font-bold flex items-center gap-2 group shadow-xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-sm font-bold bg-white border-border hover:bg-gray-50 flex items-center gap-2 shadow-sm" asChild>
                  <Link href="/resume">
                    <FileText className="w-4 h-4" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>

            {/* Metrics integrated into the Hero frame for immediate visibility */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {compactStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-3xl font-black italic tracking-tighter text-foreground leading-none block">
                    {stat.value}
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/80 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[2.5rem] border border-border shadow-2xl group bg-white/5">
              {headshot && (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  data-ai-hint={headshot.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl w-fit">
                  <p className="text-[9px] font-black uppercase text-white/60 tracking-widest leading-none mb-1.5">Status 2026</p>
                  <p className="text-sm font-bold text-white uppercase italic tracking-tighter leading-none">Incoming P&G IT Intern</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
