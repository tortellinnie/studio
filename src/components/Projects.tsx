'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowUpRight,
  Utensils,
  HeartPulse,
  BookOpen,
  TrendingUp,
  Factory,
  Recycle,
  Leaf,
  Github,
  ExternalLink
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sdgData: Record<number, { title: string, desc: string, icon: any, color: string }> = {
  2: { 
    title: 'Zero Hunger', 
    desc: 'Achieve food security and improved nutrition.',
    icon: Utensils, 
    color: 'bg-[#E5243B]' 
  },
  3: { 
    title: 'Good Health', 
    desc: 'Ensure healthy lives and promote well-being.',
    icon: HeartPulse, 
    color: 'bg-[#4C9F38]' 
  },
  4: { 
    title: 'Quality Education', 
    desc: 'Ensure inclusive and equitable quality education.',
    icon: BookOpen, 
    color: 'bg-[#C5192D]' 
  },
  8: { 
    title: 'Decent Work', 
    desc: 'Promote inclusive and sustainable economic growth.',
    icon: TrendingUp, 
    color: 'bg-[#A21942]' 
  },
  9: { 
    title: 'Innovation', 
    desc: 'Build resilient infrastructure and foster innovation.',
    icon: Factory, 
    color: 'bg-[#FD6925]' 
  },
  12: { 
    title: 'Responsible Production', 
    desc: 'Ensure sustainable consumption and production patterns.',
    icon: Recycle, 
    color: 'bg-[#BF8B2E]' 
  },
  15: { 
    title: 'Life on Land', 
    desc: 'Protect, restore and promote sustainable use of terrestrial ecosystems.',
    icon: Leaf, 
    color: 'bg-[#3F7E44]' 
  },
};

export function Projects() {
  const projects = [
    {
      id: 'birdseye',
      title: 'Birdseye',
      description: 'Computer vision on edge devices detecting wet zones in litter to improve bird welfare.',
      tags: ['AI', 'Cloud & IoT'],
      sdgs: [2, 9, 12, 15],
      imageId: 'project-birdseye',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'video-automation',
      title: 'Video Automation Engine',
      description: 'Fully autonomous content generation pipeline using Docker, n8n, and Gemini AI.',
      tags: ['Automation', 'AI'],
      sdgs: [9],
      imageId: 'project-video-automation',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'gabaydiwa',
      title: 'GabayDiwa',
      description: 'Healthcare system empowering caregivers with cognitive trend maps and dementia tracking.',
      tags: ['AI', 'Software Solutions'],
      sdgs: [3],
      imageId: 'project-gabaydiwa',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'salayliwa',
      title: 'Salayliwa',
      description: 'A personalized adaptive mobile reading app focused on the national literacy crisis.',
      tags: ['Software Solutions', 'AI'],
      sdgs: [4],
      imageId: 'project-salayliwa',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'proxygen',
      title: 'Proxygen',
      description: 'Dissolved oxygen management for aquaculture preventing mass fish kills through fuzzy logic.',
      tags: ['Cloud & IoT', 'AI'],
      sdgs: [2, 9, 12, 15],
      imageId: 'project-proxygen',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter uppercase">
              SELECTED PROJECTS
            </h2>
            <p className="text-slate-500 text-xs font-medium max-w-xl uppercase tracking-widest">
              Architecting solutions at the intersection of AI, hardware, and social impact. 
            </p>
          </div>
        </div>

        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const imageData = PlaceHolderImages.find(img => img.id === project.imageId);
              return (
                <div 
                  key={project.id} 
                  className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-1.5"
                >
                  <Link href={`/projects/${project.id}`} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />
                  
                  <div className="relative aspect-video overflow-hidden bg-slate-50 z-10 pointer-events-none group-hover:pointer-events-auto">
                    {imageData && (
                      <Image 
                        src={imageData.imageUrl} 
                        alt={imageData.description}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="absolute top-3 left-3 flex gap-1.5 pointer-events-auto">
                      {project.sdgs.map((id) => {
                        const sdg = sdgData[id];
                        const SdgIcon = sdg.icon;
                        return (
                          <Tooltip key={id}>
                            <TooltipTrigger asChild>
                              <a 
                                href={`https://sdgs.un.org/goals/goal${id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-6 h-6 rounded-md ${sdg.color} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-150 hover:z-50`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <SdgIcon className="w-3 h-3 text-white" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent className="p-5 rounded-[2rem] max-w-[280px] bg-white shadow-3xl border-slate-100 z-[100] backdrop-blur-xl">
                              <div className="space-y-2">
                                <p className="text-[10px] font-medium uppercase text-slate-400 tracking-[0.2em]">Goal {id}</p>
                                <p className="text-sm font-medium text-foreground leading-tight uppercase tracking-tighter">{sdg.title}</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed pt-1">{sdg.desc}</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-20 pointer-events-none">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <div key={tag} className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100">
                          <div className="w-1 h-1 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                          <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-slate-500">{tag}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium text-foreground uppercase tracking-tighter leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed line-clamp-2 mb-6">
                      {project.description}
                    </p>

                    <div className="flex gap-2 mt-auto pointer-events-auto">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-[9px] font-medium uppercase tracking-widest px-4 border-slate-100 hover:bg-slate-50 transition-colors rounded-xl"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="w-3.5 h-3.5 mr-2 text-blue-600" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-[9px] font-medium uppercase tracking-widest px-4 border-slate-100 hover:bg-slate-50 transition-colors rounded-xl"
                        asChild
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Github className="w-3.5 h-3.5 mr-2 text-slate-400" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
