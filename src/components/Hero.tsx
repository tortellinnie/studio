'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight, MoveDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-16">
          
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              Strategic Partnerships 2026
            </div>
            
            <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-[13rem] leading-[0.8] font-black italic tracking-tighter text-white">
              TECHNO<br />
              <span className="text-outline">LEADER.</span>
            </h1>
          </div>

          <div className="max-w-2xl space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
              Executive Lead at <span className="text-white">NERDS 2.0</span>. <br />
              Architecting high-impact systems and strategic technical leadership in Manila.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-14 px-10 text-base font-black uppercase tracking-widest group" asChild>
                <Link href="/#projects">
                  Explore Work
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-4">
                <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.02] border border-white/5 rounded-full hover:bg-white/[0.1] transition-all text-white/40 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/[0.02] border border-white/5 rounded-full hover:bg-white/[0.1] transition-all text-white/40 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <MoveDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
}
