
'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronRight, MoveDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 bg-transparent overflow-visible">
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-white/[0.02] hero-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-white/[0.01] hero-glow pointer-events-none" />
      
      <div className="container mx-auto z-10 max-w-7xl overflow-visible">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center overflow-visible">
          
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000 overflow-visible">
            <div className="space-y-6 overflow-visible w-full">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-md text-[9px] font-black uppercase tracking-[0.3em] text-white/40 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Available for Strategic Partnerships</span>
              </div>
              
              <div className="relative overflow-visible w-fit">
                <h1 className="flex flex-col text-7xl sm:text-8xl md:text-9xl xl:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase overflow-visible pr-32 pb-4">
                  <span className="italic inline-block text-white">
                    TECHNO
                  </span>
                  <span className="italic inline-block text-gradient pr-12">
                    LEADER
                  </span>
                </h1>
              </div>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-medium">
                Executive Lead at <span className="text-white font-bold italic">NERDS 2.0</span>. <br />
                Driving high-impact technical initiatives and strategic leadership in Manila.
              </p>

              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-14 px-10 text-base font-black group transition-all" asChild>
                  <Link href="/#projects">
                    Explore Work
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <div className="flex items-center gap-3">
                  <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.08] transition-all text-white/40 hover:text-white shadow-sm">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.08] transition-all text-white/40 hover:text-white shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-200 overflow-visible">
            {profileImage && (
              <div className="relative w-full max-w-[380px] aspect-[3/4] group overflow-visible">
                <div className="absolute inset-0 bg-white/5 rounded-[3rem] blur-3xl opacity-10 -z-10" />
                
                <div className="relative w-full h-full rounded-[3rem] border border-white/5 overflow-hidden premium-glass shadow-2xl">
                  <Image 
                    src={profileImage.imageUrl} 
                    alt={profileImage.description}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85] contrast-[1.1]"
                    data-ai-hint={profileImage.imageHint}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/95 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-10 right-10 text-right">
                    <p className="text-white text-xl font-black italic uppercase tracking-tighter">
                      Shann Karl Felipe<span className="text-white">.</span>
                    </p>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">Leader | Speaker</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <MoveDown className="text-white/5 w-5 h-5" />
      </div>
    </section>
  );
}
