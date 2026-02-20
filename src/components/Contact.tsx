'use client';

import { Github, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '/#featured' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Speaking', href: '/#speaking' },
  ];

  const resourceLinks = [
    { label: 'Certifications', href: '/#achievements' },
    { label: 'Blog', href: '/#blogs' },
    { label: 'Resume', href: '/resume' },
    { label: 'Privacy', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tortellinnie', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shann-karl-felipe/', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-slate-50/50 rounded-[3rem] border border-slate-100 p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-1 group">
                  <span className="text-2xl font-black tracking-tighter uppercase italic text-black">
                    <span className="text-primary">TECHNO</span>LEADER
                  </span>
                </Link>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                  AI/ML Engineer building intelligent systems that solve real-world problems.
                </p>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-6">
              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Resources</h4>
              <ul className="space-y-4">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-[11px] font-black uppercase tracking-widest">
              © {currentYear} SHANN KARL FELIPE
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-[11px] font-black uppercase tracking-widest">
              Built with Next.js & Firebase
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
