
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'project-1',
      title: 'Aura Analytics',
      description: 'An AI-powered dashboard that visualizes real-time market sentiment using NLP on financial news feeds. Built with a focus on high-throughput data processing.',
      tags: ['Next.js', 'PyTorch', 'AWS Lambda', 'Redis'],
      links: { github: '#', live: '#' }
    },
    {
      id: 'project-2',
      title: 'CloudVault',
      description: 'A decentralized file storage system using IPFS and blockchain for immutable audit trails. Implemented custom encryption protocols for data privacy.',
      tags: ['Solidity', 'Web3.js', 'Go', 'Docker'],
      links: { github: '#', live: '#' }
    },
    {
      id: 'project-3',
      title: 'AgriSense IoT',
      description: 'Comprehensive smart farming platform that collects sensor data to automate irrigation. Includes a React Native app for remote monitoring and control.',
      tags: ['React Native', 'C++', 'ESP32', 'Firebase'],
      links: { github: '#', live: '#' }
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Exploring complex technical problems through hands-on development. Each project represents a leap in my engineering capabilities.
            </p>
          </div>
          <Button variant="outline" className="w-fit">View GitHub Profile</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={img?.imageUrl || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                        <a href={project.links.github}><Github className="w-5 h-5" /></a>
                     </Button>
                     <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                        <a href={project.links.live}><ExternalLink className="w-5 h-5" /></a>
                     </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                   <Button variant="link" className="px-0 text-primary font-semibold hover:no-underline group-hover:translate-x-1 transition-transform">
                      Learn More &rarr;
                   </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
