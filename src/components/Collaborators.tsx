
'use client';

import { Badge } from '@/components/ui/badge';
import { Landmark, GraduationCap, Globe2, Network } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        'National Library of the Philippines',
        'DTI Philippines',
        'SK Commonwealth',
        'NCR Alliance of DOST Scholars'
      ]
    },
    {
      title: 'Industry & Global',
      icon: Globe2,
      partners: [
        'Procter & Gamble (P&G)',
        'PLDT',
        'Smart Communications',
        'Microsoft Philippines',
        'EMC Global (Japan)',
        'C-RAM Solutions'
      ]
    },
    {
      title: 'Academia & Clinical',
      icon: GraduationCap,
      partners: [
        'FEU Institute of Technology',
        'EAMC Dept. of Neurosciences',
        'DOST-PCHRD'
      ]
    }
  ];

  const networkLogos = [
    { id: 'logo-dost', label: 'DOST' },
    { id: 'logo-dict', label: 'DICT' },
    { id: 'logo-pg', label: 'P&G' },
    { id: 'logo-microsoft', label: 'Microsoft' },
  ];

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-black tracking-widest uppercase text-[10px]">
              Strategic Ecosystem
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic">Collaborators.</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium">
              A refined network of institutional partners, global industry leaders, and academic stakeholders.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
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
          
          {/* Intertwined Web Visualization */}
          <div className="relative mt-32 py-20 px-8 glass-card rounded-[4rem] border-primary/10 overflow-hidden group">
            <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col items-center text-center space-y-8 mb-16">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 animate-pulse">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Strategic Interconnectivity.</h3>
            </div>

            <div className="relative h-[400px] w-full max-w-4xl mx-auto">
              {/* Dynamic SVG Neural Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400">
                <path d="M100,200 Q400,100 700,200" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
                <path d="M100,200 Q400,300 700,200" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" strokeDasharray="5,5" className="animate-[dash_15s_linear_infinite]" />
                <path d="M200,50 L600,350" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
                <path d="M600,50 L200,350" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
              </svg>

              {/* Logo Nodes */}
              <div className="absolute inset-0">
                <div className="absolute top-[20%] left-[10%] animate-float">
                  <LogoNode id="logo-dost" label="DOST" />
                </div>
                <div className="absolute top-[60%] left-[20%] animate-float [animation-delay:-2s]">
                  <LogoNode id="logo-dict" label="DICT" />
                </div>
                <div className="absolute top-[30%] right-[15%] animate-float [animation-delay:-4s]">
                  <LogoNode id="logo-pg" label="P&G" />
                </div>
                <div className="absolute bottom-[10%] right-[25%] animate-float [animation-delay:-6s]">
                  <LogoNode id="logo-microsoft" label="Microsoft" />
                </div>
                {/* Central Anchor Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-24 h-24 rounded-full glass-card border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.2)] animate-pulse">
                      <Landmark className="w-8 h-8 text-white" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes dash {
          to { stroke-dashoffset: 100; }
        }
      `}</style>
    </section>
  );
}

function LogoNode({ id, label }: { id: string, label: string }) {
  const imageData = PlaceHolderImages.find(img => img.id === id);
  return (
    <div className="group flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-[1.5rem] glass-card border-white/5 p-4 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 overflow-hidden shadow-2xl">
        {imageData && (
          <Image 
            src={imageData.imageUrl} 
            alt={label} 
            width={80} 
            height={80} 
            className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
            data-ai-hint={imageData.imageHint}
          />
        )}
      </div>
      <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">{label}</span>
    </div>
  );
}
