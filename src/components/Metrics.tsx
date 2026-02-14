'use client';

import { Users, Mic, Landmark, Globe } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Metrics() {
  const stats = [
    {
      label: 'Direct Beneficiaries',
      value: '300,000+',
      description: 'Impacted across community initiatives',
      icon: Users,
      color: 'text-primary'
    },
    {
      label: 'Speakership Reach',
      value: '2,000+',
      description: 'Audience at major innovation fairs',
      icon: Mic,
      color: 'text-accent'
    },
    {
      label: 'Total Capital',
      value: '₱1.2M+',
      description: 'Secured for startup initiatives',
      icon: Landmark,
      color: 'text-emerald-500'
    },
    {
      label: 'Sectors',
      value: '4',
      description: 'Focused coordination across core areas',
      icon: Globe,
      color: 'text-blue-500',
      popover: ['Education', 'Persons with Disabilities', 'Agriculture', 'The Arts']
    }
  ];

  return (
    <section className="relative z-20 py-24 bg-background">
      <div className="container mx-auto px-6">
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="h-1 w-12 bg-white/5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-primary w-2/3 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
                <div className="space-y-1">
                  {stat.popover ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="cursor-help">
                          <h3 className="text-4xl font-black text-white tracking-tighter">
                            {stat.value}
                          </h3>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-card border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl">
                        <div className="space-y-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Core Focus Areas</p>
                          <div className="grid gap-2">
                            {stat.popover.map(sector => (
                              <div key={sector} className="text-sm font-bold text-white flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {sector}
                              </div>
                            ))}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <h3 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h3>
                  )}
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{stat.label}</p>
                  <p className="text-sm text-muted-foreground font-medium leading-tight pt-2">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
