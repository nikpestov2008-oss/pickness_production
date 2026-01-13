import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { NeuroTerminal } from './components/NeuroTerminal';
import { FooterCTA } from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-cyan-500 selection:text-white">
      <Background />
      
      <main className="relative z-10 flex flex-col gap-10 md:gap-24 pb-12 md:pb-20">
        <Hero />
        <Process />
        <NeuroTerminal />
        <FooterCTA />
      </main>
      
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 z-50"></div>
    </div>
  );
};

export default App;