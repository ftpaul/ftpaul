'use client';

import React, { useEffect, useState } from 'react';

const HomepageShapeSystem = () => {
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [winWidth, setWinWidth] = useState(0);

  // 1. DEFINE CONFIG FIRST (Prevents initialization error)
  const baseGreen = '#D1E7DD'; 
  
  const shapes = [
    { id: 'square', startLeft: '10%', startTop: '20%', startR: -12, path: "M10,5 h88 a27.5,27.5 0 0 1 5.5,5.5 v88 a27.5,27.5 0 0 1 -5.5,5.5 h-88 a27.5,27.5 0 0 1 -5.5,-5.5 v-88 a27.5,27.5 0 0 1 5.5,-5.5 z", clip: "inset(0% round 12px)" },
    { id: 'circle', startLeft: '12%', startTop: '70%', startR: 15, path: "M50,0 a45,45 0 1,1 0,100 a45,45 0 1,1 0,-100", clip: "circle(50% at 50% 50%)" },
    { id: 'hex', startLeft: '75%', startTop: '25%', startR: 10, path: "M30 0 L70 0 L100 30 L100 70 L70 100 L30 100 L0 70 L0 30 Z", clip: "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)" },
    { id: 'plus', startLeft: '70%', startTop: '65%', startR: -8, path: "M30 0 L70 0 L70 30 L100 30 L100 70 L70 70 L70 100 L30 100 L30 70 L0 70 L0 30 L30 30 Z", clip: "polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)"}
  ];

  useEffect(() => {
    setIsClient(true);
    setWinWidth(window.innerWidth);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const totalHeight = scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const rawProgress = window.scrollY / totalHeight;
      const adjustedProgress = Math.min(Math.max((rawProgress - 0.05) / 0.95, 0), 1);
      setProgress(adjustedProgress);
    };

    const handleResize = () => setWinWidth(window.innerWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isClient) return null;

  // 2. MATH CONSTANTS
  const slotSize = winWidth > 768 ? 192 : 120; 
  const gapSize = winWidth > 768 ? 56 : 40;  // <--- Tweak this to change the gap
  const totalWidth = (shapes.length * slotSize) + ((shapes.length - 1) * gapSize);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(var(--base-rot)); }
          50% { transform: translate(-50%, -50%) translateY(-20px) rotate(calc(var(--base-rot) + 5deg)); }
        }
        .float-enabled { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* THE SLOTS - CENTERING LOGIC */}
      <div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex justify-center items-center transition-opacity duration-700"
        style={{ 
            opacity: progress > 0.8 ? 0.3 : 0,
            gap: `${gapSize}px`,
            width: `${totalWidth}px`
        }}
      >
        {shapes.map((shape, i) => (
          <div key={`slot-${i}`} style={{ width: `${slotSize}px`, height: `${slotSize}px` }} className="flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path d={shape.path} fill="none" stroke="#4b5563" 
                strokeWidth="1.5" // Slightly thicker looks better for pure dots
                strokeDasharray="0.1 4" // 0.1 length makes it a dot, 3 is the spacing
                strokeLinecap="round"   // This makes the 0.1 length path a perfect circle
                className="opacity-40" 
                 />
             </svg>
          </div>
        ))}
      </div>

      {/* THE SHAPES - FLIGHT LOGIC */}
      <div className="absolute inset-0">
        {shapes.map((shape, i) => {
          const startOfSlots = (winWidth / 2) - (totalWidth / 2);
          const targetPixelX = startOfSlots + (i * (slotSize + gapSize)) + (slotSize / 2);
          const targetTop = window.innerHeight - 80 - (slotSize / 2); 

          return (
            <div 
              key={shape.id}
              className={`-z-10 absolute flex items-center justify-center ${progress < 0.02 ? 'float-enabled' : ''}`}
              style={{
                width: `${slotSize}px`,
                height: `${slotSize}px`,
                '--base-rot': `${shape.startR}deg`,
                backgroundColor: baseGreen,
                clipPath: shape.clip,
                opacity: 0.7,
                left: `calc(${shape.startLeft} + (${targetPixelX}px - ${shape.startLeft}) * ${progress})`,
                top: `calc(${shape.startTop} + (${targetTop}px - ${shape.startTop}) * ${progress})`,
                transform: `
                  translate(-50%, -50%) 
                  rotate(${shape.startR + (0 - shape.startR) * progress}deg)
                `,
                transition: 'none'
              } as any}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomepageShapeSystem;