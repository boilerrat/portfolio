import type { FC } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Expertise } from './components/Expertise';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { NFTGrid } from './components/NFTGrid';
import { Contact } from './components/Contact';
import ReactorStatus from './components/ReactorStatus';

const App: FC = () => {
  return (
    <div className="bg-black font-['Space_Mono']">
      <Navigation />
      
      <main className="relative">
        {/* Hero keeps min-h-screen as it's the landing section */}
        <section id="home" className="relative z-10 min-h-screen font-['Courier_Prime']">
          <Hero />
        </section>

        {/* Content sections with reduced spacing */}
        <div className="space-y-16 relative z-10"> {/* Main content wrapper with consistent spacing */}
          <section className="py-12">
            <Expertise />
          </section>

          <section className="py-12">
            <ReactorStatus />
          </section>

          <section className="py-12">
            <Achievements />
          </section>

          <section className="py-12">
            <Skills />
          </section>

          <section className="py-12">
            <NFTGrid />
          </section>

          <section className="py-12">
            <Contact />
          </section>
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