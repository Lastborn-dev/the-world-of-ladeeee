"use client";

import { useState } from "react";

const photos = [
  {
    src: "/images/gallery/through-my-eyes/IMG_8678@71130411.jpg",
    alt: "Ladeeee in a blue outfit and black cap, photographed close up",
    caption: "I honestly don't even have a particular reason why I love this picture so much. I just do. Maybe it's the way you looked at the camera, maybe it's that little expression on your face, or maybe it's simply because it's you. Some pictures don't need an explanation; you just look at them and know they're special to you. This is one of those pictures for me."
  },
  {
    src: "/images/gallery/through-my-eyes/IMG_8697@-1917310793.jpg",
    alt: "Ladeeee lying on the road and looking towards the camera",
    caption: "I still remember telling you that day that you should be my model. 😂❤️ And honestly, look at you! I don't think you understood how serious I was about that suggestion. The pose, the confidence, the way you carried yourself… you made my little photography request worth it. If I ever need a model again, I already know who I'm calling."
  },
  {
    src: "/images/gallery/through-my-eyes/IMG_2668.jpg",
    alt: "Ladeeee sitting in her black dress with her hand resting against her cheek",
    caption: "I know you said you didn't like this picture either, but I love it. ❤️ This was Salah, and I remember seeing you in this outfit and thinking how lovely you looked. Maybe you notice little things in a picture that make you dislike it, but when I look at this one, I just see you looking beautiful. So yes, I'm keeping this one in my favourites. 😂❤️"
  },
  {
    src: "/images/gallery/through-my-eyes/IMG_2838@-849219221 (1).jpg",
    alt: "Ladeeee standing in her black dress and headwrap",
    caption: "This was the first time you wore this gown, and I remember how much I loved seeing you in it. There's something about this picture that makes me pause whenever I see it. The way you're sitting, the glasses, that calm expression… everything just came together. I don't know if you remember that moment the way I do, but I certainly remember loving this look."
  },
  {
    src: "/images/gallery/through-my-eyes/Snapchat-1239676082.jpg",
    alt: "A close, quiet moment of Ladeeee resting against my chest",
    caption: "This one is different. You were sleeping on my chest, and I remember how much I loved that little moment. There's no pose to admire, no camera direction, no effort to look a certain way. It's just you, comfortable enough to fall asleep right there with me. I love this picture because it reminds me of a kind of closeness that doesn't need words. If I could keep little moments like that forever, I honestly would."
  }
];

export default function ThroughMyEyes() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = () => setSelected(null);
  const move = (direction: number) => {
    if (selected === null) return;
    setSelected((selected + direction + photos.length) % photos.length);
  };

  return (
    <section className="just-gallery through-eyes-gallery" aria-label="Through My Eyes photo collection">
      <div className="gallery-intro">
        <span className="gallery-ornament">✧ &nbsp; ❀ &nbsp; ✧</span>
        <p>THE SECOND COLLECTION</p>
        <h2>Through My Eyes</h2>
        <span>Little things I noticed, and moments I wanted to keep.</span>
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
      <p className="gallery-footnote">Some pictures are favourites for reasons only the heart understands. ♡</p>
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
