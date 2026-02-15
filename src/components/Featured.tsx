'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, Calendar, Building2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Featured() {
  const highlights = [
    {
      id: 'pg-intern',
      type: 'Mission',
      title: 'Incoming P&G IT Intern',
      location: 'Manila, PH',
      date: 'March 2026',
      description: 'Joining Procter & Gamble as an IT Intern, focusing on high-impact technology systems, data strategy, and operational excellence within a global leader.',
      icon: Building2,
      imageId: 'featured-pg-intern'
    },
    {
      id: 'speaking-1',
      type: 'Recognition',
      title: 'Global Delegate (Japan)',
      location: 'Tokyo, Japan',
      date: 'Sep 2026',
      description: 'Winner of the Musashinova Pitching Event, representing Filipino innovation on a global stage at Musashino University.',
      icon: Plane,
      imageId: 'featured-speaking-tokyo'
    }
  ];

  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-5 py-2 rounded-full font-black tracking-widest uppercase text-[10px] backdrop-blur-md">
            Highlights 2026
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter">CORE IMPACT.</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            The values and milestones that drive my engineering philosophy in the 2026 tech landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {highlights.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Link href={`/impact/${item.id}`} key={item.id} className="group">
                <Card className="glass-card border-white/5 overflow-hidden rounded-[2.5rem] h-full flex flex-col premium-gradient-border">
                  <div className="relative aspect-video overflow-hidden">
                    {imageData && (
                      <Image 
                        src={imageData.imageUrl} 
                        alt={imageData.description}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  </div>
                  <CardContent className="p-10 lg:p-14 space-y-10 flex-grow relative">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-primary/20 text-primary border-primary/20 backdrop-blur-xl font-black uppercase text-[10px] tracking-widest h-9 px-5">
                        <item.icon className="w-3.5 h-3.5 mr-2" />
                        {item.type}
                      </Badge>
                      <div className="flex items-center gap-2.5 text-muted-foreground font-bold">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm uppercase tracking-tight">{item.date}</span>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="text-4xl lg:text-5xl font-black text-white group-hover:text-primary transition-colors leading-[1.1] tracking-tighter">
                          {item.title}
                        </h3>
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                          <ArrowUpRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 text-muted-foreground">
                        <MapPin className="w-4.5 h-4.5 text-primary" />
                        <span className="text-base font-bold uppercase tracking-[0.15em]">{item.location}</span>
                      </div>
                    </div>
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      "{item.description}"
                    </p>
                    <div className="pt-6">
                      <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-primary border-b-2 border-primary/0 group-hover:border-primary transition-all pb-1.5">
                        Read Full Story
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}