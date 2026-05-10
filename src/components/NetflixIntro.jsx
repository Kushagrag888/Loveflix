// src/components/NetflixIntro.jsx
import { AnimatePresence, motion } from "framer-motion";

export default function NetflixIntro({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.08, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-black text-red-600 tracking-widest tudum-glow"
          >
            TUDUM
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}