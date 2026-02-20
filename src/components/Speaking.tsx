'use client';

import { Calendar, MapPin, Monitor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'bg-blue-500'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Code and Cloud Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'bg-red-500'
  },
  {
    type: 'Talk',
    title: "G-Trends: A Developer's Guide to Google's Next-Gen Toolkit",
    event: 'InSession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'bg-amber-500'
  },
  {
    type: 'Talk',
    title: 'Internship Employability Session: Resume, LinkedIn, GitHub, and...',
    event: 'DEPLOY():',
    date: 'Nov 5, 2025',
    location: 'Online',
    color: 'bg-green-500'
  },
  {
    type: 'Talk',
    title: 'Open Source Series: Licensing, Version Control, Contributing, and...',
    event: 'Hacktoberfest Philippines 2025',
    date: 'October 30, 2025',
    location: 'National University - Las Piñas',
    color: 'bg-blue-500'
  },
  {
    type: 'Workshop',
    title: "Let's Git Ready: From Commit to Career",
    event: "Let's Git Ready",
    date: 'October 24, 2025',
    location: 'Online',
    color: 'bg-red-500'
  },
  {
    type: 'Talk',
    title: "Supercharge your ML Research with Google's TPU Research Cloud",
    event: 'SOFTCON 2025',
    date: 'October 17, 2025',
    location: 'Online',
    color: 'bg-amber-500'
  },
  {
    type: 'Talk',
    title: 'Boost ML Research with TPU Research Cloud',
    event: 'Devfest 2025',
    date: 'October 13, 2025',
    location: 'LaunchGarage, Quezon City',
    color: 'bg-green-500'
  }
];

export function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-row justify-between items-end mb-12 border-b border-gray-100 pb-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-medium text-foreground tracking-tighter uppercase italic">
              SPEAKING
            </h2>
            <p className="text-muted-foreground text-sm font-medium">
              Sharing insights at conferences and events across the technology landscape.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 text-[10px] font-black uppercase tracking-widest px-6 h-10 gap-2">
            All Speakerships <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakingData.map((talk, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-700"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-black/[0.05] shadow-sm">
                  <div className={cn("w-1 h-1 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]", talk.color)} />
                  <span className="text-[9px] font-black uppercase tracking-[0.1em] text-foreground/60">{talk.type}</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground uppercase italic tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                    {talk.title}
                  </h3>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-widest leading-snug">
                    {talk.event}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-primary/40" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary/40" />
                    <span className="text-[10px] font-black uppercase tracking-widest line-clamp-1">{talk.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-50">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors group/btn">
                  View Slides 
                  <Monitor className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
