// components/FooterSorter.tsx
export default function FooterSorter() {
  return (
    <footer className="sorter-footer relative mt-20 bg-green-600 py-20 px-10 overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Company Info Left Side */}
        <div className="text-white space-y-4 max-w-sm">
          <h2 className="text-2xl font-bold">Company</h2>
          <p className="text-gray-400 text-sm">
            Building playful experiences with modern web tech.
          </p>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500">© 2026 Your Company. All rights reserved.</p>
          </div>
        </div>

        {/* THE SORTER BOX - Right Side */}
        {/* Ensure overflow-visible so shapes don't clip as they enter */}
        <div className=" relative bg-[#ffb347] p-10 rounded-[2.5rem] border-[6px] border-[#e67e22] shadow-2xl overflow-visible">
          <div className="grid grid-cols-2 gap-8">
            
            {/* 1. Square Slot */}
            <div className="target-slot relative flex items-center justify-center w-16 h-16 bg-black/30 rounded-lg shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />
            

            {/* 3. Pill Slot (Matches Yellow Pill) */}
            <div className="target-slot relative flex items-center justify-center w-24 h-12 bg-black/30 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />

            
            
            
            
            {/* 4. Star Slot (Matches Pink Star) */}
            <div 
              className="target-slot relative flex items-center justify-center w-20 h-20 bg-black/30 shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            />

            {/* 2. Circle Slot (Matches Purple Circle) */}
            <div className="target-slot relative flex items-center justify-center w-16 h-16 bg-black/30 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />
            
          </div>
        </div>
      </div>
    </footer>
  );
}