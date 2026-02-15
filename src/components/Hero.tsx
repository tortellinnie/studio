'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-transparent overflow-hidden">
      {/* Dynamic Animated Glows with Purple and Orange */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/20 hero-glow animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-amber-500/10 hero-glow animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto z-10 text-center flex flex-col items-center">
        <div className="space-y-12 w-full max-w-screen-2xl px-4 lg:px-12">
          <div className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-[40px] text-[11px] font-black uppercase tracking-[0.3em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3.5 h-3.5 fill-primary" />
              <span>Available for 2026 Engineering Roles</span>
            </div>
            
            <div className="relative px-4 sm:px-8 overflow-visible">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black text-white leading-[0.95] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase text-gradient pb-6 px-4 pr-10 md:pr-14">
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

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="p-4 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-[40px]">
          <MoveDown className="text-white/20 w-5 h-5" />
        </div>
      </div>
    </section>
  );
}