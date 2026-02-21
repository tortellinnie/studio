'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Presentation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'Batangas, PH',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    tag: 'AI',
    imageId: 'featured-prompt-challenge',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: Code and Cloud Agentic',
    date: 'Nov 14, 2025',
    location: 'Microsoft Philippines',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    tag: 'AUTOMATION',
    imageId: 'featured-github-universe',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: "G-Trends: Next-Gen Toolkit Guide",
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
    title: "Internship Employability Session",
    event: 'DEPLOY():',
    date: 'Nov 5, 2025',
    location: 'Online Session',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    tag: 'CAREER',
    imageId: 'featured-aws-reinvent',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'Open Source Licensing & Careers',
    event: 'Hacktoberfest Philippines 2025',
    date: 'Oct 30, 2025',
    location: 'NU - Las Piñas',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    tag: 'AUTOMATION',
    imageId: 'featured-github-universe',
    slidesUrl: '#'
  },
  {
    type: 'Workshop',
    title: "Let's Git Ready: Career Mastery",
    event: "Git Ready Series",
    date: 'Oct 24, 2025',
    location: 'Online Workshop',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    tag: 'CAREER',
    imageId: 'featured-aws-reinvent',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'TPU Research Cloud Insights',
    event: 'SOFTCON 2025',
    date: 'Oct 17, 2025',
    location: 'Remote Event',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    tag: 'AI',
    imageId: 'featured-tpu-research',
    slidesUrl: '#'
  },
  {
    type: 'Talk',
    title: 'Boost ML with Research Cloud',
    event: 'Devfest 2025',
    date: 'Oct 13, 2025',
    location: 'LaunchGarage, QC',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    tag: 'AI',
    imageId: 'featured-tpu-research',
    slidesUrl: '#'
  }
];

export function Speaking() {
  const [filterType, setFilterType] = React.useState('All');
  const [filterTopic, setFilterTopic] = React.useState('All');

  const filteredData = speakingData.filter((item) => {
    const typeMatch = filterType === 'All' || item.type === filterType;
    const topicMatch = filterTopic === 'All' || item.tag === filterTopic;
    return typeMatch && topicMatch;
  });

  const topics = ['All', 'AI', 'IOT', 'CLOUD', 'AUTOMATION', 'CAREER'];
  const types = ['All', 'Talk', 'Workshop'];

  return (
    <section id="speaking" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Speaking
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Sharing technical insights and leadership frameworks at global conferences.
            </p>
          </div>
          
          <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 gap-2 group shadow-lg shadow-blue-600/10" asChild>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0lY_shann_karl_felipe" target="_blank" rel="noopener noreferrer">
              Let's Connect! <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mr-2">Type</span>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium border transition-all",
                  filterType === t 
                    ? "bg-slate-900 border-slate-900 text-white" 
                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-300"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mr-2">Topic</span>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setFilterTopic(topic)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all",
                  filterTopic === topic 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "bg-white border-slate-100 text-slate-500 hover:border-blue-600/20"
                )}
              >
                {topic === 'All' ? 'All Topics' : topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-6 px-6 pb-12">
            {filteredData.length > 0 ? (
              filteredData.map((talk, idx) => {
                const imageData = PlaceHolderImages.find(img => img.id === talk.imageId);
                
                return (
                  <div 
                    key={idx} 
                    className="w-[320px] shrink-0 bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <div className="relative aspect-video w-full overflow-hidden shrink-0">
                      {imageData && (
                        <Image 
                          src={imageData.imageUrl} 
                          alt={talk.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className={cn("px-4 py-1 border-0 shadow-sm text-[10px] font-semibold", talk.color)}>
                          {talk.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 space-y-6 flex-1 flex flex-col whitespace-normal">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-1 h-1 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                           <span className="text-[10px] font-bold text-blue-600 uppercase">{talk.tag}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight tracking-tight">
                          {talk.title}
                        </h3>
                        <p className="text-slate-500 text-xs font-medium leading-snug">
                          {talk.event}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 mt-auto">
                        <div className="flex items-center gap-2.5 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-medium">{talk.date}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-medium truncate">{talk.location}</span>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-50">
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
              })
            ) : (
              <div className="w-full flex justify-center py-20 px-6">
                <p className="text-slate-400 font-medium italic">No speaking events match the selected filters.</p>
              </div>
            )}
          </div>
          <ScrollBar orientation="horizontal" className="h-2 bg-slate-100/50" />
        </ScrollArea>
      </div>

      <div className="container mx-auto px-6 max-w-7xl mt-8">
        <div className="p-12 bg-slate-50/50 rounded-[3rem] border border-slate-100 flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-slate-500 text-sm font-medium">Interested in having me share technical insights at your next event?</p>
          <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 h-12 px-10 text-sm font-semibold shadow-lg shadow-blue-600/20" asChild>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0lY_shann_karl_felipe" target="_blank" rel="noopener noreferrer">
              Let's Book a Session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}