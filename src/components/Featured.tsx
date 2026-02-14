
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mic2, Plane, Calendar } from 'lucide-react';

export function Featured() {
  const highlights = [
    {
      id: 'travel-1',
      type: 'Travel',
      title: 'Alpine Expedition',
      location: 'Swiss Alps, Switzerland',
      date: 'Dec 2024',
      description: 'Exploring distributed systems architecture while trekking through the high-altitude terrains of Europe.',
      imageId: 'featured-travel-1',
      icon: Plane
    },
    {
      id: 'speaking-1',
      type: 'Speakership',
      title: 'DevConf Global 2024',
      location: 'Berlin, Germany',
      date: 'Oct 2024',
      description: 'Presented a keynote on "Scaling AI Infrastructure for Global Reach" to an audience of 1,000+ developers.',
      imageId: 'featured-speaking-1',
      icon: Mic2
    }
  ];

  return (
    <section id="featured" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Life Beyond Code
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-black text-white">FEATURED HIGHLIGHTS</h2>
          <p className="text-muted-foreground max-w-2xl text-xl font-medium leading-relaxed">
            A curated look into my travels, global speaking engagements, and the inspirations that fuel my engineering mindset.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {highlights.map((item) => {
            const img = PlaceHolderImages.find(p => p.id === item.imageId);
            return (
              <Card key={item.id} className="glass-card border-white/5 overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary/20 text-primary border-primary/20 backdrop-blur-md font-black uppercase text-[10px] tracking-widest h-8 px-4">
                      <item.icon className="w-3 h-3 mr-2" />
                      {item.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-10 space-y-6 relative">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 items-center text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
