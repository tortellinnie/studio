
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
  Leaf
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
      description: 'Computer vision on edge devices detecting wet zones in litter to improve bird welfare and reduce emissions.',
      tags: ['AI', 'Cloud & IoT'],
      sdgs: [2, 9, 12, 15],
      imageId: 'project-birdseye'
    },
    {
      id: 'video-automation',
      title: 'Video Automation Engine',
      description: 'Fully autonomous content generation pipeline using Docker, n8n, and Gemini AI for short-form media scale.',
      tags: ['Automation', 'AI'],
      sdgs: [9],
      imageId: 'project-video-automation'
    },
    {
      id: 'gabaydiwa',
      title: 'GabayDiwa',
      description: 'Healthcare innovation system empowering caregivers with cognitive trend maps and dementia progression tracking.',
      tags: ['AI', 'Software Solutions'],
      sdgs: [3],
      imageId: 'project-gabaydiwa'
    },
    {
      id: 'salayliwa',
      title: 'Salayliwa',
      description: 'A personalized mobile reading app using Glicko-2 and Neural Networks to combat the national reading crisis.',
      tags: ['Software Solutions', 'AI'],
      sdgs: [4],
      imageId: 'project-salayliwa'
    },
    {
      id: 'proxygen',
      title: 'Proxygen',
      description: 'Proactive dissolved oxygen management system for pond aquaculture preventing mass fish kills through fuzzy logic.',
      tags: ['Cloud & IoT', 'AI'],
      sdgs: [2, 9, 12, 15],
      imageId: 'project-proxygen'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tighter uppercase italic">
              SELECTED PROJECTS
            </h2>
            <p className="text-muted-foreground text-sm font-medium max-w-xl">
              Architecting solutions at the intersection of AI, hardware, and social impact. 
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gray-200" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
              {projects.length} TECHNICAL LOGS
            </span>
          </div>
        </div>

        <TooltipProvider delayDuration={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const imageData = PlaceHolderImages.find(img => img.id === project.imageId);
              return (
                <div 
                  key={project.id} 
                  className="group relative flex flex-col bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
                >
                  <Link href={`/projects/${project.id}`} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />
                  
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 z-10 pointer-events-none group-hover:pointer-events-auto">
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
                    
                    <div className="absolute top-6 left-6 flex gap-2 pointer-events-auto">
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
                                className={`w-8 h-8 rounded-xl ${sdg.color} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-150 hover:z-50`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <SdgIcon className="w-4 h-4 text-white" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent className="p-4 rounded-2xl max-w-[200px] bg-white shadow-2xl border-gray-100">
                              <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Goal {id}</p>
                                <p className="text-sm font-bold text-foreground leading-tight">{sdg.title}</p>
                                <p className="text-[10px] text-muted-foreground font-medium leading-relaxed pt-1">{sdg.desc}</p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>

                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow relative z-20 pointer-events-none">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <div key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-black/[0.05] shadow-sm">
                          <div className="w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          <span className="text-[8px] font-black uppercase tracking-[0.1em] text-foreground/60">{tag}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-medium text-foreground uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
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
