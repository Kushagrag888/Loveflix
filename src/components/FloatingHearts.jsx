// src/components/FloatingHearts.jsx
import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 12 });

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-red-500/60"
          initial={{ y: "110vh", x: `${i * 8}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
          transition={{ duration: 8 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
          style={{ left: `${(i * 9) % 100}%` }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}