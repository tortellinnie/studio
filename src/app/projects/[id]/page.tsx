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

  // Mock data mapping
  const projectDetails: Record<string, any> = {
    'aura-analytics': {
      title: 'Aura Analytics',
      tags: ['Next.js', 'PyTorch', 'AWS Lambda', 'Redis'],
      description: 'An AI-powered dashboard that visualizes real-time market sentiment using NLP on financial news feeds. Built with a focus on high-throughput data processing.',
      challenges: [
        'Scaling WebSocket connections for real-time updates',
        'Optimizing NLP model inference for low latency',
        'Implementing a robust data pipeline for 1M+ daily events'
      ],
      imageId: 'project-1'
    },
    'cloudvault': {
      title: 'CloudVault',
      tags: ['Solidity', 'Web3.js', 'Go', 'Docker'],
      description: 'A decentralized file storage system using IPFS and blockchain for immutable audit trails. Implemented custom encryption protocols for data privacy.',
      challenges: [
        'Minimizing gas costs for blockchain transactions',
        'Ensuring data availability across distributed nodes',
        'Developing a seamless hybrid storage architecture'
      ],
      imageId: 'project-2'
    },
    'agrisense': {
      title: 'AgriSense IoT',
      tags: ['React Native', 'C++', 'ESP32', 'Firebase'],
      description: 'Comprehensive smart farming platform that collects sensor data to automate irrigation. Includes a React Native app for remote monitoring and control.',
      challenges: [
        'Hardware-to-cloud synchronization in low-bandwidth areas',
        'Battery optimization for remote sensor nodes',
        'Real-time visualization of soil moisture telemetry'
      ],
      imageId: 'project-3'
    }
  };

  const project = projectDetails[id] || projectDetails['aura-analytics'];
  const img = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
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
                <h3 className="text-2xl font-bold">Key Challenges & Solutions</h3>
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
                <Button className="rounded-full h-14 px-10 bg-primary hover:bg-primary/90 text-lg font-bold">
                  <Globe className="w-5 h-5 mr-2" /> Live Demo
                </Button>
                <Button variant="outline" className="rounded-full h-14 px-10 border-white/10 hover:bg-white/5 text-lg font-bold">
                  <Github className="w-5 h-5 mr-2" /> Source Code
                </Button>
              </div>
            </div>

            <div className="sticky top-32">
              <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-white/10 glass-card">
                <Image
                  src={img?.imageUrl || ''}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Duration</p>
                  <p className="font-bold text-white">3 Months</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Role</p>
                  <p className="font-bold text-white">Lead Dev</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Status</p>
                  <p className="font-bold text-white">Completed</p>
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