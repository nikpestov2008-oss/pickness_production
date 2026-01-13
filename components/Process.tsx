import React from 'react';
import { Search, FileText, Calendar, Video, Wand2, Trophy } from 'lucide-react';

// --- DESKTOP COMPONENT (UNCHANGED LOGIC) ---
interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  align: 'left' | 'right' | 'center';
  className?: string;
  isHighlighted?: boolean;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description, icon, align, className = '', isHighlighted = false }) => {
  const alignClasses = {
    left: 'md:mr-auto md:ml-0 md:text-right md:items-end',
    right: 'md:ml-auto md:mr-0 md:text-left md:items-start',
    center: 'mx-auto text-center items-center'
  };

  const cardClasses = isHighlighted
    ? "glass-card p-5 md:p-10 rounded-2xl md:rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_60px_rgba(34,211,238,0.2)] bg-gradient-to-b from-slate-800/90 to-cyan-900/20 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500"
    : "glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group w-full";

  const iconClasses = isHighlighted
    ? "w-12 h-12 md:w-20 md:h-20 rounded-full bg-cyan-400/10 flex items-center justify-center border-2 border-cyan-300 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-pulse-glow mb-2 md:mb-4"
    : "w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300";

  const titleClasses = isHighlighted
    ? "text-xl md:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
    : "text-base md:text-xl font-bold text-white";

  const textClasses = isHighlighted
    ? "text-cyan-100/80 text-sm md:text-lg font-light leading-relaxed max-w-lg mx-auto"
    : "text-slate-400 text-xs md:text-base leading-relaxed";

  return (
    <div className={`relative z-10 w-full md:w-[45%] flex flex-col ${alignClasses[align]} mb-4 md:mb-0 ${className}`}>
      <div className={cardClasses}>
        {isHighlighted && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_70%)] pointer-events-none" />
          </>
        )}

        <div className={`flex items-center gap-3 md:gap-4 mb-2 md:mb-3 ${align === 'left' ? 'md:flex-row-reverse' : ''} ${align === 'center' ? 'justify-center' : ''} ${isHighlighted ? '!flex-col !gap-2' : ''}`}>
          <div className={iconClasses}>
            {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: isHighlighted ? "w-6 h-6 md:w-10 md:h-10" : "w-4 h-4 md:w-5 md:h-5" })}
          </div>
          <h3 className={`${titleClasses} heading-font`}>{number}. {title}</h3>
        </div>
        <p className={textClasses}>
          {description}
        </p>
      </div>
    </div>
  );
};

