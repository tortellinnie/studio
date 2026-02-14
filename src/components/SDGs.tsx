'use client';

import { Badge } from '@/components/ui/badge';
import { Utensils, HeartPulse, BookOpen, TrendingUp, Factory, Scale, Recycle, Leaf } from 'lucide-react';

export function SDGs() {
  const goals = [
    { id: 2, title: 'Zero Hunger', icon: Utensils, color: 'bg-[#E5243B]' },
    { id: 3, title: 'Good Health and Well-being', icon: HeartPulse, color: 'bg-[#4C9F38]' },
    { id: 4, title: 'Quality Education', icon: BookOpen, color: 'bg-[#C5192D]' },
    { id: 8, title: 'Decent Work and Economic Growth', icon: TrendingUp, color: 'bg-[#A21942]' },
    { id: 9, title: 'Industry, Innovation and Infrastructure', icon: Factory, color: 'bg-[#FD6925]' },
    { id: 10, title: 'Reduced Inequalities', icon: Scale, color: 'bg-[#DD1367]' },
    { id: 12, title: 'Responsible Consumption and Production', icon: Recycle, color: 'bg-[#BF8B2E]' },
    { id: 15, title: 'Life on Land', icon: Leaf, color: 'bg-[#3F7E44]' }
  ];

  return (
    <section className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
            Social Impact Alignment
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Impact DNA.</h2>
          <p className="text-muted-foreground max-w-2xl text-lg font-medium">
            Engineering solutions aligned with the United Nations Sustainable Development Goals to ensure long-term community resilience and progress.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {goals.map((goal) => (
            <div 
              key={goal.id} 
              className="group relative aspect-square glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${goal.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <goal.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest block mb-1">Goal {goal.id}</span>
                <p className="text-xs lg:text-sm font-black text-white uppercase leading-tight group-hover:text-primary transition-colors">
                  {goal.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
