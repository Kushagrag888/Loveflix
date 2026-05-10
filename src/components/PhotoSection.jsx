export default function PhotoSection({ photos = [] }) {
  return (
    <section className="px-4 sm:px-6 md:px-10 mt-10">
      <h3 className="text-lg sm:text-2xl font-bold mb-3">Photos</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900"
          >
            <img src={photo.image} alt={photo.title} className="w-full h-40 object-cover" />
            <div className="p-2 text-sm text-zinc-200">{photo.title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}