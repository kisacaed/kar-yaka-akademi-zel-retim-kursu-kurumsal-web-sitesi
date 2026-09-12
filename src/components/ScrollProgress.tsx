import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowTopBtn(latest > 400);
    });
  }, [scrollY]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/80 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Back to Top Button (Positioned at bottom-left to avoid colliding with WhatsApp CTA on bottom-right) */}
      <motion.button
        id="btn-back-to-top"
        aria-label="Yukarı Kaydır"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={
          showTopBtn
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.7, y: 20 }
        }
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white px-3.5 py-2.5 rounded-full shadow-xl shadow-slate-950/40 border border-slate-700/80 backdrop-blur-md cursor-pointer transition-colors group"
      >
        <ArrowUp className="w-4 h-4 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
        <span className="text-xs font-bold tracking-wide text-slate-200 pr-1">
          %{scrollPercent}
        </span>
      </motion.button>
    </>
  );
}
