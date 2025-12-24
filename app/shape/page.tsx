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
      
      // Calculate progress based on when the section is in view
      const distanceToTravel = rect.height;
      const currentScroll = window.scrollY + viewportHeight - containerRef.current.offsetTop;
      const rawProgress = currentScroll / distanceToTravel;
      
      setProgress(Math.min(Math.max(rawProgress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { label: 'DESIGN', color: '#D4AF37', x: -250, y: -2200, r: -140, type: 'rounded' },
    { label: 'TECH', color: '#3A7BD5', x: -80, y: -2600, r: 190, type: 'circle' },
    { label: 'PEOPLE', color: '#BC544B', x: 80, y: -2000, r: 60, type: 'triangle' },
    { label: 'STRATEGY', color: '#1A2E26', x: 250, y: -2400, r: -110, type: 'cross' }
  ];

  // Shared geometric styles to ensure Slot and Block match perfectly
  const getGeometry = (type: string, isBlock: boolean) => {
    const styles: React.CSSProperties = {};
    
    if (type === 'circle') {
      styles.clipPath = 'circle(50% at 50% 50%)';
    } else if (type === 'triangle') {
      styles.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
    } else if (type === 'cross') {
      styles.clipPath = 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)';
    } else {
      // For 'rounded' square, we use border radius
      // If it's the block, it morphs from very round to slightly rounded
      styles.borderRadius = isBlock ? `${40 - (30 * progress)}%` : '12px';
    }
    return styles;
  };

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-transparent pointer-events-none">
      
      <div className="absolute bottom-40 left-0 w-full flex justify-center gap-4 md:gap-10 px-4">
        
        {shapes.map((shape, i) => (
          <div key={i} className="relative w-20 h-20 md:w-32 md:h-32">
            
            {/* THE MATCHING SLOT (Hollow Target) */}
            <div 
              className="w-full h-full border-2 border-dashed border-gray-400 opacity-20"
              style={getGeometry(shape.type, false)}
            />

            {/* THE FALLING BLOCK */}
            <div 
              className="absolute inset-0 flex items-center justify-center text-white text-[9px] md:text-xs font-bold shadow-2xl transition-all duration-75 ease-out"
              style={{
                ...getGeometry(shape.type, true),
                backgroundColor: shape.color,
                transform: `
                  translate(
                    ${shape.x * (1 - progress)}px, 
                    ${shape.y * (1 - progress)}px
                  ) 
                  rotate(${shape.r * (1 - progress)}deg)
                  scale(${0.4 + (0.6 * progress)})
                `,
                opacity: progress > 0.02 ? 1 : 0,
              }}
            >
              <span style={{ transform: `rotate(${-shape.r * (1 - progress)}deg)` }}>
                {shape.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapeSorterFinal;