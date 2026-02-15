
'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 bg-transparent overflow-visible">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/20 hero-glow animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-500/15 hero-glow animate-pulse delay-1000" />
      
      <div className="container mx-auto z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Column 1: Vertical Rectangle Portrait */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-in fade-in slide-in-from-left-12 duration-1000">
            {profileImage && (
              <div className="relative w-full max-w-[400px] aspect-[3/4] group">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/30 rounded-[3rem] blur-3xl group-hover:blur-[4rem] transition-all opacity-40 -z-10" />
                
                {/* Premium Vertical Card */}
                <div className="relative w-full h-full rounded-[3.5rem] border border-white/10 overflow-hidden premium-glass shadow-[0_32px_120px_-20px_rgba(0,0,0,0.8)] premium-gradient-border">
                  <Image 
                    src={profileImage.imageUrl} 
                    alt={profileImage.description}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    data-ai-hint={profileImage.imageHint}
                    priority
                  />
                  
                  {/* Glass Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10">
                    <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-4 inline-block">
                      <p className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Identity 2026</p>
                    </div>
                    <p className="text-white text-xl font-black italic uppercase tracking-tighter">
                      Shann Karl Felipe<span className="text-primary">.</span>
                    </p>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">Digital Architect</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Balanced Branding & Copy */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-[40px] text-[10px] font-black uppercase tracking-[0.3em] text-primary shadow-xl">
                <Sparkles className="w-3 h-3 fill-primary" />
                <span>Open for Engineering Roles</span>
              </div>
              
              <h1 className="flex flex-col text-7xl sm:text-8xl md:text-9xl xl:text-[11rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic text-gradient pr-8">
                <span>TECHNO</span>
                <span className="text-primary">LEADER</span>
              </h1>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
                Executive Lead at <span className="text-white font-black italic">NERDS 2.0</span>. <br />
                Architecting <span className="text-primary italic">scalable intelligence</span> and high-impact software solutions in Manila.
              </p>

              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-12 text-lg font-black group transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]" asChild>
                  <Link href="/#projects">
                    Explore Work
                    <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
                
                <div className="flex items-center gap-4">
                  <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all text-muted-foreground hover:text-white group backdrop-blur-[40px] shadow-xl">
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all text-muted-foreground hover:text-white group backdrop-blur-[40px] shadow-xl">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="p-4 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-[40px]">
          <MoveDown className="text-white/20 w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
