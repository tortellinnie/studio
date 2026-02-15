'use client';

import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                Privacy Policy<span className="text-primary">.</span>
              </h1>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed font-medium">
              <p className="text-xl text-white/90">Last Updated: October 2025</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">1. Information We Collect</h2>
                <p>
                  This portfolio website is a showcase of engineering projects. We only collect information that you voluntarily provide through the contact form, such as your name and email address, for the purpose of professional communication.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">2. How We Use Information</h2>
                <p>
                  Any information collected is used solely to respond to inquiries or project requests. We do not sell, trade, or otherwise transfer your information to third parties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">3. Data Security</h2>
                <p>
                  We implement standard security measures to protect your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">4. Contact Us</h2>
                <p>
                  If you have any questions regarding this privacy policy, you may contact us at felipeshannkarl@gmail.com.
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
