// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import VideoModal from "./components/VideoModal";
import Timeline from "./components/Timeline";
import PhotoSection from "./components/PhotoSection";
import MemoriesSection from "./components/MemoriesSection";
import Footer from "./components/Footer";
import PasswordGate from "./components/PasswordGate";
import {
  allVideos,
  allPhotos,
  storyTimeline,
  memoryVideoItems
} from "./data/Memories";
import reel from "./assets/videos/reel.mp4";

function HomePage({ onPlayReel }) {
  return (
    <>
      <Hero onPlay={onPlayReel} />
      <section className="px-4 sm:px-6 md:px-10 py-8">
        <Timeline items={storyTimeline} />
      </section>
    </>
  );
}

function MemoriesPage({ onOpenMemoryVideo }) {
  return (
    <section className="pt-24 px-4 sm:px-6 md:px-10 py-8 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Memories</h1>
      <MemoriesSection items={memoryVideoItems} onOpen={onOpenMemoryVideo} />
    </section>
  );
}

function VideosPage({ onOpenVideo }) {
  return (
    <section className="pt-24 px-4 sm:px-6 md:px-10 py-8 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>
      <VideoSection videos={allVideos} onOpenVideo={onOpenVideo} />
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="pt-24 px-4 sm:px-6 md:px-10 py-8 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <PhotoSection photos={allPhotos} />
    </section>
  );
}

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Hero reel opens with sound
  const handlePlayReel = () => {
    setActiveVideo({
      title: "Our Reel ❤️",
      video: reel,
      isReel: true
    });
  };

  // All normal videos/memories open muted
  const handleOpenVideo = (videoItem) => {
    setActiveVideo({
      ...videoItem,
      isReel: false
    });
  };

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage onPlayReel={handlePlayReel} />} />
        <Route
          path="/memories"
          element={<MemoriesPage onOpenMemoryVideo={handleOpenVideo} />}
        />
        <Route
          path="/videos"
          element={<VideosPage onOpenVideo={handleOpenVideo} />}
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/memories" element={<MemoriesPage onOpenMemoryVideo={handleOpenVideo} />} />
      </Routes>

      <Footer />

      <VideoModal
        open={!!activeVideo}
        src={activeVideo?.video}
        title={activeVideo?.title}
        isReel={activeVideo?.isReel}
        onClose={() => setActiveVideo(null)}
      />
    </main>
  );
}