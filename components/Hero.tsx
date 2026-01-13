import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-20">
      
      {/* Glow Effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[100px] rounded-full -z-10" />

      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-tight mb-6 max-w-5xl mx-auto neon-text text-white">
        Відеоконтент Майбутнього <br className="hidden md:block" />
        <span className="text-cyan-400 block mt-2 md:mt-0">Вже у Житомирі</span>
      </h1>

      <p className="text-slate-300 text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light tracking-wide px-2">
        Ми поєднали професійну зйомку, якісний монтаж та магію Штучного Інтелекту для вибухового росту вашого бізнесу.
      </p>

      <div className="flex flex-col items-center gap-4 w-full">
        <button 
          onClick={() => document.getElementById('footer-cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative w-full md:w-auto max-w-xs md:max-w-none px-6 md:px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-400 transform hover:-translate-y-0.5 active:scale-95"
        >
          {/* Optimized animation: Use scaleX instead of width to prevent layout thrashing (lag) */}
          <div className="absolute inset-0 bg-cyan-400 transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100 opacity-20 will-change-transform"></div>
          
          <span className="relative flex items-center justify-center gap-2 text-cyan-300 font-bold tracking-widest text-xs md:text-sm lg:text-base group-hover:text-white transition-colors">
            ЗАПРОСИТИ АНАЛІЗ БІЗНЕСУ
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
        
        <p className="text-[10px] md:text-xs text-cyan-600/80 font-mono tracking-widest uppercase">
          БЕЗКОШТОВНА СТРАТЕГІЯ
        </p>
      </div>

    </section>
  );
};