'use client';

import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 pt-40">
        <div className="container mx-auto px-6">
          <Button variant="ghost" asChild className="mb-12 text-muted-foreground hover:text-white -ml-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Terms of Service<span className="text-primary">.</span>
              </h1>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed font-medium">
              <p className="text-xl text-white/90">Effective Date: October 2025</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this portfolio website (TECHNOLEADER), you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">2. Intellectual Property</h2>
                <p>
                  The content, designs, and engineering projects showcased on this site are the intellectual property of Shann Karl Felipe, unless otherwise noted. You may not reproduce or distribute this content without explicit permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">3. Disclaimer</h2>
                <p>
                  The information on this website is provided "as is" for informational purposes. While we strive for accuracy, we make no warranties regarding the completeness or reliability of the technical content.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">4. Modifications</h2>
                <p>
                  We reserve the right to revise these terms at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
