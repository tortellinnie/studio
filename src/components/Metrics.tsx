'use client';

import { Users, Mic, Landmark, Info } from 'lucide-react';
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';

export function Metrics() {
  const communities = [
    { name: "AGAPE PH0209 Youth Network", detail: "600+ Direct Beneficiaries" },
    { name: "SK Commonwealth Council", detail: "10,000+ Impacted Youth" },
    { name: "DOST-NCR Alliance (NADS)", detail: "Regional Scholar Community" },
    { name: "FEU Institute of Technology", detail: "Student Body & Library Committee" },
    { name: "QCYDO Scholarship Network", detail: "City-wide Economic Support" },
    { name: "NARA (Reading Advocates)", detail: "National Literacy Initiative" },
    { name: "Musashinova Exchange", detail: "Japan-PH Tech Collaboration" },
    { name: "C-RAM & NERDS 2.0 Projects", detail: "Tech-driven Community Solutions" }
  ];

  const stats = [
    {
      id: 'beneficiaries',
      label: 'Direct Beneficiaries',
      value: '300,000+',
      description: 'Impacted across community initiatives',
      icon: Users,
      color: 'text-primary',
      isInteractive: true
    },
    {
      id: 'speakership',
      label: 'Speakership Reach',
      value: '2,000+',
      description: 'Audience at major innovation fairs',
      icon: Mic,
      color: 'text-accent',
      isInteractive: false
    },
    {
      id: 'capital',
      label: 'Total Capital',
      value: '₱1.2M+',
      description: 'Secured for startup initiatives',
      icon: Landmark,
      color: 'text-emerald-500',
      isInteractive: false
    }
  ];

  return (
    <section className="relative z-20 py-16 bg-background">
      <div className="container mx-auto px-6">
        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i}>
                {stat.isInteractive ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full text-left glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 group relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[8px] font-black text-primary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                               Click to view
                             </div>
                             <div className="h-1 w-12 bg-white/5 rounded-full mt-2 overflow-hidden">
                               <div className="h-full bg-primary w-2/3 group-hover:w-full transition-all duration-700" />
                             </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h3>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary">{stat.label}</p>
                          <p className="text-sm text-muted-foreground font-medium leading-tight pt-2">
                            {stat.description}
                          </p>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="glass-card border-white/10 text-white max-w-lg rounded-[2.5rem] p-10">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-3xl font-black uppercase italic tracking-tighter">Impacted Communities<span className="text-primary">.</span></DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-3">
                        {communities.map((comm, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                            <span className="font-bold text-white/90">{comm.name}</span>
                            <Badge variant="outline" className="border-primary/30 text-primary text-[9px] font-black uppercase">
                              {comm.detail}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 group">
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
                )}
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
