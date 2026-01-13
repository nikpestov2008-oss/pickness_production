import React from 'react';

export const FooterCTA: React.FC = () => {
  return (
    <section id="footer-cta" className="relative w-full py-20 md:py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="relative z-10 text-center">
        <h2 className="text-xs md:text-sm md:text-base font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4">
           Start Your Growth
        </h2>
        <h3 className="text-3xl md:text-4xl md:text-6xl font-black text-white neon-text mb-8">
          ГОТОВІ ПОЧАТИ?
        </h3>
        
        <div className="relative h-24 md:h-32 w-full flex justify-center mb-8">
             {/* Twisted Neon Cable SVG */}
             <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] scale-75 md:scale-100">
                <path 
                    d="M 100 0 
                       Q 100 40, 60 40 
                       T 60 80 
                       T 100 120" 
                    fill="none" 
                    stroke="#22d3ee" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-pulse"
                />
             </svg>
        </div>

        <h4 className="text-xl md:text-2xl md:text-3xl font-bold text-white mb-8 neon-text">
            ПИШІТЬ В TELEGRAM
        </h4>

        <a 
          href="https://t.me/nikita4903" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-5 bg-[#24A1DE] text-white rounded-full font-bold text-base md:text-lg tracking-wide transition-all duration-300 hover:bg-[#1a8bc4] hover:scale-105 shadow-[0_0_20px_rgba(36,161,222,0.5)] hover:shadow-[0_0_40px_rgba(36,161,222,0.8)]"
        >
          <span className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
            {/* Official Telegram Plane Icon SVG */}
            <svg 
              className="w-5 h-5 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
          </span>
          TELEGRAM
        </a>
        
        <p className="mt-8 text-slate-500 text-xs md:text-sm">
            © 2026 Pickness Production. All rights reserved.
        </p>
      </div>

    </section>
  );
};