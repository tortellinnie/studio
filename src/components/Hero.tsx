'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-32 pb-12 bg-transparent overflow-visible">
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/20 hero-glow animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-500/15 hero-glow animate-pulse delay-1000" />
      
      <div className="container mx-auto z-10 text-center flex flex-col items-center overflow-visible">
        <div className="space-y-12 w-full max-w-7xl overflow-visible flex flex-col items-center">
          
          {/* Profile Headshot */}
          {profileImage && (
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-2 group animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all opacity-50" />
              <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden premium-glass shadow-2xl">
                <Image 
                  src={profileImage.imageUrl} 
                  alt={profileImage.description}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            </div>
          )}

          <div className="space-y-8 lg:space-y-10 overflow-visible w-full">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-[40px] text-[11px] font-black uppercase tracking-[0.3em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3.5 h-3.5 fill-primary" />
              <span>Available for 2026 Engineering Roles</span>
            </div>
            
            <div className="relative overflow-visible px-10 md:px-24">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black text-white leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase text-gradient pb-8 block overflow-visible text-center italic">
                TECHNOLEADER
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Innovator and Executive Lead at <span className="text-white font-black italic">NERDS 2.0</span>. <br className="hidden md:block" />
              Architecting <span className="text-primary italic">scalable intelligence</span> in Manila.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-14 text-xl font-black group transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]" asChild>
              <Link href="/#projects">
                Explore Innovations
                <ChevronRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <div className="flex items-center gap-6">
              <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-4.5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all text-muted-foreground hover:text-white group backdrop-blur-[40px] shadow-xl">
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4.5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all text-muted-foreground hover:text-white group backdrop-blur-[40px] shadow-xl">
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
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
