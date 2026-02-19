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
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start pt-8">
          
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                SOFTWARE ENGINEERING & R&D
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                ARCHITECTING <br />
                TECHNICAL <br />
                SOLUTIONS<span className="text-primary">.</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                <span className="text-foreground font-bold italic uppercase block mb-2">Turning vision into intelligent systems that scale.</span>
                Shann Karl Felipe • Professional Engineer focusing on AI automation and strategic leadership in Manila.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-12 px-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group shadow-2xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-12 px-10 text-[10px] font-black uppercase tracking-widest bg-white border-border hover:bg-gray-50 flex items-center gap-2" asChild>
                  <Link href="/resume">
                    <FileText className="w-4 h-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {compactStats.map((stat, i) => (
                <div key={i} className="space-y-2 text-center lg:text-left">
                  <span className="text-3xl md:text-4xl font-black italic tracking-tighter text-foreground leading-none block">
                    {stat.value}
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto overflow-hidden rounded-[3rem] border border-border shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] group bg-white/5">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl w-fit shadow-2xl">
                  <p className="text-lg font-black text-white uppercase italic tracking-tighter leading-none">AI AUTOMATION ENGINEER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
