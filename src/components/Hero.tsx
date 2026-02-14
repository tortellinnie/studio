'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-32 overflow-hidden px-6">
      <div className="hero-glow top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary" />
      <div className="hero-glow bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent" />
      
      <div className="container mx-auto z-10 text-center flex flex-col items-center">
        <div className="space-y-12 w-full max-w-screen-xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3 h-3" />
              <span>Available for 2026 Software Engineering & PM Roles</span>
            </div>
            
            <div className="overflow-hidden py-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase whitespace-nowrap">
                <span className="text-gradient">TECHNOLEADER</span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Innovator and Executive Lead at <span className="text-white font-black italic">NERDS 2.0</span>. Leveraging AI, data systems, and user-centered design for socially impactful technology in Manila.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-12 text-xl font-black group transition-all hover:scale-105" asChild>
              <Link href="/#projects">
                Explore Innovations
                <ChevronRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <div className="flex items-center gap-6">
              <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white group">
                <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white group">
                <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link href="/#journey" className="mt-24 animate-bounce text-white/20 hover:text-primary transition-colors">
        <MoveDown className="w-8 h-8" />
      </Link>
    </section>
  );
}