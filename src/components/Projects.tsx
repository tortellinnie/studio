'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2, Eye, Zap, Brain, Fish, BookOpen } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'birdseye',
      title: 'Birdseye',
      description: 'Transforming poultry farm management using computer vision on edge devices to detect wet zones in litter in real-time, improving bird welfare and ammonia emissions.',
      tags: ['Computer Vision', 'Edge AI', 'IoT'],
      impact: 'Pilot tested in commercial Luzon farms.',
      icon: Eye
    },
    {
      id: 'video-automation',
      title: 'Video Automation Engine',
      description: 'Autonomous content production workflow built on n8n and Docker. Automates media processing via FFmpeg and motivational video generation using Gemini 2.5 Flash.',
      tags: ['Docker', 'n8n', 'Gemini AI', 'FFmpeg'],
      impact: 'End-to-end autonomous YouTube delivery.',
      icon: Zap
    },
    {
      id: 'gabaydiwa',
      title: 'GabayDiwa',
      description: 'A Cognitive Health and Progression Monitoring System empowering caregivers with data-driven insights through cognitive trend maps and structured health tracking.',
      tags: ['AI Modeling', 'Healthcare', 'Startup'],
      impact: '1st Runner-Up, Philippine Startup Challenge X.',
      icon: Brain
    },
    {
      id: 'proxygen',
      title: 'Proxygen',
      description: 'Proactive, diurnal- and weather-aware dissolved oxygen management system for pond aquaculture preventing fish kills and optimizing feeding via fuzzy logic.',
      tags: ['IoT', 'Fuzzy Logic', 'Data Science'],
      impact: '30-40% improvement in DO maintenance.',
      icon: Fish
    },
    {
      id: 'salayliwa',
      title: 'Salayliwa',
      description: 'National award-winning edu-cultural project focused on revitalizing reading engagement among Filipino youth through adaptive digital experiences.',
      tags: ['AI', 'EduTech', 'Cultural UX'],
      impact: 'Recognized at NLP NARA Con 2025.',
      icon: BookOpen
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary font-bold">INNOVATIONS</Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-white italic uppercase">Selected Works.</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Engineering solutions for complex problems across distributed systems, AI, and social innovation.
            </p>
          </div>
          <Button variant="outline" className="rounded-full h-12 px-8 border-white/10 hover:bg-white/5 font-bold group">
            Technical Stack <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group">
              <Card className="glass-card overflow-hidden border-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col p-8">
                <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <CardHeader className="p-0 pb-4">
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
                <CardContent className="p-0 flex-grow space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" />
                    {project.impact}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-8">
                   <span className="text-sm font-bold text-primary group-hover:underline decoration-2 underline-offset-8">
                      View Project Detail
                   </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
