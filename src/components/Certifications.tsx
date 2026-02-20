'use client';

import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Server, Terminal, Code2, BrainCircuit, ShieldAlert, Cpu, Sparkles, Layout } from 'lucide-react';

export function Certifications() {
  const certifications = [
    { title: "Learning MATLAB", org: "LinkedIn", year: "2025", icon: Code },
    { title: "Android with Kotlin", org: "LinkedIn", year: "2025", icon: Smartphone },
    { title: "Node.js Quality", org: "LinkedIn", year: "2025", icon: Server },
    { title: "Linux Essentials", org: "Cisco", year: "2025", icon: Terminal },
    { title: "Python Specialist", org: "Certiport", year: "2025", icon: Code2 },
    { title: "OCI AI Foundations", org: "Oracle", year: "2025", icon: BrainCircuit },
    { title: "Network Security", org: "SecOps", year: "2025", icon: ShieldAlert },
    { title: "MS Bootcamp", org: "Microsoft", year: "2025", icon: Cpu },
    { title: "AI Associate", org: "Salesforce", year: "2025", icon: Sparkles },
    { title: "GenAI Fundamentals", org: "Databricks", year: "2025", icon: Layout }
  ];

  return (
    <section id="certifications" className="py-24 bg-transparent border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <Badge variant="outline" className="border-primary text-primary font-black uppercase tracking-[0.2em] mb-4">Credentials</Badge>
          <h2 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">Certifications</h2>
          <p className="text-muted-foreground text-sm font-medium">Industry-standard validations of technical expertise.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="group p-6 bg-white rounded-3xl border border-gray-100 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-200 mb-4 group-hover:bg-primary transition-all duration-500">
                <cert.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xs font-black text-foreground uppercase tracking-tight leading-tight mb-1">{cert.title}</h3>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{cert.org}</p>
              <p className="text-[8px] text-primary/40 font-black mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
