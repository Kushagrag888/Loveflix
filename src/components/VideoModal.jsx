// src/components/VideoModal.jsx
import { AnimatePresence, motion } from "framer-motion";


 export default function VideoModal({ open, src, title, onClose, isReel = false }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold">{title}</h4>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>

        <video
          src={src}
          controls
          autoPlay
          muted={!isReel}   // only reel has sound
          playsInline
          className="w-full rounded-xl max-h-[80vh] bg-black"
        />
      </div>
    </div>
  );
}