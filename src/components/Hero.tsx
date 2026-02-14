import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-headshot');

  return (
    <section className="relative overflow-hidden py-24 lg:py-40">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internship 2025
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              CRAFTING THE <br />
              <span className="text-gradient">FUTURE OF CODE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
              Alex here. A Software Engineer obsessed with building high-performance distributed systems and pixel-perfect interfaces. 
            </p>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-14 px-10 text-lg font-bold group" asChild>
              <Link href="/#projects">
                View My Work
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-primary transition-all text-muted-foreground hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-[2.5rem] border-[12px] border-white/5 glass-card shadow-3xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
            <Image
              src={profileImage?.imageUrl || ''}
              alt="Alex's Portrait"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
              data-ai-hint="professional headshot student"
            />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl md:flex items-center gap-4 hidden border-white/10 animate-bounce-slow">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-black">
              3.9
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-primary tracking-widest">Cumulative GPA</p>
              <p className="text-sm font-bold text-white">Dean's List Honoree</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}