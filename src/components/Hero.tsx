'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles, MoveDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-80 pb-32 overflow-hidden px-6">
      <div className="hero-glow top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary" />
      <div className="hero-glow bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent" />
      
      <div className="container mx-auto z-10 text-center flex flex-col items-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3 h-3" />
              <span>Available for Software Engineering & PM Roles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-tight tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase">
              <span className="text-gradient">TECHNOLEADER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              As an innovator and Executive Lead at <span className="text-white font-black italic">NERDS 2.0</span>, I leverage AI, data systems, and user-centered design to develop technology that is both innovative and socially impactful.
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white group">
                <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white group">
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
