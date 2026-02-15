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
    <section id="sdgs" className="py-12 relative bg-transparent overflow-visible border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="space-y-2">
             <Badge className="bg-primary/5 text-primary/40 border-primary/10 px-2 py-0.5 rounded-full font-black tracking-widest uppercase text-[8px]">
              Impact DNA
            </Badge>
            <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">SDG Alignment</h2>
          </div>

          <TooltipProvider delayDuration={0}>
            <div className="flex flex-wrap gap-3 justify-center">
              {goals.map((goal) => (
                <Tooltip key={goal.id}>
                  <TooltipTrigger asChild>
                    <a 
                      href={`https://sdgs.un.org/goals/goal${goal.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-6 h-6 ${goal.color} rounded shadow-lg transition-all duration-300 hover:scale-[2] hover:z-50 cursor-pointer`}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="premium-glass border-white/10 p-4 max-w-[200px] rounded-xl backdrop-blur-3xl">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <goal.icon className="w-3 h-3 text-white" />
                        <p className="text-[10px] font-black text-white uppercase tracking-tighter">Goal {goal.id}: {goal.title}</p>
                      </div>
                      <p className="text-[9px] text-white/60 font-medium leading-relaxed">
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
