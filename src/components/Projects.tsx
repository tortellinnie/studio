'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'salayliwa',
      title: 'Salayliwa',
      description: 'National award-winning edu-cultural project revitalizing reading engagement through adaptive digital experiences and culturally resonant stories.',
      tags: ['Next.js', 'AI', 'Cultural UX', 'EduTech'],
      links: { github: '#', live: '/projects/salayliwa' },
      imageId: 'project-salayliwa'
    },
    {
      id: 'gabaydiwa',
      title: 'GabayDiwa',
      description: 'Revolutionizing Filipino Dementia Home Care with a Cognitive Health Monitoring System. 1st Runner-Up in Philippine Startup Challenge X.',
      tags: ['React', 'AI Modeling', 'Healthcare', 'Startup'],
      links: { github: '#', live: '/projects/gabaydiwa' },
      imageId: 'project-gabaydiwa'
    },
    {
      id: 'proxygen',
      title: 'Proxygen',
      description: 'Proactive, weather-aware dissolved oxygen management system for pond aquaculture using fuzzy logic to prevent fish kills.',
      tags: ['IoT', 'Fuzzy Logic', 'Data Science', 'AWS'],
      links: { github: '#', live: '/projects/proxygen' },
      imageId: 'project-proxygen'
    },
    {
      id: 'birdseye',
      title: 'Birdseye',
      description: 'Computer vision on edge devices detecting wet zones in poultry litter in real-time to improve bird welfare and reduce emissions.',
      tags: ['Computer Vision', 'Edge AI', 'IoT', 'Agriculture'],
      links: { github: '#', live: '/projects/birdseye' },
      imageId: 'project-birdseye'
    },
    {
      id: 'video-automation',
      title: 'Video Automation Engine',
      description: 'End-to-end motivational video generation engine built on n8n and Docker, powered by local LLMs (Gemini) and FFmpeg.',
      tags: ['Docker', 'n8n', 'Gemini AI', 'FFmpeg'],
      links: { github: '#', live: '/projects/video-automation' },
      imageId: 'project-video-automation'
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary font-bold">PORTFOLIO</Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-white italic uppercase">Selected Works.</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Engineering solutions for complex problems across distributed systems, AI, and social innovation.
            </p>
          </div>
          <Button variant="outline" className="rounded-full h-12 px-8 border-white/10 hover:bg-white/5 font-bold group">
            All Projects <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(p => p.id === project.imageId) || PlaceHolderImages[1];
            return (
              <Link href={project.links.live} key={project.id} className="group">
                <Card className="glass-card overflow-hidden border-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={img?.imageUrl || ''}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                       <Button 
                        size="icon" 
                        variant="outline" 
                        className="rounded-full bg-white/10 border-white/20 hover:bg-primary text-white" 
                        asChild 
                        onClick={(e) => e.stopPropagation()}
                       >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                          </a>
                       </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary/80 px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                     <span className="text-sm font-bold text-primary group-hover:underline decoration-2 underline-offset-8">
                        View Project Detail
                     </span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
