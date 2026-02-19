'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const nodes = [
    { label: 'Software Engineering', color: 'bg-blue-600', position: 'top-[-120px] left-[-160px]' },
    { label: 'Machine Learning', color: 'bg-red-500', position: 'top-[-120px] right-[-160px]' },
    { label: 'Leadership', color: 'bg-yellow-500', position: 'bottom-[-120px] left-[-160px]' },
    { label: 'Cloud Computing', color: 'bg-green-600', position: 'bottom-[-120px] right-[-160px]' },
  ];

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8 max-w-xl">
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-foreground">
              Building Intelligent Systems that Scale.
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Shann Karl Felipe • <span className="text-foreground">Executive Lead & Engineer</span>
            </p>
            
            <div className="flex items-center gap-4">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/80 h-14 px-8 text-base font-bold flex items-center gap-2 group" asChild>
                <Link href="/#contact">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base font-bold bg-white border-border hover:bg-gray-50 flex items-center gap-2" asChild>
                <Link href="/resume">
                  <FileText className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative h-[500px]">
            <div className="w-32 h-32 rounded-full border border-border bg-white shadow-xl flex items-center justify-center z-10 animate-float">
              <span className="text-sm font-bold text-muted-foreground">AI/ML</span>
            </div>

            {/* Diagram Nodes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1">
              {nodes.map((node, i) => (
                <div key={i} className={`absolute ${node.position} w-40 h-24 rounded-xl ${node.color} p-4 flex items-center justify-center text-center shadow-lg transform transition-transform hover:scale-105 duration-300`}>
                  <span className="text-white text-xs font-bold leading-tight">{node.label}</span>
                  {/* Connecting Line - Abstracted representation */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-px bg-border -z-10 origin-center rotate-45" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}