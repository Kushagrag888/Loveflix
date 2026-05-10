// src/components/MemoriesSection.jsx
export default function MemoriesSection({ photos = [] }) {
  return (
    <section className="mt-2">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Memories ❤️</h2>
      <p className="text-zinc-300 mb-6">
        Every frame is a moment we lived, smiled, and loved together.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 hover:border-red-500/50 transition"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-64 object-cover hover:scale-105 transition duration-500"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{photo.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">
                A beautiful memory from our journey.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}