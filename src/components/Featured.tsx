'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, Calendar, Quote } from 'lucide-react';

export function Featured() {
  const highlights = [
    {
      id: 'vision-1',
      type: 'Mission',
      title: 'Socially Impactful Innovation',
      location: 'Manila, PH',
      date: '2026',
      description: 'Passionate about leveraging AI, data systems, and user-centered design to develop technology that is both innovative and socially impactful for the Filipino community.',
      icon: Quote
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
          <h2 className="text-5xl lg:text-7xl font-black text-white">CORE IMPACT</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            The values and milestones that drive my engineering philosophy in the 2026 tech landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {highlights.map((item) => (
            <Card key={item.id} className="glass-card border-white/5 overflow-hidden group p-12">
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
                  <h3 className="text-4xl font-black text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed italic">
                  "{item.description}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
