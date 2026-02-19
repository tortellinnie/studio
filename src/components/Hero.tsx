'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const headshot = PlaceHolderImages.find(img => img.id === 'profile-headshot');
  
  const partners = [
    { name: "P&G", logoId: "logo-png" },
    { name: "AWS", logoId: "logo-aws" },
    { name: "DOST", logoId: "logo-dost" },
    { name: "DICT", logoId: "logo-dict" },
    { name: "Google Cloud", logoId: "logo-dict" },
    { name: "Vercel", logoId: "logo-dict" },
    { name: "GitHub", logoId: "logo-dict" },
    { name: "EMC Global", logoId: "logo-emc" },
  ];

  const compactStats = [
    { label: 'BENEFICIARIES', value: '300K+' },
    { label: 'SPEAKERSHIP AUDIENCES', value: '2,000+' },
    { label: 'CAPITAL SECURED', value: '₱1.2M+' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] animate-in fade-in slide-in-from-bottom-2 duration-700">
                SOFTWARE ENGINEERING & R&D
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1] tracking-tighter text-foreground italic uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                Architecting <br />
                Technical <br />
                Solutions<span className="text-primary">.</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                <span className="text-foreground font-bold">Shann Karl Felipe</span> • Executive Lead & Engineer. 
                Focusing on high-impact AI automation, distributed systems, and technical leadership in Manila.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 h-14 px-10 text-sm font-bold flex items-center gap-2 group shadow-2xl" asChild>
                  <Link href="/#contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-sm font-bold bg-white border-border hover:bg-gray-50 flex items-center gap-2" asChild>
                  <Link href="/resume">
                    <FileText className="w-4 h-4" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="pt-10 grid grid-cols-3 gap-8 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {compactStats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <span className="text-4xl font-black italic tracking-tighter text-foreground leading-none block">
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
            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto overflow-hidden rounded-[3rem] border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group bg-white/5">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-6 py-4 rounded-[2rem] w-fit shadow-2xl">
                  <p className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] leading-none mb-2">Status 2026</p>
                  <p className="text-lg font-bold text-white uppercase italic tracking-tighter leading-none">AI AUTOMATION ENGINEER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Collaborations - Moved up and Enlarged */}
        <div className="mt-16 pt-10 border-t border-gray-50 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.4em] w-full text-center mb-4">Strategic Collaborations</p>
          {partners.map((partner, i) => {
            const logo = PlaceHolderImages.find(img => img.id === partner.logoId);
            return (
              <div key={i} className="transition-all duration-500 cursor-help hover:scale-110 active:scale-95">
                {logo && (
                  <div className="relative w-28 h-10">
                    <Image 
                      src={logo.imageUrl} 
                      alt={partner.name}
                      fill
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