export const Process: React.FC = () => {
  // Data for the mobile map loop
  const steps = [
    {
      id: "01",
      title: "АНАЛІЗ БІЗНЕСУ",
      desc: "Вивчення ніші, конкурентів та болей клієнтів для створення точної стратегії.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: "02",
      title: "СКЛАДАННЯ ПЛАНУ",
      desc: "Розробка детальної стратегії та написання вірусних сценаріїв.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: "03",
      title: "ДОГОВІР ПРО ДАТУ",
      desc: "Бронювання дня зйомки та затвердження всіх організаційних моментів.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      id: "04",
      title: "ЗЙОМКА",
      desc: "Виїзд команди з обладнанням на вашу локацію.",
      icon: <Video className="w-6 h-6" />
    },
    {
      id: "05",
      title: "MOНТАЖ ТА ШІ",
      desc: "Магія нейромереж, кіношний колір, саунд-дизайн та динамічний монтаж.",
      icon: <Wand2 className="w-6 h-6" />
    },
    {
      id: "06",
      title: "РЕЗУЛЬТАТ",
      desc: "Готовий контент, який приносить охоплення, лідів та впізнаваність.",
      icon: <Trophy className="w-6 h-6" />,
      isLast: true
    }
  ];

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden">
      
      {/* Global SVG Defs (Gradient & Filter) & Custom Styles */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
           <defs>
            <linearGradient id="neonGradientGlobal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0" />
              <stop offset="10%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="90%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
            </linearGradient>
            <filter id="glowGlobal">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
      </svg>
      <style>{`
        @keyframes neon-shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
          10% { opacity: 0.5; }
          50% { opacity: 0; }
          100% { transform: translateX(300%) skewX(-20deg); opacity: 0; }
        }
        .animate-neon-shimmer {
          animation: neon-shimmer 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* --- DESKTOP VIEW (UNCHANGED) --- */}
      <div className="hidden md:block max-w-6xl mx-auto relative px-4">
        <h2 className="text-5xl font-bold text-center mb-24 neon-text text-white">
          ПРОЦЕС РОБОТИ
        </h2>

        {/* Desktop SVG Line Background */}
        <div className="absolute top-24 bottom-0 left-0 right-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1500" preserveAspectRatio="none">
            <path 
              d="M 500 0 
                 C 500 50, 250 50, 250 150
                 L 250 200
                 C 250 300, 750 300, 750 400
                 L 750 450
                 C 750 550, 250 550, 250 600
                 L 250 650
                 C 250 750, 750 750, 750 800
                 L 750 850
                 C 750 950, 250 950, 250 1000
                 L 250 1050
                 C 250 1150, 750 1150, 750 1250
                 L 750 1400"
              fill="none"
              stroke="url(#neonGradientGlobal)"
              strokeWidth="3"
              filter="url(#glowGlobal)"
              strokeLinecap="round"
              className="opacity-80"
            />
             <path 
              d="M 350 580 
                 C 350 570, 340 570, 335 580
                 C 330 570, 320 570, 320 580
                 C 320 600, 335 610, 335 610
                 C 335 610, 350 600, 350 580 Z"
              fill="none"
              stroke="#ec4899" 
              strokeWidth="2"
              filter="url(#glowGlobal)"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="relative space-y-0 h-[1450px] block">
          {/* 1. Left */}
          <div className="absolute left-0 top-[100px] w-full flex justify-start">
             <ProcessCard 
                number="1" 
                title="АНАЛІЗ БІЗНЕСУ" 
                description="Вивчення ніші, конкурентів та болей клієнтів для створення точної стратегії."
                icon={<Search />}
                align="left"
             />
          </div>
          {/* 2. Right */}
          <div className="absolute right-0 top-[300px] w-full flex justify-end">
            <ProcessCard 
                number="2" 
                title="СКЛАДАННЯ ПЛАНУ" 
                description="Розробка детальної стратегії та написання вірусних сценаріїв."
                icon={<FileText />}
                align="right"
            />
          </div>
          {/* 3. Left */}
          <div className="absolute left-0 top-[500px] w-full flex justify-start">
             <ProcessCard 
                number="3" 
                title="ДОГОВІР ПРО ДАТУ" 
                description="Бронювання дня зйомки та затвердження всіх організаційних моментів."
                icon={<Calendar />}
                align="left"
                className="pl-0 pr-24" 
            />
          </div>
          {/* 4. Right */}
          <div className="absolute right-0 top-[700px] w-full flex justify-end">
             <ProcessCard 
                number="4" 
                title="ЗЙОМКА" 
                description="Виїзд команди з обладнанням на вашу локацію."
                icon={<Video />}
                align="right"
            />
          </div>
          {/* 5. Left */}
           <div className="absolute left-0 top-[900px] w-full flex justify-start">
             <ProcessCard 
                number="5" 
                title="MOНТАЖ ТА ШІ" 
                description="Магія нейромереж, кіношний колір, саунд-дизайн та динамічний монтаж."
                icon={<Wand2 />}
                align="left"
            />
          </div>
          {/* 6. Right Bottom */}
          <div className="absolute right-0 top-[1150px] w-full flex justify-end">
             <ProcessCard 
                number="6" 
                title="РЕЗУЛЬТАТ" 
                description="Готовий контент, який приносить охоплення, лідів та впізнаваність."
                icon={<Trophy />}
                align="center"
                className="!w-[50%] !mr-0 !ml-auto"
                isHighlighted={true}
            />
          </div>
        </div>
      </div>


      {/* --- MOBILE VIEW: NEO-MINIMALISM STACKING --- */}
      <div className="md:hidden w-full px-4 pb-0">
        <h2 className="text-3xl font-bold text-left mb-12 pl-2 neon-text text-white">
          ПРОЦЕС
          <span className="block text-cyan-400 opacity-80 text-lg font-light tracking-widest mt-1">
             В 6 ЕТАПІВ
          </span>
        </h2>

        <div className="flex flex-col gap-4 relative">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="sticky transition-transform duration-500 ease-out will-change-transform"
              style={{ 
                // Stagger the sticky top position to create the "deck" effect
                top: `${80 + index * 10}px`,
                // Z-index ensures correct layering order
                zIndex: index + 10 
              }}
            >
              <div 
                className={`
                  relative 
                  flex flex-col justify-between
                  min-h-[55vh] 
                  w-full 
                  rounded-[2.5rem] 
                  border-[1px]
                  backdrop-blur-xl
                  overflow-hidden
                  p-8
                  group
                  ${step.isLast 
                    ? 'bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-950 border-cyan-400 shadow-[0_-10px_40px_rgba(34,211,238,0.15)]' 
                    : 'bg-[#0B1120] border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]'
                  }
                `}
              >
                {/* Neon Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[2.5rem]">
                   <div 
                     className="absolute top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-neon-shimmer"
                     style={{ animationDelay: `${index * 0.8}s` }} 
                   />
                </div>

                {/* 1. Giant Background Number */}
                <div 
                  className={`
                    absolute -right-4 -top-8 text-[10rem] font-black leading-none select-none pointer-events-none opacity-50
                    ${step.isLast ? 'text-cyan-500/10' : 'text-slate-800'}
                  `}
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  {step.id}
                </div>

                {/* 2. Header: Icon & Number */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                   <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center border
                      ${step.isLast 
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                        : 'bg-slate-800/50 border-slate-700 text-slate-400'
                      }
                   `}>
                     {step.icon}
                   </div>
                   
                   {!step.isLast && (
                     <span className="text-slate-600 font-mono text-sm tracking-widest border border-slate-800 rounded-full px-3 py-1">
                        STEP {step.id}
                     </span>
                   )}
                </div>

                {/* 3. Main Content */}
                <div className="mt-auto relative z-10">
                   <h3 className={`
                     text-2xl font-black uppercase mb-4 leading-tight
                     ${step.isLast ? 'text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'text-slate-100'}
                   `} style={{ fontFamily: 'Exo 2, sans-serif' }}>
                      {step.title}
                   </h3>
                   
                   <p className={`
                     text-base font-light leading-relaxed
                     ${step.isLast ? 'text-cyan-100' : 'text-slate-400'}
                   `}>
                      {step.desc}
                   </p>
                </div>

                {/* 4. Bottom Accent Line (for depth) */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 ${step.isLast ? 'bg-cyan-400' : 'bg-slate-800'}`}></div>
              </div>
            </div>
          ))}
          
          {/* Spacer reduced to minimal height */}
          <div className="h-4 w-full"></div>
        </div>
      </div>

    </section>
  );
};