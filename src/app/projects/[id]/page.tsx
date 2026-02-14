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

  // Professional mapping based on profile deep-scan
  const projectDetails: Record<string, any> = {
    'aura-analytics': {
      title: 'Aura Data Engine',
      tags: ['Next.js', 'PyTorch', 'AWS Lambda', 'Redis'],
      description: 'A high-throughput sentiment analysis engine that processes over 1M events daily. Utilizes NLP models to visualize market volatility and sentiment trends in real-time.',
      challenges: [
        'Scaling WebSocket connections for 10k+ concurrent users',
        'Optimizing PyTorch inference for sub-100ms latency',
        'Implementing a fault-tolerant Redis caching layer'
      ],
      imageId: 'project-1'
    },
    'cloudvault': {
      title: 'CloudVault Secure',
      tags: ['Solidity', 'Go', 'IPFS', 'Docker'],
      description: 'A decentralized file-sharing platform that ensures 100% data integrity through content-addressing and blockchain-based audit logs.',
      challenges: [
        'Reducing IPFS retrieval latency across global nodes',
        'Managing smart contract state efficiency to lower gas fees',
        'Architecting a zero-knowledge proof authentication module'
      ],
      imageId: 'project-2'
    },
    'agrisense': {
      title: 'AgriSense IoT Node',
      tags: ['C++', 'React Native', 'ESP32', 'Firebase'],
      description: 'Comprehensive precision farming system featuring hardware-level optimization for low-power soil telemetry and automated cloud synchronization.',
      challenges: [
        'Hardware-to-cloud sync in ultra-low bandwidth environments',
        'Extending battery life via deep-sleep firmware cycles',
        'Developing a real-time React Native dashboard for telemetry'
      ],
      imageId: 'project-3'
    }
  };

  const project = projectDetails[id] || projectDetails['aura-analytics'];
  const img = PlaceHolderImages.find(p => p.id === project.imageId);

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
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Duration</p>
                  <p className="font-bold text-white">4 Months</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Role</p>
                  <p className="font-bold text-white">Architect</p>
                </div>
                <div className="p-4 glass-card rounded-xl text-center">
                  <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Status</p>
                  <p className="font-bold text-white">Production</p>
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
