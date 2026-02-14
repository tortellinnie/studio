
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
    'birdseye': {
      title: 'Birdseye',
      tags: ['Computer Vision', 'Edge AI', 'IoT', 'Agriculture'],
      description: 'Transforming poultry farm management using computer vision on edge devices to detect wet zones in litter in real-time, improving bird welfare and reducing ammonia emissions.',
      challenges: [
        'Real-time computer vision deployment on edge hardware',
        'Successful pilot testing in commercial Luzon farms',
        'Designing actionable dashboards for farm managers'
      ],
      imageId: 'project-birdseye',
      status: 'Pilot Ready'
    },
    'video-automation': {
      title: 'Video Automation Engine',
      tags: ['Docker', 'n8n', 'Gemini AI', 'FFmpeg'],
      description: 'End-to-end short-form video automation engine that processes media via FFmpeg and handles motivational video generation and upload using Gemini 2.5 Flash.',
      challenges: [
        'Containerized architecture using Docker and n8n',
        'Autonomous content production via local LLM logic',
        'Secure OAuth2 management for multi-service authentication'
      ],
      imageId: 'project-video-automation',
      status: 'Autonomous'
    },
    'gabaydiwa': {
      title: 'GabayDiwa',
      tags: ['React', 'AI Modeling', 'Healthcare', 'Startup'],
      description: 'A Cognitive Health and Progression Monitoring System empowering caregivers with data-driven insights through cognitive trend maps and structured health tracking.',
      challenges: [
        '1st Runner-Up in Philippine Startup Challenge X Regional',
        'Bridging the gap between clinical insight and home care',
        'Developing proactive risk indicators for dementia care'
      ],
      imageId: 'project-gabaydiwa',
      status: 'Award-Winning'
    },
    'proxygen': {
      title: 'Proxygen',
      tags: ['IoT', 'Fuzzy Logic', 'Data Science', 'AWS'],
      description: 'Proactive dissolved oxygen (DO) management system for Filipino pond aquaculture. Integrates sensor data and weather forecasts through a fuzzy logic-based decision engine.',
      challenges: [
        '30–40% improvement in DO maintenance achieved',
        'Preventing mass fish kills through predictive alerts',
        'Aligning with SDGs 2, 9, 12, and 14 for sustainability'
      ],
      imageId: 'project-proxygen',
      status: 'Industrial Grade'
    },
    'salayliwa': {
      title: 'Salayliwa',
      tags: ['Next.js', 'AI', 'Cultural UX', 'EduTech'],
      description: 'National award-winning edu-cultural project focused on revitalizing reading engagement among Filipino youth through adaptive digital experiences and culturally resonant stories.',
      challenges: [
        'Recognized at NARA Con 2025 at the National Library',
        'Revitalizing literacy through community-driven habits',
        'Designing culturally grounded digital storytelling interfaces'
      ],
      imageId: 'project-salayliwa',
      status: 'National Award'
    }
  };

  const project = projectDetails[id] || projectDetails['birdseye'];
  const img = PlaceHolderImages.find(p => p.id === project.imageId) || PlaceHolderImages[1];

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
                  unoptimized={img?.imageUrl.includes('drive.google.com')}
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Status</p>
                  <p className="font-bold text-white">{project.status}</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Role</p>
                  <p className="font-bold text-white">Project Lead</p>
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
