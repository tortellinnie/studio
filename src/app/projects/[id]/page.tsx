'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Globe, CheckCircle2, Server, Layout, Shield, Workflow, Eye, Zap, Brain, Fish, BookOpen } from 'lucide-react';
import Link from 'next/link';

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
        'Designing actionable dashboards for farm managers',
        '30% reduction in ammonia-related health risks'
      ],
      status: 'Pilot Ready',
      icon: Eye,
      skills: ['Edge Computing', 'TensorFlow', 'Agile']
    },
    'video-automation': {
      title: 'Video Automation Engine',
      tags: ['Docker', 'n8n', 'Gemini AI', 'FFmpeg'],
      description: 'End-to-end short-form video automation engine that processes media via FFmpeg and handles motivational video generation and upload using Gemini 2.5 Flash.',
      challenges: [
        'Containerized architecture using Docker and n8n',
        'Autonomous content production via local LLM logic',
        'Secure OAuth2 management for multi-service authentication',
        'Automated YouTube delivery pipeline'
      ],
      status: 'Autonomous',
      icon: Zap,
      skills: ['Docker', 'n8n', 'Google Cloud']
    },
    'gabaydiwa': {
      title: 'GabayDiwa',
      tags: ['React', 'AI Modeling', 'Healthcare', 'Startup'],
      description: 'A Cognitive Health and Progression Monitoring System empowering caregivers with data-driven insights through cognitive trend maps and structured health tracking.',
      challenges: [
        '1st Runner-Up in Philippine Startup Challenge X Regional',
        'Bridging the gap between clinical insight and home care',
        'Developing proactive risk indicators for dementia care',
        'Awarded for bright student-led innovation'
      ],
      status: 'Award-Winning',
      icon: Brain,
      skills: ['Healthcare UX', 'Data Modeling']
    },
    'proxygen': {
      title: 'Proxygen',
      tags: ['IoT', 'Fuzzy Logic', 'Data Science', 'AWS'],
      description: 'Proactive dissolved oxygen (DO) management system for Filipino pond aquaculture. Integrates sensor data and weather forecasts through a fuzzy logic-based decision engine.',
      challenges: [
        '30–40% improvement in DO maintenance achieved',
        'Preventing mass fish kills through predictive alerts',
        'Aligning with SDGs 2, 9, 12, and 14 for sustainability',
        'Diurnal and weather-aware decision logic'
      ],
      status: 'Industrial Grade',
      icon: Fish,
      skills: ['Fuzzy Logic', 'Sensor Fusion']
    },
    'salayliwa': {
      title: 'Salayliwa',
      tags: ['Next.js', 'AI', 'Cultural UX', 'EduTech'],
      description: 'National award-winning edu-cultural project focused on revitalizing reading engagement among Filipino youth through adaptive digital experiences and culturally resonant stories.',
      challenges: [
        'Recognized at NARA Con 2025 at the National Library',
        'Revitalizing literacy through community-driven habits',
        'Designing culturally grounded digital storytelling interfaces',
        'National Alliance of Reading Advocates (NARA) awardee'
      ],
      status: 'National Award',
      icon: BookOpen,
      skills: ['Social Innovation', 'Adaptive UI']
    }
  };

  const project = projectDetails[id] || projectDetails['birdseye'];

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
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-none uppercase italic">{project.title}.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-primary" />
                  Project Impact & Innovation
                </h3>
                <div className="grid gap-4">
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
                  <Globe className="w-5 h-5 mr-2" /> View Live
                </Button>
                <Button variant="outline" className="rounded-full h-14 px-10 border-white/10 hover:bg-white/5 text-lg font-bold">
                  <Github className="w-5 h-5 mr-2" /> Technical Docs
                </Button>
              </div>
            </div>

            <div className="sticky top-32 space-y-8">
              <div className="aspect-[4/3] glass-card rounded-[3rem] flex flex-col items-center justify-center p-12 text-center space-y-8 border-primary/20">
                <div className="w-32 h-32 rounded-[2rem] bg-primary/10 flex items-center justify-center border border-primary/20">
                  <project.icon className="w-16 h-16 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-white uppercase">{project.title}</h2>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.skills.map((skill: string) => (
                      <span key={skill} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 glass-card rounded-2xl text-center">
                  <p className="text-xs text-muted-foreground font-black uppercase mb-2">Status</p>
                  <p className="font-black text-white text-lg">{project.status}</p>
                </div>
                <div className="p-6 glass-card rounded-2xl text-center">
                  <p className="text-xs text-muted-foreground font-black uppercase mb-2">Role</p>
                  <p className="font-black text-white text-lg">Lead</p>
                </div>
                <div className="p-6 glass-card rounded-2xl text-center">
                  <p className="text-xs text-muted-foreground font-black uppercase mb-2">Impact</p>
                  <p className="font-black text-white text-lg">Scalable</p>
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