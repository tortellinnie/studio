import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function Contact() {
  return (
    <footer id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border-white/5 shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/20 font-black">GET IN TOUCH</Badge>
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  LET'S START A <br />
                  <span className="text-gradient">NEW PROJECT.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-medium">
                  Currently seeking high-impact Software Engineering roles for 2026. Let's discuss how I can contribute to your team's mission.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Email Me</p>
                    <p className="text-lg font-bold text-white">felipeshannkarl@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold text-white">Manila, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <a href="https://github.com/tortellinnie" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all text-white/50 hover:text-white">
                    <Github className="w-5 h-5" />
                 </a>
                 <a href="https://www.linkedin.com/in/shann-karl-felipe/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all text-white/50 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                 </a>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-8 md:p-10 border-white/10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-primary tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-white transition-all placeholder:text-white/20" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-primary tracking-widest">Your Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-white transition-all placeholder:text-white/20" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-primary tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-white transition-all placeholder:text-white/20 resize-none" placeholder="How can we collaborate?" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 h-14 rounded-xl text-lg font-black group shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-medium">
          <p>© 2026 TECHNOLEADER. Engineering Excellence in Manila.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}