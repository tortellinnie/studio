'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Plane, Calendar, MapPin, CheckCircle2, Shield, Zap, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ImpactDetail() {
  const params = useParams();
  const id = params.id as string;

  const impactDetails: Record<string, any> = {
    'pg-intern': {
      title: 'P&G IT Internship 2026',
      type: 'Mission',
      location: 'Manila, Philippines',
      date: 'March 2026',
      icon: Building2,
      description: 'An elite entry into the world of global FMCG technology, focusing on high-scale systems architecture, data-driven strategy, and digital transformation.',
      content: [
        {
          title: 'Strategic Tech Excellence',
          desc: 'Selected as one of the few IT interns to handle high-impact projects at Procter & Gamble, focusing on operational excellence and supply chain digitization.',
          icon: Cpu
        },
        {
          title: 'Global Systems Architecture',
          desc: 'Gaining exposure to massive-scale IT infrastructures and learning how a global leader maintains technical resilience across international markets.',
          icon: Shield
        },
        {
          title: 'Innovation Leadership',
          desc: 'Integrating AI and data strategy to optimize internal workflows, ensuring Manila remains a technical hub for global P&G operations.',
          icon: Zap
        }
      ],
      highlights: [
        'Selected for the prestigious 2026 IT Internship cohort',
        'Focusing on Supply Chain Digitization and Data Analytics',
        'Leading cross-functional digital transformation initiatives',
        'Mentored by global IT directors and engineering architects'
      ],
      imageId: 'featured-pg-intern'
    },
    'speaking-1': {
      title: 'Global Delegate in Tokyo',
      type: 'Recognition',
      location: 'Tokyo, Japan',
      date: 'September 2026',
      icon: Plane,
      description: 'Representing Filipino engineering and startup innovation at the Musashinova Pitching Event at Musashino University.',
      content: [
        {
          title: 'International Pitching Success',
          desc: 'Winner of the Musashinova Pitching Event, showcasing technical solutions for global sustainability to an international panel of judges.',
          icon: Globe
        },
        {
          title: 'Cultural Tech Exchange',
          desc: 'Collaborating with Japanese engineers and startups to bridge the gap between Southeast Asian innovation and East Asian technical frameworks.',
          icon: Building2
        },
        {
          title: 'Diplomatic Engineering',
          desc: 'Serving as a youth ambassador for tech innovation, highlighting the Philippines\' growing footprint in the global AI and IoT landscape.',
          icon: CheckCircle2
        }
      ],
      highlights: [
        'Winner of the Musashinova Pitching Event 2026',
        'Delegate at Musashino University, Tokyo',
        'Represented Filipino tech startups to Japanese investors',
        'Focus on UN SDGs through technical innovation'
      ],
      imageId: 'featured-speaking-tokyo'
    }
  };

  const impact = impactDetails[id] || impactDetails['pg-intern'];
  const imageData = PlaceHolderImages.find(img => img.id === impact.imageId);

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <Button variant="ghost" asChild className="mb-12 text-muted-foreground hover:text-white -ml-4">
            <Link href="/#featured">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Impact
            </Link>
          </Button>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex gap-4 items-center">
                    <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {impact.type}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                      <Calendar className="w-4 h-4 text-primary" />
                      {impact.date}
                    </div>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] uppercase italic">
                    {impact.title}<span className="text-primary">.</span>
                  </h1>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold uppercase tracking-widest">{impact.location}</span>
                  </div>

                  <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                    {impact.description}
                  </p>
                </div>

                <div className="grid gap-6">
                  {impact.content.map((item: any, i: number) => (
                    <div key={i} className="p-8 glass-card rounded-3xl border-white/5 space-y-4 group hover:border-primary/20 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sticky top-32 space-y-12">
                <div className="glass-card rounded-[4rem] overflow-hidden border-primary/20 relative group">
                  <div className="relative aspect-square">
                    {imageData && (
                      <Image 
                        src={imageData.imageUrl} 
                        alt={imageData.description}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 space-y-8">
                       <div className="w-32 h-32 rounded-[2.5rem] bg-background/40 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl">
                          <impact.icon className="w-12 h-12 text-white" />
                       </div>
                       <div className="space-y-2">
                         <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Impact Summary</h2>
                         <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">2026 Professional Milestone</p>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Key Highlights
                  </h4>
                  <div className="grid gap-3">
                    {impact.highlights.map((highlight: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 font-medium text-white/80">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-xl font-black shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
                  Connect on LinkedIn
                  <Zap className="ml-2 w-5 h-5 group-hover:fill-white transition-all" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}