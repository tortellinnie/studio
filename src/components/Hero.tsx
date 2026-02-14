
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-80 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="hero-glow top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary" />
      <div className="hero-glow bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center z-10">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Sparkles className="w-3 h-3" />
              <span>Available for Internship</span>
            </div>
            
            <h1 className="text-6xl lg:text-[7rem] font-black text-white leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <span className="text-gradient uppercase block">TECHNO</span>
              <span className="text-gradient uppercase block">LEADER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Intelligent Solutions. Let&apos;s make it happen.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 items-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-12 text-xl font-black group transition-all hover:scale-105" asChild>
              <Link href="/#projects">
                Explore Work
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
        
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="aspect-[4/5] relative overflow-hidden rounded-[3rem] border-[1px] border-white/10 glass-card shadow-3xl transform rotate-2 hover:rotate-0 transition-all duration-1000 group">
            <Image
              src={profileImage?.imageUrl || ''}
              alt="Portrait"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              priority
              data-ai-hint="minimalist professional portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
          
          {/* Statistics Card */}
          <div className="absolute -bottom-12 -left-12 glass-card p-8 rounded-[2rem] flex items-center gap-6 border-white/10 animate-bounce-slow max-w-xs">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-[0_0_30px_rgba(139,92,246,0.5)] shrink-0">
              3.6
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Academic Rank</p>
              <p className="text-sm font-black text-white">Software Engineering Top Performing Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
