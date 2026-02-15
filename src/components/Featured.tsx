'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, Calendar, Building2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Featured() {
  const highlights = [
    {
      id: 'pg-intern',
      type: 'Mission',
      title: 'Incoming P&G IT Intern',
      location: 'Manila, PH',
      date: 'March 2026',
      description: 'Joining Procter & Gamble as an IT Intern, focusing on high-impact technology systems, data strategy, and operational excellence within a global leader.',
      icon: Building2
    },
    {
      id: 'speaking-1',
      type: 'Recognition',
      title: 'Global Delegate (Japan)',
      location: 'Tokyo, Japan',
      date: 'Sep 2026',
      description: 'Winner of the Musashinova Pitching Event, representing Filipino innovation on a global stage at Musashino University.',
      icon: Plane
    }
  ];

  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Highlights 2026
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic">CORE IMPACT.</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            The values and milestones that drive my engineering philosophy in the 2026 tech landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {highlights.map((item) => (
            <Link href={`/impact/${item.id}`} key={item.id} className="group">
              <Card className="glass-card border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 p-12 h-full">
                <CardContent className="p-0 space-y-8">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md font-black uppercase text-[10px] tracking-widest h-8 px-4">
                      <item.icon className="w-3 h-3 mr-2" />
                      {item.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-4xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item.location}</span>
                    </div>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed italic font-medium">
                    "{item.description}"
                  </p>
                  <div className="pt-4">
                    <span className="text-xs font-black uppercase tracking-widest text-primary border-b-2 border-primary/0 group-hover:border-primary transition-all pb-1">
                      Read Full Story
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
