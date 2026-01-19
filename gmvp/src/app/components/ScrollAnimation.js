'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to check reveal
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal");
      var windowHeight = window.innerHeight;
      var elementVisible = 100;

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Trigger distance

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
             // Optional: Remove active to re-animate when scrolling up? 
             // Usually better to keep it once revealed for smoother UX.
             // reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    
    // Initial check on load and route change
    // Using setTimeout to ensure DOM is ready
    setTimeout(reveal, 100); 

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, [pathname]); // Re-run on path change

  return null; // This component handles side effects only
}
