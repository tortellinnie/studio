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
      description: 'Joining Procter & Gamble as an IT Intern, focusing on high-impact technology systems and data strategy.',
      icon: Building2,
      imageId: 'featured-pg-intern'
    },
    {
      id: 'speaking-1',
      type: 'Recognition',
      title: 'Global Delegate (Japan)',
      location: 'Tokyo, Japan',
      date: 'Sep 2026',
      description: 'Winner of the Musashinova Pitching Event, representing Filipino innovation at Musashino University.',
      icon: Plane,
      imageId: 'featured-speaking-tokyo'
    }
  ];

  return (
    <section id="featured" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px] backdrop-blur-md">
            Highlights 2026
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tighter">CORE IMPACT.</h2>
          <p className="text-muted-foreground max-w-xl text-lg font-medium leading-relaxed">
            Strategic milestones driving my engineering philosophy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Link href={`/impact/${item.id}`} key={item.id} className="group">
                <Card className="glass-card border-white/5 overflow-hidden rounded-[2rem] h-full flex flex-col premium-gradient-border">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  </div>
                  <CardContent className="p-6 lg:p-8 space-y-5 flex-grow relative">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-primary/20 text-primary border-primary/20 backdrop-blur-xl font-black uppercase text-[8px] tracking-widest h-7 px-3">
                        <item.icon className="w-3 h-3 mr-2" />
                        {item.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground font-bold">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span className="text-[10px] uppercase tracking-tight">{item.date}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl lg:text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight tracking-tight uppercase italic">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                          <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{item.location}</span>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      "{item.description}"
                    </p>
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-primary border-b border-primary/0 group-hover:border-primary transition-all pb-1">
                        Read Story
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