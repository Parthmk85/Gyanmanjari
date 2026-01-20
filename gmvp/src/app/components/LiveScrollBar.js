'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LiveScrollBar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/login') return null;

  // Circle configuration
  const size = 120;
  const strokeWidth = 1.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - scrollProgress * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const percentage = scrollProgress * 100;

  return (
    <>
      {/* Circular Scroll Indicator REMOVED as per request */}

      {/* 2. Original Vertical Timeline ScrollBar (Left Side) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 h-[60vh] flex flex-col items-center z-40 hidden md:flex">
        
        {/* Graffiti Pattern REMOVED as per request */}

        {/* Start Circle */}
        <div className="w-5 h-5 rounded-full border-2 border-[#284390] bg-white mb-0 z-10 shrink-0 shadow-[0_0_10px_rgba(40,67,144,0.2)]"></div>

        {/* Track Line Container */}
        <div className="relative flex-1 w-[2px] bg-[#284390]/20 my-[-2px]">
            {/* Active Fill Line */}
            <div 
              className="absolute inset-0 w-full bg-[#284390] transition-all duration-75 ease-linear"
              style={{ height: `${percentage}%` }}
            />
            
            {/* Moving Indicator Bulb */}
            <div 
               className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#284390] shadow-[0_0_10px_rgba(40,67,144,0.5)] transition-all duration-75 ease-linear"
               style={{ top: `${percentage}%` }}
            />
        </div>

        {/* End Circle */}
        <div className="w-5 h-5 rounded-full border-2 border-[#284390] bg-white mt-0 z-10 shrink-0 shadow-[0_0_10px_rgba(40,67,144,0.2)]"></div>
      </div>
    </>
  );
}
