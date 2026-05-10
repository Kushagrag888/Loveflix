// export default function VideoSection({ videos = [], onOpenVideo }) {
//   return (
//     <section className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Video Memories</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {videos.map((videoItem) => (
//           <button
//             key={videoItem.id}
//             onClick={() => onOpenVideo(videoItem)}
//             className="text-left rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition"
//           >
//             <img
//               src={videoItem.thumbnail}
//               alt={videoItem.title}
//               className="w-full h-44 object-cover"
//             />
//             <div className="p-3">
//               <p className="font-semibold">{videoItem.title}</p>
//               <p className="text-xs text-zinc-400">
//                 Duration: {videoItem.duration || "--:--"}
//               </p>
//             </div>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }
export default function VideoSection({ videos = [], onOpenVideo = () => {} }) {
  return (
    <section style={{ marginTop: 20, color: "white" }}>
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>Video Memories</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
        {videos.map((videoItem) => (
          <button
            key={videoItem.id}
            onClick={() => onOpenVideo(videoItem)}
            style={{
              textAlign: "left",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #3f3f46",
              background: "#18181b",
              color: "white",
              cursor: "pointer"
            }}
          >
            <img
              src={videoItem.thumbnail}
              alt={videoItem.title}
              style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 12 }}>
              <p style={{ fontWeight: 600 }}>{videoItem.title}</p>
              <p style={{ fontSize: 12, color: "#a1a1aa" }}>
                Duration: {videoItem.duration || "--:--"}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}