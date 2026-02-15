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
    <section id="featured" className="py-24 relative overflow-visible bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <Badge className="bg-white/5 text-white/40 border-white/10 px-4 py-1 rounded-full font-bold tracking-widest uppercase text-[9px]">
              Strategic Milestones
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter">Core Impact.</h2>
            <p className="text-white/50 max-w-xl text-lg font-medium leading-relaxed">
              Pioneering technical solutions that drive professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((item) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              return (
                <Link href={`/impact/${item.id}`} key={item.id} className="group">
                  <Card className="glass-card border-white/[0.05] overflow-hidden rounded-[2.5rem] h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      {imageData && (
                        <Image 
                          src={imageData.imageUrl} 
                          alt={imageData.description}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          data-ai-hint={imageData.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/90 via-[#02040a]/20 to-transparent" />
                    </div>
                    <CardContent className="p-8 space-y-6 flex-grow relative">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/5 text-white/60 border-white/10 font-bold uppercase text-[8px] tracking-widest px-3">
                          <item.icon className="w-3 h-3 mr-2" />
                          {item.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-white/40 font-bold">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="text-[9px] uppercase tracking-tight">{item.date}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight uppercase italic">
                            {item.title}
                          </h3>
                          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all shrink-0">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/40">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">{item.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed font-medium line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
