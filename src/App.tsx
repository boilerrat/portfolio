import type { FC } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Expertise } from './components/Expertise';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { NFTGrid } from './components/NFTGrid';
import { Contact } from './components/Contact';

const App: FC = () => {
  return (
    <div className="bg-black">
      <Navigation />
      
      <main className="relative">
        <section id="home" className="relative z-10">
          <Hero />
        </section>

        <div className="relative z-10">
          <Expertise />
        </div>

        <div className="relative z-10">
          <Achievements />
        </div>

        <div className="relative z-10">
          <Skills />
        </div>

        <div className="relative z-10">
          <NFTGrid />
        </div>

        <div className="relative z-10">
          <Contact />
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-delayed" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      </main>
    </div>
  );
};

export default App;