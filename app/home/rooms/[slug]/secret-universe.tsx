"use client";

import { useState } from "react";

const discoveries = [
  { mark: "✦", label: "A little reminder", title: "You are seen.", note: "Even on the quiet days, even when you think nobody notices the little things, I do. I notice your effort, your kindness, your moods, and the way you keep showing up." },
  { mark: "♡", label: "A truth I keep", title: "You make ordinary days special.", note: "It doesn't always take a big plan or somewhere beautiful. Sometimes it is just talking to you, laughing with you, or hearing you say 'Damolaaaa'. Those little moments mean a lot to me." },
  { mark: "❀", label: "Something I admire", title: "Your heart is beautiful.", note: "The way you care, listen, and come through for the people you love says so much about you. I hope life is gentle with that beautiful heart of yours." },
  { mark: "☾", label: "For the days you doubt yourself", title: "Please give yourself a chance.", note: "You are more capable than you sometimes believe. You don't have to have everything figured out, and you don't have to get everything right the first time. I hope you never let a difficult day convince you that you cannot do wonderful things." },
  { mark: "✧", label: "A promise for the road ahead", title: "I am cheering for you.", note: "I want to see you become everything you dream of becoming. I want to celebrate your wins, encourage you through the hard parts, and remind you how much good you deserve." }
];

export default function SecretUniverse() {
  const [opened, setOpened] = useState<number[]>([]);
  const [showFinal, setShowFinal] = useState(false);
  const complete = opened.length === discoveries.length;

  function discover(index: number) {
    setOpened((current) => current.includes(index) ? current : [...current, index]);
  }

  return (
    <section className="secret-universe">
      <header className="secrets-heading">
        <p className="eyebrow">A FEW THINGS I HID JUST FOR YOU</p>
        <h1>Secret Universe</h1>
        <p className="room-page-intro">There are five little pieces of my heart scattered around this place. Find each one, and the last message is yours. ♡</p>
        <div className="secret-progress"><span style={{ width: `${(opened.length / discoveries.length) * 100}%` }} /></div>
        <small>{opened.length} OF 5 LITTLE SECRETS FOUND</small>
      </header>

      <div className="secret-starfield">
        {discoveries.map((item, index) => {
          const found = opened.includes(index);
          return (
            <button className={`secret-star-card ${found ? "found" : ""}`} key={item.label} onClick={() => discover(index)} aria-label={found ? item.title : `Discover hidden secret ${index + 1}`}>
              <span className="secret-star-mark">{found ? item.mark : "✧"}</span>
              <span className="secret-star-label">{found ? item.label : `HIDDEN NOTE 0${index + 1}`}</span>
              <strong>{found ? item.title : "Something is waiting here..."}</strong>
              {found && <p>{item.note}</p>}
              <small>{found ? "A LITTLE PIECE OF YOU ♡" : "TAP TO DISCOVER"}</small>
            </button>
          );
        })}
      </div>

      {complete && (
        <div className="secret-final-wrap">
          {!showFinal ? (
            <button className="secret-final-button" onClick={() => setShowFinal(true)}>
              <span>✧ ✦ ♡ ✦ ✧</span>
              <strong>You found them all.</strong>
              <small>There is one last thing I want you to read. TAP TO OPEN ↗</small>
            </button>
          ) : (
            <article className="secret-final-letter">
              <p className="eyebrow">THE LAST LITTLE SECRET</p>
              <span className="secret-final-flourish">♡</span>
              <h2>To my Ladeeee,</h2>
              <p>I don't think you fully understand how much goodness you bring into my life. And I'm not just talking about the big things you do for me. I'm talking about you — your laugh, your random stories, your stubbornness, your kindness, the way you listen, and even those dramatic “Babeeeeee, I'm tireddddddd” messages. 😂</p>
              <p>I notice more than you think. I notice when you go quiet. I notice how much you care. I notice the effort you make, even when you don't give yourself enough credit for it. And I hope you never start measuring your worth by the days when you feel tired, uncertain, or unable to do something.</p>
              <p>You are allowed to take your time. You are allowed to rest. You are allowed to make mistakes and begin again. But please, never count yourself out. There is so much you can do, so much happiness you deserve, and so many beautiful things still waiting for you.</p>
              <p>Thank you for being someone I can talk to, laugh with, be silly with, and feel at home around. Thank you for the ways you've shown up for me. I may not always find the perfect words, but I hope my actions keep reminding you that you matter to me.</p>
              <p>I want good things for you, Ladeeee. Not just because I love you, but because you genuinely deserve them. I hope you keep growing, keep smiling, keep discovering yourself, and keep becoming the woman you want to be. And whenever you forget how special you are, I hope you find your way back to this little corner.</p>
              <p className="secret-final-last">I believe in you. Always. And I'm so, so glad this world has you in it. ❤️</p>
              <span className="secret-final-signoff">With all my heart,<br />your Damolaaaa ♡</span>
            </article>
          )}
        </div>
      )}
      <p className="secrets-footer">Some things are hidden only so they can be discovered. ♡</p>
    </section>
  );
}
