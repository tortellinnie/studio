'use client';

import { Users, Globe, Target, Zap, TrendingUp, Award } from 'lucide-react';

export function Metrics() {
  const stats = [
    {
      label: 'Direct Beneficiaries',
      value: '301,600+',
      description: 'Impacted across community initiatives',
      icon: Users,
      color: 'text-primary'
    },
    {
      label: 'Sectors Served',
      value: '6',
      description: 'Underrepresented communities empowered',
      icon: Globe,
      color: 'text-accent'
    },
    {
      label: 'DO Improvement',
      value: '40%',
      description: 'Increase in aquaculture maintenance',
      icon: Target,
      color: 'text-emerald-500'
    },
    {
      label: 'Engagement Boost',
      value: '35%',
      description: 'Library & digital platform growth',
      icon: TrendingUp,
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="relative z-20 -mt-16 mb-24">
      <div className="container mx-auto px-6">
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
                <h3 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">{stat.label}</p>
                <p className="text-sm text-muted-foreground font-medium leading-tight pt-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
