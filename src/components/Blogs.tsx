'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const blogItems = [
  {
    id: 'edge-ai-agri',
    tag: 'AGRICULTURE',
    title: 'THE FUTURE OF EDGE AI IN AGRICULTURE',
    excerpt: 'Exploring how real-time computer vision on edge devices is transforming modern farm management.',
    date: 'OCT 2025',
    readTime: '5 MIN READ',
    imageId: 'featured-prompt-challenge',
    color: 'bg-emerald-500'
  },
  {
    id: 'video-automation-gemini',
    tag: 'AUTOMATION',
    title: 'AUTONOMOUS VIDEO PRODUCTION WITH GEMINI',
    excerpt: 'A deep dive into building an end-to-end automation pipeline using n8n, Docker, and Gemini 2.5 Flash.',
    date: 'SEP 2025',
    readTime: '8 MIN READ',
    imageId: 'featured-github-universe',
    color: 'bg-blue-500'
  },
  {
    id: 'tpu-scaling',
    tag: 'MACHINE LEARNING',
    title: 'SCALING NEURAL NETWORKS ON CLOUD TPUS',
    excerpt: 'Technical insights from my research experience with the Google TPU Research Cloud (TRC) program.',
    date: 'AUG 2025',
    readTime: '12 MIN READ',
    imageId: 'featured-tpu-research',
    color: 'bg-purple-500'
  },
  {
    id: 'distributed-iot',
    tag: 'SYSTEMS',
    title: 'DISTRIBUTED SYSTEMS FOR IOT EDGE NODES',
    excerpt: 'Managing state and reliability in heterogeneous IoT environments using lightweight consensus protocols.',
    date: 'JUL 2025',
    readTime: '10 MIN READ',
    imageId: 'featured-aws-reinvent',
    color: 'bg-orange-500'
  },
  {
    id: 'birdseye-deep-dive',
    tag: 'COMPUTER VISION',
    title: 'BIRDSEYE: COMPUTER VISION IN POULTRY',
    excerpt: 'A technical deep dive into the Birdseye architecture, from sensor fusion to real-time inference on the edge.',
    date: 'JUN 2025',
    readTime: '15 MIN READ',
    imageId: 'project-birdseye',
    color: 'bg-cyan-500'
  },
  {
    id: 'prompt-eng-future',
    tag: 'AI ENGINEERING',
    title: 'THE FUTURE OF PROMPT ENGINEERING',
    excerpt: 'How LLMs are evolving to handle complex, multi-modal reasonings through advanced prompt orchestration.',
    date: 'MAY 2025',
    readTime: '7 MIN READ',
    imageId: 'featured-prompt-challenge',
    color: 'bg-rose-500'
  }
];

export function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }} />

      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-10">
        <div className="space-y-2 border-b border-gray-100 pb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter uppercase italic">
            INSIGHTS
          </h2>
          <p className="text-muted-foreground text-sm font-medium">
            Thoughts on technology, engineering, and innovation.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-6 px-6 pb-8">
            {blogItems.map((item) => {
              const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
              
              return (
                <Link 
                  key={item.id} 
                  href={`/blogs/${item.id}`} 
                  className="w-[320px] md:w-[400px] shrink-0 block group"
                >
                  <div className="relative overflow-hidden rounded-[3rem] aspect-[2/3] bg-gray-100 transition-all duration-700 shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:shadow-black/10">
                    {imageData && (
                      <Image
                        src={imageData.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={item.tag}
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    
                    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-white/60" />
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">{item.readTime}</span>
                    </div>

                    <div className="absolute inset-0 p-10 flex flex-col justify-end whitespace-normal">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                           <div className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]", item.color)} />
                           <p className="text-[9px] font-black text-white uppercase tracking-[0.2em]">{item.tag}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-white leading-[1.1] uppercase italic tracking-tighter group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-xs font-medium line-clamp-2 uppercase tracking-wide">
                            {item.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/40">
                            <Calendar className="w-3 h-3" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{item.date}</span>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-2 bg-slate-100/50" />
        </ScrollArea>
      </div>
    </section>
  );
}
