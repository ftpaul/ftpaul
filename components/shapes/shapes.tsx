// components/FloatingShapes.tsx
export default function FloatingShapes() {
  const commonStyles = {
  position: 'fixed' as const,
  zIndex: 9999, // Ensure it is above the footer and all content
  pointerEvents: 'none' as const,
  left: '0%', 
  top: '0%',
  marginTop: '-32px', // Half the height of your 16x16 shapes (w-16 = 64px)
  marginLeft: '-32px', // Half the width
  
};

  return (
    <>
      <div 
        className="floating-shape w-16 h-16 bg-[#4285f4] rounded-lg shadow-lg"
        style={{ ...commonStyles, top: '15%', left: '10%' }} 
      />

      <div 
        className="floating-shape w-24 h-12 bg-[#fbbc05] rounded-full shadow-lg"
        style={{ ...commonStyles, top: '70%', left: '20%' }} 
      />

      <div 
        className="floating-shape w-20 h-20 bg-[#ff4081]"
        style={{ 
          ...commonStyles,
          top: '25%', 
          left: '75%',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
        }} 
      />

      <div 
        className="floating-shape w-16 h-16 bg-[#a142f4] rounded-full shadow-lg"
        style={{ ...commonStyles, top: '60%', left: '85%' }} 
      />
    </>
  );
}