"use client";

import { useState } from "react";

const letters = [
  { label: "Open when you're sad", mark: "♡", title: "For the days that feel heavy", body: "Hey Ladeeee, first of all, come here. ❤️ I know I can't always make everything disappear, and I won't pretend that one message can fix a difficult day. But I need you to remember that a bad day doesn't make your life a bad one, and a difficult moment doesn't change how special you are. Please be gentle with yourself. You don't have to have everything figured out today. Take your time, breathe, and remember that you are loved. Even on the days you don't feel like your best self, you're still you, and that's more than enough for me." },
  { label: "Open when you miss me", mark: "✉", title: "A little reminder that I'm here", body: "Ladeeee 😂❤️ If you're opening this because you miss me, just know that I probably wish I could be right there with you too. Until I can, let this little corner of the internet remind you of me. Think of this as a tiny hug you can open whenever you need one. And don't just read this and go; smile small for me, okay? I hope I get to see that smile in person soon." },
  { label: "Open when you doubt yourself", mark: "✧", title: "Please don't forget who you are", body: "Sofiat, I wish you could sometimes see yourself from the outside, even for a minute. You can be so hard on yourself, but I hope you never let one mistake, one opinion, or one difficult season convince you that you're not capable. You have so much ahead of you. Keep learning, keep trying, and give yourself the same patience you'd give someone you care about. I believe in you. And I hope you keep believing in yourself too." },
  { label: "Open when you need encouragement", mark: "❀", title: "One step at a time", body: "My girl, whatever it is you're working towards, don't let how far away the finish line looks make you forget how much every little step counts. You don't need to do everything at once. Start where you are, do what you can, and keep going. Rest when you need to, but don't talk yourself out of the things you know you want. I'm rooting for you, always. I believe in you, Ladeeee. ❤️" },
  { label: "Open when you need a smile", mark: "☼", title: "You better smile after this", body: "First, why are you not smiling? 😂 And don't tell me you need a reason. Consider this your official reminder that someone thinks you're amazing, someone likes looking at your pictures far too much, and someone is probably going to disturb you with another compliment soon. So please give me one of those smiles. Yes, that one. I hope this made your day a little lighter." },
  { label: "Open when you wonder how special you are", mark: "♡", title: "If you ever need to be reminded", body: "Omolade, I don't want you to measure your worth by how much attention you get, how productive you are, or how perfectly things are going. You're special beyond all of that. I love the person you are, not some version of you that has to get everything right. You deserve kindness, patience, good things, and the chance to become everything you dream of becoming. Never make yourself smaller just because you haven't seen all the beautiful things life still has waiting for you." }
];

export default function HeartLetters() {
  const [opened, setOpened] = useState<number | null>(null);
  const [secretOpen, setSecretOpen] = useState(false);
  return (
    <section className="heart-letters">
      <div className="letters-intro">
        <span className="gallery-ornament">✧ &nbsp; ✉ &nbsp; ✧</span>
        <p className="eyebrow">A FEW WORDS, KEPT FOR YOU</p>
        <h2>Letters From My Heart</h2>
        <p>For the days when you need a little reminder that you're loved.</p>
      </div>
      <div className="letter-cabinet">
        {letters.map((letter, index) => (
          <button className="letter-envelope" key={letter.label} onClick={() => setOpened(index)}>
            <span className="letter-mark">{letter.mark}</span>
            <span className="letter-label">{letter.label}</span>
            <span className="letter-action">OPEN LETTER ↗</span>
          </button>
        ))}
        <button className="letter-envelope secret-envelope" onClick={() => setSecretOpen(true)}>
          <span className="letter-mark">✦</span>
          <span className="letter-label">A little secret, just for you</span>
          <span className="letter-action">OPEN THE SECRET ↗</span>
        </button>
      </div>
      {(opened !== null || secretOpen) && (
        <div className="letter-overlay" role="dialog" aria-modal="true" onClick={() => { setOpened(null); setSecretOpen(false); }}>
          <article className="letter-paper" onClick={(event) => event.stopPropagation()}>
            <button className="letter-close" onClick={() => { setOpened(null); setSecretOpen(false); }} aria-label="Close letter">×</button>
            <span className="letter-paper-mark">✧ &nbsp; ♡ &nbsp; ✧</span>
            <p className="eyebrow">{secretOpen ? "A NOTE THAT WAS HIDING HERE" : "A LETTER FOR YOU"}</p>
            <h3>{secretOpen ? "One more thing, Ladeeee…" : letters[opened!].title}</h3>
            <p>{secretOpen ? "If you've found this little note, then here's something I want you to know: you don't have to wait for a special occasion to be celebrated. You deserve kind words on ordinary days too. I'm glad this world has you in it, and I'm glad I get to make this little universe for you. Happy almost-birthday, my girl. ❤️" : letters[opened!].body}</p>
            <span className="letter-signoff">With love, always ♡</span>
          </article>
        </div>
      )}
    </section>
  );
}
