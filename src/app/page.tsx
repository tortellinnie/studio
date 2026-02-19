import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SDGs } from '@/components/SDGs';
import { Featured } from '@/components/Featured';
import { Projects } from '@/components/Projects';
import { Speaking } from '@/components/Speaking';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <Featured />
        <Projects />
        <Speaking />
        <SDGs />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
