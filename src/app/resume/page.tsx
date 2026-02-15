
'use client';

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ResumePage() {
  const resumeImage = PlaceHolderImages.find(img => img.id === 'resume-image');

  const handleDownload = () => {
    // Downloads the resume PNG. If you later upload a PDF, you can update this to '/assets/resume.pdf'
    const link = document.createElement('a');
    link.href = '/assets/images/resume.png';
    link.download = 'SHANN_KARL_FELIPE_RESUME.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      
      <section className="py-24 pt-40 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-white -ml-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
              
              <div className="flex items-center gap-4">
                <Button 
                  onClick={handleDownload}
                  className="rounded-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest text-[10px] h-12 px-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <Download className="w-4 h-4 mr-2" /> Download Resume
                </Button>
              </div>
            </div>

            <div className="glass-card rounded-[3rem] p-4 md:p-8 border-white/10 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative aspect-[1/1.414] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white/5">
                {resumeImage && (
                  <Image
                    src={resumeImage.imageUrl}
                    alt={resumeImage.description}
                    fill
                    className="object-contain"
                    data-ai-hint={resumeImage.imageHint}
                    priority
                  />
                )}
                
                {/* Overlay for "View Mode" feel */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
                  <Eye className="w-3 h-3" />
                  Official Document 2026
                </div>
              </div>
            </div>

            <div className="text-center space-y-2 pb-12">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                Engineering & Innovation Leadership
              </p>
              <p className="text-muted-foreground text-sm font-medium italic">
                Tip: For the best experience, download the high-resolution version above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
