import Link from "next/link";
import { notFound } from "next/navigation";
import JustLadeeeeGallery from "./gallery-viewer";
import MovingMemories from "./moving-memories";

const roomContent: Record<string, { title: string; intro: string; note: string }> = {
  gallery: { title: "Her Gallery", intro: "A place for every version of you I adore.", note: "The four collections are being prepared: Just Ladeeee, The Little Moments, Through My Eyes, and Moving Memories." },
  "100-reasons": { title: "100 Reasons Why I Love You", intro: "One hundred reasons. A hundred little reminders.", note: "Your letters will arrive in five collections, with a few surprises waiting to be discovered." },
  games: { title: "Games Room", intro: "Ready for a little fun, Ladeeee?", note: "Six games are planned for this room, from Memory Lane to the Constellation of Ladeeee." },
  letters: { title: "Letters From My Heart", intro: "For every kind of day, there is a letter here for you.", note: "A cabinet of handwritten-style letters, waiting for the moments you need them." },
  memories: { title: "Our Memories", intro: "Little moments, kept close.", note: "Wander through this scrapbook in any order. Every page will hold a moment worth keeping." },
  soundtrack: { title: "Her Soundtrack", intro: "A few songs, and all the feelings attached to them.", note: "Each song will have its own little note. Nothing will play unless you press play." },
  secrets: { title: "Secret Universe", intro: "Not everything reveals itself at first glance.", note: "Look closely. Hidden messages, clues, and little surprises will find their way here." },
  "chapter-20": { title: "Chapter 20", intro: "Happy birthday, Sofiat.", note: "A birthday celebration made just for you, with a wish, a cake, and a new chapter." },
  "birthday-film": { title: "A Girl Like No Other", intro: "A little film about someone extraordinary.", note: "Your birthday film will be added here. Press play whenever you're ready; it will never autoplay." }
};

type Props = { params: Promise<{ slug: string }> };

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = roomContent[slug];
  if (!room) notFound();

  if (slug === "gallery") {
    return (
      <main className="room-page gallery-room-page">
        <Link href="/home" className="back-link">← BACK TO YOUR UNIVERSE</Link>
        <div className="gallery-room-heading">
          <p className="eyebrow">A ROOM IN YOUR WORLD</p>
          <h1>Her Gallery</h1>
          <p className="room-page-intro">A place for every version of you I adore.</p>
        </div>
        <JustLadeeeeGallery />
        <MovingMemories />
        <div className="gallery-coming-soon">More little pieces of this universe will find their place here. ♡</div>
      </main>
    );
  }

  return (
    <main className="room-page">
      <Link href="/home" className="back-link">← BACK TO YOUR UNIVERSE</Link>
      <div className="room-page-card">
        <p className="eyebrow">A ROOM IN YOUR WORLD</p>
        <h1>{room.title}</h1>
        <p className="room-page-intro">{room.intro}</p>
        <div className="room-divider">✧</div>
        <p className="room-page-note">{room.note}</p>
        <span className="preparing-stamp">BEING PREPARED WITH LOVE</span>
      </div>
    </main>
  );
}
