'use client';
import { useEffect, useState } from 'react';

export default function LiveScrollBar() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 h-[60vh] flex flex-col items-center z-40 hidden md:flex">
      
      {/* Graffiti Pattern (Dots) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-0">
          {/* Row 1 (2 dots) */}
          <div className="flex justify-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
             <div className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
          </div>
          {/* Row 2 (3 dots) */}
          <div className="flex justify-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
             <div className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
             <div className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
          </div>
          {/* Rows 3-6 (4 dots) */}
          {[...Array(4)].map((_, r) => (
             <div key={r} className="flex justify-center gap-2">
                {[...Array(4)].map((_, c) => (
                    <div key={c} className="w-1.5 h-1.5 rounded-full border border-[#284390]"></div>
                ))}
             </div>
          ))}
      </div>

      {/* Start Circle */}
      <div className="w-5 h-5 rounded-full border-2 border-[#284390] bg-white mb-0 z-10 shrink-0 shadow-[0_0_10px_rgba(40,67,144,0.2)]"></div>

      {/* Track Line Container */}
      <div className="relative flex-1 w-[2px] bg-[#284390]/20 my-[-2px]">
          {/* Active Fill Line */}
          <div 
            className="absolute inset-0 w-full bg-[#284390] transition-all duration-75 ease-linear"
            style={{ height: `${scrollHeight}%` }}
          />
          
          {/* Moving Indicator Bulb */}
          <div 
             className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#284390] shadow-[0_0_10px_rgba(40,67,144,0.5)] transition-all duration-75 ease-linear"
             style={{ top: `${scrollHeight}%` }}
          />
      </div>

      {/* End Circle */}
      <div className="w-5 h-5 rounded-full border-2 border-[#284390] bg-white mt-0 z-10 shrink-0 shadow-[0_0_10px_rgba(40,67,144,0.2)]"></div>
    </div>
  );
}
