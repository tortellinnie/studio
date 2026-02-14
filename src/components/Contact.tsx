
import { Mail, Linkedin, Github, Twitter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <footer id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Let's work together.</h2>
              <p className="text-muted-foreground text-lg">
                I'm currently looking for full-time Software Engineering opportunities starting Summer 2025.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">alex.dev@university.edu</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">San Francisco, CA (Open to Relocation)</span>
              </div>
            </div>

            <div className="flex gap-4">
               <a href="#" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
               </a>
               <a href="#" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Github className="w-6 h-6" />
               </a>
               <a href="#" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Twitter className="w-6 h-6" />
               </a>
            </div>
          </div>

          <div className="w-full md:w-[400px] bg-secondary/50 rounded-2xl p-8 space-y-6">
            <h3 className="font-bold text-xl">Quick Message</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Your Email</label>
                <input type="text" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can I help?" />
              </div>
              <Button className="w-full bg-primary h-12">Send Inquiry</Button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Ascension Profile. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Resume</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
