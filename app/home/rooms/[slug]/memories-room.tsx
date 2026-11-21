const memories = [
  {
    number: "01",
    label: "THE BEGINNING",
    title: "Arike",
    note: "The first name I called you. I don't think you knew then how many little things about you would become precious to me.",
    stamp: "A NAME I STILL LOVE"
  },
  {
    number: "02",
    label: "A LITTLE MILESTONE",
    title: "February",
    note: "The month we started talking. A simple month on the calendar, but one that quietly became part of our story.",
    stamp: "WHERE OUR STORY BEGAN"
  },
  {
    number: "03",
    label: "THE WAY YOU CALL ME",
    title: "Damolaaaa",
    note: "The way you stretch my name always gets me. Somehow, I can almost hear you saying it just by reading it.",
    stamp: "I CAN HEAR YOUR VOICE"
  },
  {
    number: "04",
    label: "A MESSAGE I KNOW",
    title: "Babeeeeee, I'm tireddddddd",
    note: "Your long texts, your extra letters, and the way you tell me exactly how your day is going. Even the ordinary messages feel like you.",
    stamp: "A FAVOURITE NOTIFICATION"
  },
  {
    number: "05",
    label: "WHEN WE'RE APART",
    title: "One more call",
    note: "The calls and messages that find their way between us. You checking on me, and making sure I know when I've taken too long to reply.",
    stamp: "NEVER JUST SILENCE"
  },
  {
    number: "06",
    label: "A QUIET FAVOURITE",
    title: "Right there, asleep",
    note: "That moment you were sleeping on my chest. Nothing dramatic was happening. I just remember how much I loved having you there.",
    stamp: "A MOMENT I KEEP"
  },
  {
    number: "07",
    label: "THE LITTLE FILMS",
    title: "A few seconds of us",
    note: "So many of our moments live in short videos. Random little clips, sometimes only a few seconds long, that I still want to keep.",
    stamp: "PRESS PLAY IN THE GALLERY"
  },
  {
    number: "08",
    label: "STILL MY FAVOURITE",
    title: "All the ordinary things",
    note: "Laughing, talking, teasing, cuddling, or doing absolutely nothing. I don't need every moment to be special. I just love that it's with you.",
    stamp: "TO BE CONTINUED"
  }
];

export default function MemoriesRoom() {
  return (
    <section className="our-memories" aria-labelledby="memories-title">
      <header className="memories-heading">
        <p className="eyebrow">A SCRAPBOOK OF US</p>
        <h1 id="memories-title">Our Memories</h1>
        <p className="room-page-intro">Not every beautiful memory needs a date. Some are kept because they still make me smile.</p>
        <span className="memories-heading-flourish">✧　♡　✧</span>
      </header>

      <div className="memories-paper-note">
        <span> A NOTE FROM ME </span>
        <p>I couldn't put every little moment into words, but I wanted to save some of the ones that feel like us. Open these pages in any order, Ladeeee.</p>
        <small>KEPT WITH LOVE · ALWAYS</small>
      </div>

      <div className="memory-scrapbook-grid">
        {memories.map((memory) => (
          <article className="memory-scrap" key={memory.number}>
            <div className="memory-scrap-top">
              <span>PAGE {memory.number}</span>
              <span>♡</span>
            </div>
            <div className="memory-scrap-body">
              <p className="memory-scrap-label">{memory.label}</p>
              <h2>{memory.title}</h2>
              <p className="memory-scrap-note">{memory.note}</p>
            </div>
            <div className="memory-scrap-bottom">
              <span>{memory.stamp}</span>
              <span className="memory-scrap-flower">✿</span>
            </div>
          </article>
        ))}
      </div>

      <footer className="memories-ending">
        <span>✧</span>
        <p>Some pages are already written. The rest are waiting for us.</p>
        <small>OUR STORY IS STILL UNFOLDING</small>
      </footer>
    </section>
  );
}
