
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  Brain,
  Eye,
  Fish,
  BookOpen
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Projects() {
  const projects = [
    {
      id: 'salayliwa',
      title: 'Salayliwa',
      description: 'A personalized mobile reading app using Glicko-2 and Two Tower Neural Networks to combat the national reading crisis through adaptive literacy.',
      tags: ['Next.js', 'AI', 'EduTech'],
      icon: BookOpen,
      imageId: 'project-salayliwa',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'video-automation',
      title: 'Video Automation Engine',
      description: 'Fully autonomous content generation pipeline using Docker, n8n, and Gemini AI, producing high-quality content at scale.',
      tags: ['Docker', 'n8n', 'Gemini AI'],
      icon: Zap,
      imageId: 'project-video-automation',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'gabaydiwa',
      title: 'GabayDiwa',
      description: 'Healthcare innovation system empowering caregivers with cognitive trend maps and structured progression tracking for dementia care.',
      tags: ['Healthcare', 'Data Science', 'Startup'],
      icon: Brain,
      imageId: 'project-gabaydiwa',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'birdseye',
      title: 'Birdseye',
      description: 'Computer vision on edge devices detecting wet zones in litter to improve bird welfare and reduce emissions in commercial poultry farms.',
      tags: ['Computer Vision', 'Edge AI', 'IoT'],
      icon: Eye,
      imageId: 'project-birdseye',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'proxygen',
      title: 'Proxygen',
      description: 'Proactive dissolved oxygen management system for pond aquaculture preventing mass fish kills through fuzzy logic and weather forecasting.',
      tags: ['Fuzzy Logic', 'IoT', 'Agri-Tech'],
      icon: Fish,
      imageId: 'project-proxygen',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header with Pagination Controls */}
        <div className="flex flex-row justify-between items-end mb-12 border-b border-gray-100 pb-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-foreground uppercase italic tracking-tighter">Projects</h2>
            <p className="text-muted-foreground text-sm font-medium">A selection of impactful AI/ML projects.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">1 / 1</span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-gray-200 hover:bg-gray-50">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <div key={project.id} className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  {imageData && (
                    <Image 
                      src={imageData.imageUrl} 
                      alt={imageData.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-[9px] font-black uppercase tracking-widest text-primary border-primary/20 bg-primary/5 px-2 py-0.5 rounded">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Button Row */}
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    <Button variant="outline" className="w-full h-11 rounded-xl border-gray-200 hover:bg-gray-50 font-bold text-xs gap-2" asChild>
                      <Link href={project.codeUrl}>
                        <Github className="w-4 h-4" />
                        View Code
                      </Link>
                    </Button>
                    <Button className="w-full h-11 rounded-xl bg-primary hover:bg-primary/90 font-bold text-xs gap-2 shadow-lg shadow-primary/20" asChild>
                      <Link href={project.demoUrl}>
                        <ExternalLink className="w-4 h-4" />
                        View Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
