// src/components/Timeline.jsx
import { motion } from "framer-motion";

export default function Timeline({ items = [] }) {
  return (
    <section className="px-4 sm:px-6 md:px-10 mt-12">
      <h3 className="text-lg sm:text-2xl font-bold mb-6">Our Story</h3>

      {/* Vertical timeline line */}
      <div className="relative border-l border-red-500/40 ml-4 space-y-6">
        {items.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="ml-6 glass-card rounded-xl p-4 relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[31px] top-5 w-4 h-4 rounded-full bg-red-600" />

            <p className="text-xs text-red-300">{event.date}</p>
            <h4 className="text-lg font-bold">{event.title}</h4>
            <p className="text-zinc-300 text-sm">{event.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}