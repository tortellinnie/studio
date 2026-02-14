'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;

  const projectDetails: Record<string, any> = {
    'salayliwa': {
      title: 'Salayliwa',
      tags: ['Next.js', 'PostgreSQL', 'UI/UX'],
      description: 'A gamified reading engagement platform for Filipino youth. Developed to address literacy challenges through a culturally grounded digital experience.',
      challenges: [
        'Designing a culturally resonant UX for Filipino children',
        'Implementing real-time progress tracking for literacy metrics',
        'Scaling the platform for national competition deployment'
      ],
      imageId: 'project-1'
    },
    'gabaydiwa': {
      title: 'Gabaydiwa',
      tags: ['React', 'Node.js', 'Healthcare'],
      description: 'A comprehensive cognitive health and progression monitoring system for dementia home care. Recognized for social innovation and technological impact.',
      challenges: [
        'Ensuring accessibility for senior citizens and caregivers',
        'Collaborating with neuroscientists for medical validation',
        'Developing predictive data models for cognitive health'
      ],
      imageId: 'project-2'
    },
    'proxygen': {
      title: 'Proxygen',
      tags: ['IoT', 'Data Science', 'Python'],
      description: 'Dissolved Oxygen Risk Assessment and Decision Support System for commercial fish ponds in the Philippines.',
      challenges: [
        'Developing real-time sensor data pipelines',
        'Implementing predictive risk assessment models',
        'Building a decision support interface for pond managers'
      ],
      imageId: 'project-3'
    },
    'birdseye': {
      title: 'Birdseye',
      tags: ['IoT', 'Firebase', 'Cloud'],
      description: 'Real-time poultry litter health and welfare monitoring system using distributed IoT sensors.',
      challenges: [
        'Deploying distributed sensor nodes in industrial environments',
        'Optimizing real-time telemetry for low-bandwidth scenarios',
        'Creating an automated welfare alert system'
      ],
      imageId: 'project-1'
    },
    'aura-analytics': {
      title: 'Aura Data Engine',
      tags: ['Next.js', 'PyTorch', 'AWS'],
      description: 'A high-throughput sentiment analysis engine that processes over 1M events daily. Utilizes NLP models to visualize market volatility.',
      challenges: [
        'Scaling WebSocket connections for 10k+ concurrent users',
        'Optimizing PyTorch inference for sub-100ms latency',
        'Implementing a fault-tolerant Redis caching layer'
      ],
      imageId: 'project-1'
    }
  };

  const project = projectDetails[id] || projectDetails['salayliwa'];
  const img = PlaceHolderImages.find(p => p.id === id) || PlaceHolderImages[1];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <Button variant="ghost" asChild className="mb-12 text-muted-foreground hover:text-white -ml-4">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-none">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Project Impact & Innovation</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, i: number) => (
                    <div key={i} className="flex gap-4 p-6 glass-card rounded-2xl border-white/5">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <p className="font-medium text-white/80">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <Button className="rounded-full h-14 px-10 bg-primary hover:bg-primary/90 text-lg font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <Globe className="w-5 h-5 mr-2" /> Live Demo
                </Button>
                <Button variant="outline" className="rounded-full h-14 px-10 border-white/10 hover:bg-white/5 text-lg font-bold">
                  <Github className="w-5 h-5 mr-2" /> Source Code
                </Button>
              </div>
            </div>

            <div className="sticky top-32">
              <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-white/10 glass-card shadow-2xl">
                <Image
                  src={img?.imageUrl || ''}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Status</p>
                  <p className="font-bold text-white">Award-Winning</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Role</p>
                  <p className="font-bold text-white">Exec Lead</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Impact</p>
                  <p className="font-bold text-white">Scale-Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
