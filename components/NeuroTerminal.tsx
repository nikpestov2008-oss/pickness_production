import React, { useRef, useEffect, useState } from 'react';

export const NeuroTerminal: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Animation state refs (mutable, non-rendering)
  const rotationXRef = useRef(0);
  const isMovingRef = useRef(false);
  const driftTimeRef = useRef(0);
  const animationFrameRef = useRef<number>(0);

  // Smart Rotation Logic State
  const lastFaceIndex = useRef(0); // Tracks logical face index (0-3)
  const deckRef = useRef<number[]>([]); // "Bag" of available next faces

  // Helper: Get next unique face ensuring no immediate repeats and full coverage
  const getNextFace = (current: number) => {
    // If deck is empty, refill it with all numbers 0-3 EXCEPT the current one
    if (deckRef.current.length === 0) {
      const newDeck = [0, 1, 2, 3].filter(f => f !== current);
      // Shuffle the new deck (Fisher-Yates shuffle)
      for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
      }
      deckRef.current = newDeck;
    }
    // Return and remove the last item from the deck
    return deckRef.current.pop() as number;
  };

  const handleScan = () => {
    if (isMovingRef.current || !cubeRef.current) return;

    if (!hasInteracted) setHasInteracted(true);

    isMovingRef.current = true;
    setIsScanning(true);

    // 1. Identify current face
    const current = lastFaceIndex.current;

    // 2. Pick a target face using smart shuffle (guarantees no repeat)
    const target = getNextFace(current);
    lastFaceIndex.current = target;

    // 3. Calculate steps needed to rotate FORWARD to the target
    // Logic: If we are at 0 and want 3, we need 3 steps.
    // If we are at 3 and want 0, diff is -3. Add 4 => 1 step.
    let stepsForward = target - current;
    if (stepsForward <= 0) stepsForward += 4;

    // 4. Apply rotation: Add 2 full spins (720deg) + calculated steps
    rotationXRef.current += (stepsForward * 90) + 720;

    // Apply main rotation immediately so CSS transition takes over
    cubeRef.current.style.transform = `rotateX(${rotationXRef.current}deg)`;

    // Reset moving state after animation
    setTimeout(() => {
      isMovingRef.current = false;
      setIsScanning(false);
    }, 1200);
  };

  useEffect(() => {
    const animate = () => {
      // Idle animation: only drift if not currently scanning/moving
      if (!isMovingRef.current && cubeRef.current) {
        driftTimeRef.current += 0.03;
        const tiltX = Math.sin(driftTimeRef.current) * 2;
        const tiltY = Math.cos(driftTimeRef.current) * 2;
        // We add the tilt to the accumulated rotation
        cubeRef.current.style.transform = `rotateX(${rotationXRef.current + tiltX}deg) rotateY(${tiltY}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section className="w-full py-2 flex justify-center items-center relative z-20 px-4">
      <style>{`
        .terminal-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 35px;
            perspective: 1000px;
            width: 100%;
        }

        /* CYBER FRAME */
        .scanner-frame {
            position: relative;
            padding: 4px;
            border-radius: 22px;
            background: linear-gradient(135deg, #06b6d4, #a855f7);
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(168, 85, 247, 0.1);
            transition: box-shadow 0.5s ease;
            width: 100%;
            max-width: 500px; /* PC Width cap */
        }

        .scanner-frame.active-glow {
            box-shadow: 0 0 50px #06b6d4, 0 0 100px #a855f7;
        }

        .scene {
            width: 100%;
            height: 160px;
            perspective: 2500px;
            background: #020617;
            border-radius: 18px;
            overflow: hidden;
            position: relative;
        }

        .data-cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 1.2s cubic-bezier(0.15, 0.85, 0.35, 1);
        }

        .face {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.98);
            border: 1px solid rgba(6, 182, 212, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            backface-visibility: hidden;
            box-sizing: border-box;
            padding: 20px;
        }

        /* GEOMETRY FIX */
        /* Translate Z is half of height (160px / 2 = 80px) */
        .face:nth-child(1) { transform: rotateX(0deg) translateZ(80px); }
        .face:nth-child(2) { transform: rotateX(-90deg) translateZ(80px); }
        .face:nth-child(3) { transform: rotateX(-180deg) translateZ(80px); }
        .face:nth-child(4) { transform: rotateX(-270deg) translateZ(80px); }

        .term-title {
            font-size: 21px;
            font-weight: 900;
            text-transform: uppercase;
            color: #22d3ee;
            text-shadow: 0 0 12px rgba(34, 211, 238, 0.7);
            margin-bottom: 8px;
            text-align: center;
            font-family: 'Exo 2', sans-serif;
        }

        .term-description {
            font-size: 20px;
            font-weight: 900; 
            color: #fff;
            text-align: center;
            line-height: 1.2;
            max-width: 90%;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
            font-family: 'Inter', sans-serif;
        }
        
        /* Mobile Text Adjustments */
        @media (max-width: 640px) {
            .term-title { font-size: 16px; margin-bottom: 6px; }
            .term-description { font-size: 15px; line-height: 1.3; }
        }

        /* SCANNING LINE */
        .scanning-line {
            position: absolute;
            width: 100%;
            height: 3px;
            background: #22d3ee;
            box-shadow: 0 0 20px #22d3ee, 0 0 40px #22d3ee;
            top: -10%;
            left: 0;
            z-index: 30;
            opacity: 0;
            pointer-events: none;
        }

        .is-scanning .scanning-line {
            animation: scanMove 1.2s linear infinite;
            opacity: 1;
        }

        @keyframes scanMove {
            0% { top: -10%; }
            100% { top: 110%; }
        }

        /* BUTTON */
        .scan-btn {
            padding: 18px 50px;
            font-size: 19px;
            font-weight: 900;
            text-transform: uppercase;
            color: #22d3ee;
            background: rgba(34, 211, 238, 0.05);
            border: 2px solid #22d3ee;
            border-radius: 12px;
            cursor: pointer;
            letter-spacing: 2px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
            font-family: 'Exo 2', sans-serif;
            width: 100%;
            max-width: 300px;
        }

        @media (max-width: 640px) {
             .scan-btn { padding: 15px 30px; font-size: 16px; }
        }

        .scan-btn:hover {
            background: #22d3ee;
            color: #000;
            box-shadow: 0 0 40px #22d3ee;
            transform: translateY(-2px);
        }

        .scan-btn:active {
            transform: scale(0.96);
        }

        .click-hint {
            position: absolute;
            bottom: -30px;
            color: rgba(34, 211, 238, 0.7);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            pointer-events: none;
            font-family: 'Exo 2', sans-serif;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
      `}</style>
      
      <div className="terminal-container">
          <div ref={frameRef} className={`scanner-frame ${isScanning ? 'active-glow is-scanning' : ''}`}>
              <div className="scanning-line"></div>
              <div className="scene">
                  <div ref={cubeRef} className="data-cube">
                      <div className="face">
                          <div className="term-title">🎯 ГЛИБОКИЙ АНАЛІЗ ВАШОГО БРЕНДУ</div>
                          <div className="term-description">Наша команда вручну вивчає вашу нішу та болі клієнтів.</div>
                      </div>
                      <div className="face">
                          <div className="term-title">🤝 БУДЬ-ЯКІ МЕТОДИ ОПЛАТИ</div>
                          <div className="term-description">Готівка, карта або крипта — обирайте, як вам зручно.</div>
                      </div>
                      <div className="face">
                          <div className="term-title">🎬 ВІДЕО, ЩО ПРОДАЮТЬ</div>
                          <div className="term-description">Контент, який перетворює глядачів на реальних клієнтів.</div>
                      </div>
                      <div className="face">
                          <div className="term-title">🚀 ПОЧНІТЬ РІК З ОХОПЛЕНЬ</div>
                          <div className="term-description">Перший крок — безкоштовний аналіз вашої ніші сьогодні.</div>
                      </div>
                  </div>
              </div>
          </div>

          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button className="scan-btn" onClick={handleScan}>Ми пропонуємо</button>
            {!hasInteracted && (
                <div className="click-hint">( тисни )</div>
            )}
          </div>
      </div>
    </section>
  );
};