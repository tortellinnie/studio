'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Dynamic Background Glows */}
      <div className="hero-glow top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20" />
      <div className="hero-glow bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto z-10 text-center flex flex-col items-center">
        <div className="space-y-16 w-full max-w-screen-xl">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-[11px] font-black uppercase tracking-[0.25em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3.5 h-3.5 fill-primary" />
              <span>Available for 2026 Software Engineering & IT Roles</span>
            </div>
            
            <div className="overflow-hidden py-4">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase whitespace-nowrap">
                <span className="text-gradient">TECHNOLEADER</span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Innovator and Executive Lead at <span className="text-white font-black italic">NERDS 2.0</span>. <br className="hidden md:block" />
              Architecting <span className="text-primary italic">scalable intelligence</span> in Manila.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-14 text-xl font-black group transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]" asChild>
              <Link href="/#projects">
                Explore Innovations
                <ChevronRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <div className="flex items-center gap-6">
              <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-4.5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-muted-foreground hover:text-white group backdrop-blur-md">
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4.5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary/20 hover:border-primary/40 transition-all text-muted-foreground hover:text-white group backdrop-blur-md">
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="p-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm">
          <MoveDown className="text-white/30 w-6 h-6" />
        </div>
      </div>
    </section>
  );
}