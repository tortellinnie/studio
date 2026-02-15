
'use client';

import { Badge } from '@/components/ui/badge';
import { Utensils, HeartPulse, BookOpen, TrendingUp, Factory, Scale, Recycle, Leaf } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SDGs() {
  const goals = [
    { id: 2, title: 'Zero Hunger', icon: Utensils, color: 'bg-[#E5243B]', desc: 'End hunger, achieve food security and improved nutrition.' },
    { id: 3, title: 'Good Health', icon: HeartPulse, color: 'bg-[#4C9F38]', desc: 'Ensure healthy lives and promote well-being for all at all ages.' },
    { id: 4, title: 'Quality Education', icon: BookOpen, color: 'bg-[#C5192D]', desc: 'Ensure inclusive and equitable quality education.' },
    { id: 8, title: 'Decent Work', icon: TrendingUp, color: 'bg-[#A21942]', desc: 'Promote sustained, inclusive and sustainable economic growth.' },
    { id: 9, title: 'Innovation', icon: Factory, color: 'bg-[#FD6925]', desc: 'Build resilient infrastructure, promote inclusive and sustainable industrialization.' },
    { id: 10, title: 'Reduced Inequalities', icon: Scale, color: 'bg-[#DD1367]', desc: 'Reduce inequality within and among countries.' },
    { id: 12, title: 'Responsible Production', icon: Recycle, color: 'bg-[#BF8B2E]', desc: 'Ensure sustainable consumption and production patterns.' },
    { id: 15, title: 'Life on Land', icon: Leaf, color: 'bg-[#3F7E44]', desc: 'Protect, restore and promote sustainable use of terrestrial ecosystems.' }
  ];

  return (
    <section id="sdgs" className="py-16 relative bg-transparent overflow-visible border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col items-center text-center space-y-2">
            <Badge className="bg-primary/5 text-primary/40 border-primary/10 px-3 py-1 rounded-full font-black tracking-widest uppercase text-[9px]">
              Impact DNA
            </Badge>
            <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.3em]">United Nations SDG Alignment</h2>
          </div>

          <TooltipProvider delayDuration={0}>
            <div className="flex flex-wrap gap-4 justify-center items-center w-full">
              {goals.map((goal) => (
                <Tooltip key={goal.id}>
                  <TooltipTrigger asChild>
                    <a 
                      href={`https://sdgs.un.org/goals/goal${goal.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-12 h-12 ${goal.color} rounded-lg shadow-xl transition-all duration-500 hover:scale-[1.8] hover:z-50 cursor-pointer flex items-center justify-center overflow-hidden`}
                    >
                      <goal.icon className="w-6 h-6 text-white transition-all group-hover:scale-110" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="premium-glass border-white/10 p-5 max-w-[240px] rounded-2xl backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    sideOffset={20}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${goal.color} rounded-md flex items-center justify-center shrink-0`}>
                          <goal.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Goal {goal.id}</p>
                          <p className="text-sm font-black text-white uppercase italic tracking-tighter leading-none">{goal.title}</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-white/60 font-medium leading-relaxed">
                        {goal.desc}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
