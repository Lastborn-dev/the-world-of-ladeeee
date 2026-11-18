"use client";

import { useState } from "react";

const photos = [
  {
    src: "/images/gallery/just-ladeeee/IMG_2837@1639190513.jpg",
    alt: "Ladeeee seated in a black dress, resting her cheek on her hand",
    caption: "That little pose, that quiet confidence… you make looking effortlessly beautiful seem so easy."
  },
  {
    src: "/images/gallery/just-ladeeee/IMG_2838@-849219221 (1).jpg",
    alt: "A closer portrait of Ladeeee in her black dress and tinted glasses",
    caption: "And then there's this face. Honestly, I could get lost admiring it."
  },
  {
    src: "/images/gallery/just-ladeeee/IMG_2838@-849219221.jpg",
    alt: "Ladeeee tilting her head slightly with a soft pout",
    caption: "You tilted your head, gave the camera that look, and somehow made a simple picture unforgettable."
  },
  {
    src: "/images/gallery/just-ladeeee/IMG_8678@71130411.jpg",
    alt: "Ladeeee in a blue outfit and black cap, smiling at the camera",
    caption: "This little smile is trouble. The kind I wouldn't mind getting distracted by every day."
  },
  {
    src: "/images/gallery/just-ladeeee/IMG_8697@-1917310793.jpg",
    alt: "Ladeeee lying on the road and looking towards the camera",
    caption: "Even when you're doing the most unexpected things, you still manage to look this lovely."
  },
  {
    src: "/images/gallery/just-ladeeee/IMG_8699@444270027.jpg",
    alt: "Ladeeee resting on the road with her eyes closed",
    caption: "A quiet little moment, and still so beautiful. You don't even have to try."
  }
];

export default function JustLadeeeeGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = () => setSelected(null);
  const move = (direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + photos.length) % photos.length);
  };

  return (
    <section className="just-gallery" aria-label="Just Ladeeee photo collection">
      <div className="gallery-intro">
        <span className="gallery-ornament">✧ &nbsp; ❀ &nbsp; ✧</span>
        <p>THE FIRST COLLECTION</p>
        <h2>Just Ladeeee</h2>
        <span>Beautiful, simply being you.</span>
      </div>
      <div className="gallery-photo-grid">
        {photos.map((photo, index) => (
          <button className={`gallery-photo gallery-photo-${index % 3}`} key={photo.src} onClick={() => setSelected(index)} aria-label={`Open photo ${index + 1}`}>
            <span className="gallery-photo-inner">
              <img src={photo.src} alt={photo.alt} loading={index < 2 ? "eager" : "lazy"} />
            </span>
            <span className="gallery-photo-caption">{photo.caption}</span>
          </button>
        ))}
      </div>
      <p className="gallery-footnote">A few pages from a story that is still becoming.</p>

      {selected !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button className="gallery-close" onClick={close} aria-label="Close photo">×</button>
          <button className="gallery-arrow gallery-prev" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Previous photo">‹</button>
          <img src={photos[selected].src} alt={photos[selected].alt} onClick={(event) => event.stopPropagation()} />
          <button className="gallery-arrow gallery-next" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Next photo">›</button>
          <span className="gallery-counter">{String(selected + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
        </div>
      )}
    </section>
  );
}
