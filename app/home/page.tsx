import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FloatingNav from "./floating-nav";

const rooms = [
  { number: "01", title: "Her Gallery", slug: "gallery", note: "All the little ways you make the world brighter.", mark: "✧" },
  { number: "02", title: "100 Reasons Why I Love You", slug: "100-reasons", note: "A hundred little pieces of my heart, written for you.", mark: "♡" },
  { number: "03", title: "Games Room", slug: "games", note: "A little fun, a few surprises, and things only we know.", mark: "♧" },
  { number: "04", title: "Letters From My Heart", slug: "letters", note: "For the days you need a reminder of how loved you are.", mark: "✉" },
  { number: "05", title: "Our Memories", slug: "memories", note: "A scrapbook of moments, in whatever order your heart chooses.", mark: "❀" },
  { number: "06", title: "Her Soundtrack", slug: "soundtrack", note: "Songs that made me think of you, and the stories behind them.", mark: "♫" },
  { number: "07", title: "Secret Universe", slug: "secrets", note: "There are little things hidden here. Take your time finding them.", mark: "☾" },
  { number: "08", title: "Birthday Celebration", slug: "chapter-20", note: "A celebration of you, and the beautiful chapter ahead.", mark: "20" },
  { number: "09", title: "A Girl Like No Other", slug: "birthday-film", note: "A film made from memories, words, and love.", mark: "▶" }
];

export default async function HomePage() {
  const store = await cookies();
  if (!store.has("ladeeee_session")) redirect("/");
  return (
    <main className="home-page">
      <FloatingNav />
      <header className="home-hero" id="top">
        <p className="eyebrow">A LITTLE UNIVERSE, MADE WITH LOVE</p>
        <p className="hero-kicker">FOR THE ONE AND ONLY</p>
        <h1>Welcome, <em>Ladeeee.</em></h1>
        <p className="home-intro">This little universe has been waiting for you.</p>
        <div className="hero-rule"><span>✧</span></div>
        <p className="chapter-label">26 · 11 · 2026</p>
        <h2>Chapter 20</h2>
        <p className="hero-caption">Some people deserve more than a birthday wish.<br />They deserve an entire universe.</p>
        <a className="discover-link" href="#rooms">Wander through your world <span>↓</span></a>
      </header>
      <section className="rooms-section" id="rooms">
        <div className="section-heading">
          <p className="eyebrow">NINE LITTLE CORNERS OF YOU</p>
          <h2>Make yourself at home.</h2>
          <p>Every room holds something different. Explore them in any order you like.</p>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <Link className="room-card" href={`/home/rooms/${room.slug}`} key={room.slug}>
              <span className="room-number">{room.number}</span>
              <span className="room-mark" aria-hidden="true">{room.mark}</span>
              <h3>{room.title}</h3>
              <p>{room.note}</p>
              <span className="room-enter">STEP INSIDE ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <footer className="home-footer">MADE WITH LOVE · ALWAYS YOURS</footer>
    </main>
  );
}