import { motion, useSpring, useTransform, useScroll } from 'motion/react';
import { useRef, useEffect } from 'react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'auto' }}>
      {children}
    </div>
  );
}

export default SmoothScroll;