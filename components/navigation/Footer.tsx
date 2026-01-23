// components/FooterSorter.tsx
export default function FooterSorter() {
  return (
    <footer className="sorter-footer relative bg-green-600 py-20 px-10 overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Company Info Left Side */}
        <div className="text-white space-y-4 max-w-sm">
          <h2 className="text-2xl font-bold">Paulo Teixeira</h2>
          <p className="text-gray-200 text-sm font-medium">
            A creative problem-solver based in Berlin.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-200">© 2026 All rights reserved.</p>
          </div>
        </div>

        {/* Links - Center Column */}
        <div className="text-white space-y-4">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <nav className="flex flex-col space-y-3">
            <a
              href="mailto:hey@pauloteixeira.de"
              className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Email
            </a>
            <a
              href="https://linkedin.com/in/ftpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://joblyst.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
              </svg>
              Joblyst.tech
            </a>
          </nav>
        </div>

        {/* THE SORTER BOX - Right Side */}
        {/* Ensure overflow-visible so shapes don't clip as they enter */}
        <div className=" relative bg-[#ffb347] p-10 rounded-[2.5rem] border-[6px] border-[#e67e22] shadow-2xl overflow-visible">
          <div className="grid grid-cols-2 gap-8">
            
            {/* 1. Square Slot */}
            <div className="target-slot relative flex items-center justify-center w-16 h-16 bg-black/30 rounded-lg shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />
            

            {/* 3. Pill Slot (Matches Yellow Pill) */}
            <div className="target-slot relative flex items-center justify-center w-24 h-12 bg-black/30 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />

            
          
            {/* 4. Hexagon Slot (Matches Pink Hexagon) */}
            <div 
  className="target-slot relative w-20 h-20 bg-black/30 shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)]"
  style={{ 
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
  }}
>
  {/* The SVG Border Overlay */}
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon 
      points="20,0 80,0 100,100 0,100" 
      fill="none" 
      stroke="black" 
      strokeWidth="5" 
      strokeDasharray="4" 
      className="opacity-20"
    />
  </svg>
</div>

            {/* 2. Circle Slot (Matches Purple Circle) */}
            <div className="target-slot relative flex items-center justify-center w-16 h-16 bg-black/30 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] border-2 border-dashed border-white/10" />
            
          </div>
        </div>
      </div>
    </footer>
  );
}