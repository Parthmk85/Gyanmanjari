'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, select, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform ${
        isHovering
          ? 'w-12 h-12 bg-transparent border-2 border-black'
          : 'w-6 h-6 bg-black/50'
      }`}
    />
  );
}
