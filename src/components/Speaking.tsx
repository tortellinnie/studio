'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Presentation,
  MessageSquarePlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    tag: 'AI',
    imageId: 'featured-prompt-challenge',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Code and Cloud Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    tag: 'AUTOMATION',
    imageId: 'featured-github-universe',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: "G-Trends: A Developer's Guide to Google's Next-Gen Toolkit",
    event: 'InSession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    tag: 'CLOUD',
    imageId: 'featured-tpu-research',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: "Internship Employability Session: Resume, LinkedIn, GitHub, and more",
    event: 'DEPLOY():',
    date: 'Nov 5, 2025',
    location: 'Online',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    tag: 'CAREER',
    imageId: 'featured-aws-reinvent',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'Open Source Series: Licensing, Version Control, Contributing, and Careers',
    event: 'Hacktoberfest Philippines 2025',
    date: 'October 30, 2025',
    location: 'National University - Las Piñas',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    tag: 'AUTOMATION',
    imageId: 'featured-github-universe',
    slidesUrl: '#'
  },
  {
    type: 'Workshop',
    title: "Let's Git Ready: From Commit to Career",
    event: "Let's Git Ready",
    date: 'October 24, 2025',
    location: 'Online',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    tag: 'CAREER',
    imageId: 'featured-aws-reinvent',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'Supercharge your ML Research with Google\'s TPU Research Cloud',
    event: 'SOFTCON 2025',
    date: 'October 17, 2025',
    location: 'Online',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    tag: 'AI',
    imageId: 'featured-tpu-research',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'Boost ML Research with TPU Research Cloud',
    event: 'Devfest 2025',
    date: 'October 13, 2025',
    location: 'LaunchGarage, Quezon City',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    tag: 'AI',
    imageId: 'featured-tpu-research',
    slidesUrl: '#'
  }
];

export function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Speaking
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Sharing insights at conferences and events
            </p>
          </div>
          
          <Button variant="outline" className="rounded-full border-slate-200 hover:bg-slate-50 gap-2 h-11 px-6 group" asChild>
            <Link href="/#speaking">
              All Speakerships <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakingData.map((talk, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === talk.imageId);
            
            return (
              <div 
                key={idx} 
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full overflow-hidden shrink-0">
                  {imageData && (
                    <Image 
                      src={imageData.imageUrl} 
                      alt={talk.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint="speaker stage"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-8 space-y-5 flex-1 flex flex-col">
                  <div className="space-y-4">
                    <Badge variant="outline" className={cn("px-4 py-1 border-0 shadow-none text-[10px] font-semibold", talk.color)}>
                      {talk.type}
                    </Badge>
                    
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {talk.title}
                    </h3>
                    
                    <p className="text-blue-600 text-xs font-medium leading-snug">
                      {talk.event}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2.5 text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-medium">{talk.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-500">
                      <MapPin className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-medium line-clamp-1">{talk.location}</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <a 
                      href={talk.slidesUrl} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      View Slides <Presentation className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-12 bg-slate-50/50 rounded-[3rem] border border-slate-100 flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-slate-500 text-sm font-medium">Interested in having me speak at your event?</p>
          <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 h-12 px-10 text-sm font-semibold shadow-lg shadow-blue-600/20" asChild>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0lY_shann_karl_felipe" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
