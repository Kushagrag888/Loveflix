// src/components/Hero.jsx
import { useRef, useState } from "react";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import reel from "../assets/videos/reel.mp4";

export default function Hero({ onPlay }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-end">
      {/* Background reel */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={reel}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 cinematic-overlay" />

      {/* Mute / Unmute floating button */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-4 z-20 bg-black/60 hover:bg-black/80 border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        {isMuted ? "Unmute" : "Mute"}
      </button>

      {/* Hero content */}
      <div className="relative z-10 p-5 sm:p-10 md:p-16 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Life of Kushagra & Yashita
        </h2>
        <p className="mt-3 text-zinc-200 text-sm sm:text-lg">
          Our favorite memories together
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onPlay}
            className="bg-white text-black px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 hover:bg-zinc-200 transition"
          >
            <FaPlay /> Play
          </button>

          <button className="bg-zinc-600/80 text-white px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 hover:bg-zinc-500 transition">
            <IoInformationCircleOutline size={22} /> More Info
          </button>
        </div>
      </div>
    </section>
  );
}
  