"use client";

const clips = [
  {
    src: "/videos/gallery/moving-memories/Snapchat-1911379241.mp4",
    caption: "A little moment I'd happily press replay on."
  },
  {
    src: "/videos/gallery/moving-memories/Snapchat-1058303835.mp4",
    caption: "Some memories are small, but they mean so much."
  },
  {
    src: "/videos/gallery/moving-memories/Snapchat-1982736981.mp4",
    caption: "One of those moments that deserves a place in our story."
  },
  {
    src: "/videos/gallery/moving-memories/Snapchat-1623126007.mp4",
    caption: "I didn't know then how much I'd love looking back at this."
  },
  {
    src: "/videos/gallery/moving-memories/Snapchat-1911379241.mp4",
    caption: "Just us, a little moment, and something worth keeping."
  }
];

export default function MovingMemories() {
  return (
    <section className="moving-memories" aria-label="Moving Memories video collection">
      <div className="gallery-intro moving-memories-intro">
        <span className="gallery-ornament">✧ &nbsp; 🎞 &nbsp; ✧</span>
        <p>THE SECOND COLLECTION</p>
        <h2>Moving Memories</h2>
        <span>Little moments, kept in motion.</span>
      </div>
      <div className="memory-film-grid">
        {clips.map((clip, index) => (
          <article className="memory-film-card" key={clip.src + index}>
            <div className="memory-film-topline">
              <span>HOME MOVIE</span>
              <span>NO. {String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="memory-film-frame">
              <video
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
                aria-label={`Moving memory ${index + 1}`}
              >
                <source src={clip.src} type="video/mp4" />
                Your browser does not support this video.
              </video>
            </div>
            <p className="memory-film-caption">{clip.caption}</p>
            <div className="memory-film-footer">A MOMENT TO KEEP · ♡</div>
          </article>
        ))}
      </div>
    </section>
  );
}
