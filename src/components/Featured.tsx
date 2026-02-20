'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export function Featured() {
  const topFeatured = [
    {
      id: 'prompt-challenge',
      tag: 'Software Engineering',
      title: 'Prompt Challenge',
      desc: 'Winning the National AI Prompt Design Challenge.',
      imageId: 'featured-prompt-challenge',
      action: 'Read story',
      width: 'lg:col-span-3'
    },
    {
      id: 'tpu-research',
      tag: 'Machine Learning',
      title: 'TPU Research Cloud',
      desc: 'Supercharging ML Research with Google Infrastructure.',
      imageId: 'featured-tpu-research',
      action: 'Explore now',
      width: 'lg:col-span-6',
      isHero: true
    },
    {
      id: 'aws-reinvent',
      tag: 'Leadership',
      title: 'AWS re:Invent',
      desc: 'The All Builders Welcome Grant Experience.',
      imageId: 'featured-aws-reinvent',
      action: 'View recap',
      width: 'lg:col-span-3'
    }
  ];

  const bottomFeatured = [
    { id: 'github-universe', title: 'GitHub Universe', tag: 'Cloud', imageId: 'featured-github-universe' },
    { id: 'proxygen', title: 'Proxygen', tag: 'IoT', imageId: 'project-proxygen' },
    { id: 'gabaydiwa', title: 'GabayDiwa', tag: 'Health', imageId: 'project-gabaydiwa' },
    { id: 'birdseye', title: 'Birdseye', tag: 'Vision', imageId: 'project-birdseye' },
    { id: 'salayliwa', title: 'Salayliwa', tag: 'EduTech', imageId: 'project-salayliwa' }
  ];

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Featured Impact.</h2>
        </div>

        {/* Top Tier: 1:2:1 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          {topFeatured.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <div 
                key={item.id} 
                className={cn(
                  "relative group overflow-hidden rounded-2xl aspect-[3/4] lg:aspect-auto lg:h-[600px] bg-gray-100",
                  item.width
                )}
              >
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    {item.isHero && <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] text-white">★</span>}
                    <p className="text-[11px] font-bold text-white/60 uppercase tracking-[0.2em]">{item.tag}</p>
                  </div>
                  <h3 className={cn(
                    "font-bold text-white leading-tight mb-2",
                    item.isHero ? "text-4xl md:text-6xl uppercase tracking-tighter" : "text-2xl"
                  )}>
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base font-medium max-w-md mb-6 line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <Link href={`/impact/${item.id}`}>
                    <button className="h-10 px-6 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
                      {item.action}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tier: 5 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bottomFeatured.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <div 
                key={item.id} 
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100"
              >
                {imageData && (
                  <Image
                    src={imageData.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={imageData.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">{item.tag}</p>
                    <h4 className="text-lg font-bold text-white leading-tight">{item.title}</h4>
                  </div>
                </div>

                {/* Always visible label on mobile/small screens or as a baseline */}
                <div className="absolute bottom-4 left-6 group-hover:opacity-0 transition-opacity">
                   <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">{item.tag}</p>
                   <p className="text-sm font-bold text-white">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
