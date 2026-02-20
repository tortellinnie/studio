'use client';

import { Calendar, MapPin, Monitor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const speakingData = [
  {
    type: 'Workshop',
    title: 'Product Building with AI Workshop',
    event: 'Philippine Innovation Conference 2025',
    date: 'Nov 21, 2025',
    location: 'University of Batangas',
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    type: 'Talk',
    title: "GitHub Universe'25 Recap: AI Edition",
    event: 'az:Repo: The Code and Cloud Agentic Workshop',
    date: 'Nov 14, 2025',
    location: 'Microsoft Office Philippines',
    color: 'bg-red-50 text-red-600 border-red-100'
  },
  {
    type: 'Talk',
    title: "G-Trends: A Developer's Guide to Google's Next-Gen Toolkit",
    event: 'InSession 2025',
    date: 'Nov 6, 2025',
    location: 'TUP - Manila',
    color: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    type: 'Talk',
    title: 'Internship Employability Session: Resume, LinkedIn, GitHub, and...',
    event: 'DEPLOY():',
    date: 'Nov 5, 2025',
    location: 'Online',
    color: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    type: 'Talk',
    title: 'Open Source Series: Licensing, Version Control, Contributing, and...',
    event: 'Hacktoberfest Philippines 2025',
    date: 'October 30, 2025',
    location: 'National University - Las Piñas',
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    type: 'Workshop',
    title: "Let's Git Ready: From Commit to Career",
    event: "Let's Git Ready",
    date: 'October 24, 2025',
    location: 'Online',
    color: 'bg-red-50 text-red-600 border-red-100'
  },
  {
    type: 'Talk',
    title: "Supercharge your ML Research with Google's TPU Research Cloud",
    event: 'SOFTCON 2025',
    date: 'October 17, 2025',
    location: 'Online',
    color: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    type: 'Talk',
    title: 'Boost ML Research with TPU Research Cloud',
    event: 'Devfest 2025',
    date: 'October 13, 2025',
    location: 'LaunchGarage, Quezon City',
    color: 'bg-green-50 text-green-600 border-green-100'
  }
];

export function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">Speaking</h2>
            <p className="text-muted-foreground text-sm font-medium">Sharing insights at conferences and events</p>
          </div>
          <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 text-[10px] font-black uppercase tracking-widest px-6 h-10 gap-2">
            All Speakerships <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {speakingData.map((talk, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 group">
              <div className="space-y-6">
                <Badge className={`${talk.color} border font-black uppercase tracking-widest text-[9px] px-3 py-1 rounded-full shadow-none`}>
                  {talk.type}
                </Badge>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {talk.title}
                  </h3>
                  <p className="text-primary text-xs font-bold leading-snug">
                    {talk.event}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">{talk.location}</span>
                  </div>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                View Slides <Monitor className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-12 text-center border border-gray-100">
          <p className="text-muted-foreground font-medium mb-8">Interested in having me speak at your event?</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs h-12 px-10 rounded-full shadow-lg shadow-primary/20">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
