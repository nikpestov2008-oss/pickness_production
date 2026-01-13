import React from 'react';

const PhoneMockup: React.FC<{ imgSrc: string; delay: string }> = ({ imgSrc, delay }) => {
  return (
    <div className={`relative shrink-0 w-[22vw] h-[44vw] max-w-[95px] max-h-[190px] md:max-w-none md:max-h-none md:w-[280px] md:h-[580px] rounded-[1rem] md:rounded-[3rem] border-[3px] md:border-8 border-slate-900 bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.15)] md:shadow-[0_0_40px_rgba(6,182,212,0.15)] animate-float ${delay} overflow-hidden transform md:scale-100`}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-8 md:h-6 md:w-32 bg-slate-900 rounded-b-md md:rounded-b-xl z-20"></div>
        
        {/* Inner Border/Glow */}
        <div className="absolute inset-0 rounded-[0.8rem] md:rounded-[2.5rem] border border-cyan-500/20 pointer-events-none z-10"></div>
        
        {/* Content Image */}
        <div className="absolute inset-0 bg-slate-800">
            <img 
                src={imgSrc} 
                alt="Video Portfolio Example" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
            />
            {/* UI Overlay Simulation */}
            <div className="absolute bottom-1.5 right-1.5 md:bottom-4 md:right-4 flex flex-col gap-1 md:gap-2 z-10">
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-[8px] md:text-base text-white">❤️</div>
                </div>
                <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                     <div className="text-[8px] md:text-base text-white">💬</div>
                </div>
            </div>
            
             <div className="absolute bottom-1.5 left-1.5 md:bottom-4 md:left-4 z-10">
                <div className="w-8 h-1 md:w-24 md:h-3 bg-slate-200/20 rounded-full mb-0.5 md:mb-2"></div>
                <div className="w-5 h-1 md:w-16 md:h-3 bg-slate-200/20 rounded-full"></div>
            </div>
        </div>

        {/* Screen Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-20 px-1 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-20 neon-text text-white">
          ПРИКЛАДИ РОБІТ
        </h2>
        
        <div className="flex flex-row justify-center items-end gap-4 md:gap-16 perspective-1000">
            {/* Phones scaled for mobile to fit 3 in a row */}
            <PhoneMockup imgSrc="https://picsum.photos/400/800?random=1" delay="animation-delay-0" />
            <PhoneMockup imgSrc="https://picsum.photos/400/800?random=2" delay="animation-delay-1000" />
            <PhoneMockup imgSrc="https://picsum.photos/400/800?random=3" delay="animation-delay-2000" />
        </div>
      </div>
    </section>
  );
};