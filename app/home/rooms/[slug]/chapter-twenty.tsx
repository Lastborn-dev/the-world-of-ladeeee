"use client";

import { useState } from "react";

export default function ChapterTwenty() {
  const [lit, setLit] = useState<number[]>([]);
  const [wishMade, setWishMade] = useState(false);
  const [blownOut, setBlownOut] = useState(false);
  const allLit = lit.length === 20;

  function lightCandle(index: number) {
    if (blownOut) return;
    setLit((current) => current.includes(index) ? current : [...current, index]);
  }

  function relight() {
    setLit([]);
    setWishMade(false);
    setBlownOut(false);
  }

  return (
    <section className="chapter-twenty">
      <header className="chapter-twenty-heading">
        <p className="eyebrow">26 · 11 · 2026</p>
        <h1>Chapter <em>20.</em></h1>
        <p>Twenty years of you. And so many beautiful pages still waiting to be written.</p>
        <span>HAPPY BIRTHDAY, SOFIAT ♡</span>
      </header>

      <div className="birthday-note">
        <span>✧ A LITTLE NOTE BEFORE THE CELEBRATION ✧</span>
        <p>Ladeeee, today isn't just about getting older. It's about celebrating the person you are, the person you're becoming, and all the beautiful things that make you unmistakably you.</p>
      </div>

      <div className={`birthday-cake-scene ${blownOut ? "candles-blown" : ""}`}>
        <div className="cake-sparkles" aria-hidden="true">✧　·　✦　·　✧</div>
        <div className="birthday-candles" aria-label={`${lit.length} of 20 candles lit`}>
          {Array.from({ length: 20 }, (_, index) => (
            <button
              key={index}
              className={`birthday-candle ${lit.includes(index) ? "is-lit" : ""}`}
              onClick={() => lightCandle(index)}
              disabled={blownOut}
              aria-label={`Candle ${index + 1}, ${lit.includes(index) ? "lit" : "not lit"}`}
            >
              <span className="candle-flame">✦</span>
              <span className="candle-wick" />
              <span className="candle-stick" />
            </button>
          ))}
        </div>
        <div className="cake-top"><span>20</span><small>SOFIAT</small></div>
        <div className="cake-middle" />
        <div className="cake-bottom" />
        <div className="cake-plate" />
      </div>

      {!allLit && !blownOut && (
        <div className="candle-instructions">
          <strong>Make the cake glow.</strong>
          <p>Tap each little candle until all twenty are shining.</p>
          <div className="candle-progress"><span style={{ width: `${lit.length * 5}%` }} /></div>
          <small>{lit.length} / 20 CANDLES LIT</small>
        </div>
      )}

      {allLit && !wishMade && !blownOut && (
        <div className="birthday-wish-step">
          <span>✧ ✦ ✧</span>
          <h2>Twenty little lights, just for you.</h2>
          <p>Close your eyes for a moment. Think of everything your heart is wishing for.</p>
          <button onClick={() => setWishMade(true)}>I'VE MADE MY WISH ♡</button>
        </div>
      )}

      {wishMade && !blownOut && (
        <div className="birthday-wish-step">
          <span>♡</span>
          <h2>Keep that wish close.</h2>
          <p>Now, whenever you're ready, make a little wish and blow out your candles. May this new chapter be kind to you.</p>
          <button onClick={() => setBlownOut(true)}>BLOW OUT THE CANDLES ✧</button>
        </div>
      )}

      {blownOut && (
        <div className="birthday-final-message">
          <div className="birthday-confetti" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i}>✦</span>)}</div>
          <p className="eyebrow">AND SO, A NEW CHAPTER BEGINS</p>
          <h2>Happy 20th birthday, my Ladeeee.</h2>
          <p>I hope twenty brings you closer to everything you've been quietly hoping for. I hope you find reasons to be proud of yourself, people who handle your heart gently, opportunities that remind you of your potential, and happiness in places you never expected.</p>
          <p>May you never shrink yourself, never stop dreaming, and never forget how much you deserve the good things coming your way.</p>
          <strong>I believe in you. I am proud of you. And I will always be cheering for you. ❤️</strong>
          <button onClick={relight}>CELEBRATE AGAIN ↻</button>
        </div>
      )}
      <p className="chapter-twenty-footer">Twenty looks beautiful on you. Here's to everything ahead. ♡</p>
    </section>
  );
}
