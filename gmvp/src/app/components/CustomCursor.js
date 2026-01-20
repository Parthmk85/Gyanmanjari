'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Store positions in refs to avoid re-renders on every frame
  const cursorPosition = useRef({ x: -100, y: -100 });
  const trailerPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const moveCursor = (e) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
      
      // Move main cursor instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      // Check for common interactive elements and specific project classes
      if (e.target.closest('a, button, input, textarea, select, .cursor-pointer, .facility-tab, .facility-list-item, .gallery-card, .program-card-new, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop for the trailing circle
    let animationFrameId;
    
    const animateTrailer = () => {
      const { x: targetX, y: targetY } = cursorPosition.current;
      const { x: currentX, y: currentY } = trailerPosition.current;

      // Linear interpolation (lerp) for smooth trailing
      // 0.08 is the speed factor (0 = no move, 1 = instant) - Lower = More Delay
      const newX = currentX + (targetX - currentX) * 0.08;
      const newY = currentY + (targetY - currentY) * 0.08;

      trailerPosition.current = { x: newX, y: newY };

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateTrailer);
    };

    animateTrailer();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main Cursor (Dot/Ring) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform w-3 h-3 bg-[#284390]"
      />
      
      {/* Tracing Circle (Delayed) */}
      <div
        ref={trailerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform border-4 border-[#284390] opacity-30 transition-[width,height] duration-300 ease-out ${
          isHovering
            ? 'w-16 h-16'
            : 'w-8 h-8'
        }`}
      />
    </>
  );
}
