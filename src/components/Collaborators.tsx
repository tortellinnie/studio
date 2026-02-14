'use client';

import { Badge } from '@/components/ui/badge';
import { Building2, Landmark, GraduationCap, Globe2, ShieldCheck, Cpu } from 'lucide-react';

export function Collaborators() {
  const sectors = [
    {
      title: 'Government',
      icon: Landmark,
      partners: [
        'DOST Philippines',
        'DICT Philippines',
        'Quezon City Government',
        'NBDB-Philippines',
        'National Library of the Philippines'
      ]
    },
    {
      title: 'Industry & Global',
      icon: Globe2,
      partners: [
        'EMC Global (Japan)',
        'Urban Youth Academy',
        'Asia Pacific Youth Exchange',
        'C-RAM Solutions',
        'The SecOps Group'
      ]
    },
    {
      title: 'Academia & Clinical',
      icon: GraduationCap,
      partners: [
        'Musashino University',
        'FEU Institute of Technology',
        'PUP - RISFI',
        'EAMC Dept. of Neurosciences',
        'DOST-PCHRD'
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
              Strategic Ecosystem
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Collaborators.</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium">
              Bridging the gap between student-led innovation and national-scale infrastructure through key institutional partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <div key={idx} className="p-8 glass-card rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <sector.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-6 tracking-tight">{sector.title}</h3>
                <div className="space-y-3">
                  {sector.partners.map((partner, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      <span className="text-sm font-bold group-hover:text-white transition-colors">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 glass-card rounded-3xl border-primary/10 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full bg-white/5 border-2 border-background flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary/60" />
                </div>
              ))}
            </div>
            <p className="text-white/60 font-medium text-sm">
              Actively coordinating with <span className="text-primary font-black">6+ underrepresented sectors</span> across the Philippine archipelago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
