import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProblemSolving } from './components/ProblemSolving';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4F4F7] flex flex-col selection:bg-[#9B7CFF]/30 selection:text-[#55D6E8]">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <ProblemSolving />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />
    </div>
  );
};

export default App;
