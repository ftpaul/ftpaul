'use client';

import React, { useEffect, useRef, useState } from 'react';

const ShapeSorterFinal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const distanceToTravel = rect.height;
      const currentScroll = window.scrollY + viewportHeight - containerRef.current.offsetTop;
      const rawProgress = currentScroll / distanceToTravel;
      setProgress(Math.min(Math.max(rawProgress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { 
      label: 'DESIGN', color: '#D4AF37', x: -250, y: -2000, r: -140, 
      path: "M10,5 h80 a25,25 0 0 1 5,5 v80 a25,25 0 0 1 -5,5 h-80 a25,25 0 0 1 -5,-5 v-80 a25,25 0 0 1 5,-5 z",
      clip: "inset(0% round 12px)",
      scaleSlot: 1.1 
    },
    { 
      label: 'TECH', color: '#4B7BEC', x: -80, y: -2600, r: 190, 
      path: "M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80", 
      clip: "circle(50% at 50% 50%)",
      scaleSlot: 1.25
    },
    { 
      label: 'PEOPLE', color: '#BC544B', x: 80, y: -2000, r: 50, 
      path: "M30 0 L70 0 L100 30 L100 70 L70 100 L30 100 L0 70 L0 30 Z",
      clip: "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%);",
      scaleSlot: 1.05
    },
    { 
      label: 'STRATEGY', color: '#1A2E26', x: 250, y: -2400, r: -110, 
      path: "M30 0 L70 0 L70 30 L100 30 L100 70 L70 70 L70 100 L30 100 L30 70 L0 70 L0 30 L30 30 Z", 
      clip: "polygon(30% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0% 70%, 0% 30%, 30% 30%)",
      scaleSlot: 1
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-transparent pointer-events-none overflow-hidden">
      
      <div className="absolute bottom-40 left-0 w-full flex justify-center items-center gap-6 md:gap-14 px-4">
        
        {shapes.map((shape, i) => (
          <div key={i} className="relative w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
            
            {/* THE FALLING SOLID SHAPE (Z-10) */}
            <div 
              className="absolute w-full h-full flex items-center justify-center text-white text-[9px] md:text-xs font-bold shadow-2xl z-10"
              style={{
                backgroundColor: shape.color,
                clipPath: shape.clip,
                transform: `
                  translate(
                    ${shape.x * (1 - progress)}px, 
                    ${shape.y * (1 - progress)}px
                  ) 
                  rotate(${shape.r * (1 - progress)}deg)
                  scale(${0.4 + (0.6 * progress)})
                `,
                opacity: progress > 0.02 ? 1 : 0,
                transition: 'transform 0.05s linear'
              }}
            >
              <span style={{ transform: `rotate(${-shape.r * (1 - progress)}deg)` }}>
                {shape.label}
              </span>
            </div>

            {/* THE DOTTED SLOT OVERLAY (Z-20) */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute w-full h-full z-20 pointer-events-none"
              style={{ 
                transform: `scale(${shape.scaleSlot})`,
                opacity: 0.5 
              }}
            >
              <path 
                d={shape.path} 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
                strokeLinecap="round"
              />
            </svg>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeSorterFinal;