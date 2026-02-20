import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Featured } from '@/components/Featured';
import { Projects } from '@/components/Projects';
import { Speaking } from '@/components/Speaking';
import { AchievementsSection } from '@/components/AchievementsSection';
import { Blogs } from '@/components/Blogs';
import { Recommendations } from '@/components/Recommendations';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <Navbar />
      <Hero />
      <div className="space-y-0 relative z-10">
        <Featured />
        <Projects />
        <Speaking />
        <AchievementsSection />
        <Blogs />
        <Recommendations />
        <Contact />
      </div>
    </main>
  );
}