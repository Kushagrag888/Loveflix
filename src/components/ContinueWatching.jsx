// src/components/ContinueWatching.jsx
import mem2 from "../assets/images/mem2.jpeg";

export default function ContinueWatching() {
  return (
    <section className="px-4 sm:px-6 md:px-10 mt-10">
      <h3 className="text-lg sm:text-2xl font-bold mb-3">Continue Watching Our Story ❤️</h3>
      <div className="rounded-xl overflow-hidden glass-card max-w-3xl">
        <img src={mem2} alt="Continue watching" className="w-full h-52 object-cover" />
        <div className="p-4">
          <p className="font-semibold">Episode: Endless Us</p>
          <div className="w-full h-1.5 bg-zinc-700 rounded mt-2">
            <div className="h-full w-1/2 bg-red-600 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}