"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = [
  { title: "Her Gallery", slug: "gallery", mark: "✧" },
  { title: "100 Reasons", slug: "100-reasons", mark: "♡" },
  { title: "Games Room", slug: "games", mark: "♧" },
  { title: "Letters From My Heart", slug: "letters", mark: "✉" },
  { title: "Our Memories", slug: "memories", mark: "❀" },
  { title: "Her Soundtrack", slug: "soundtrack", mark: "♫" },
  { title: "Secret Universe", slug: "secrets", mark: "☾" },
  { title: "Birthday Celebration", slug: "chapter-20", mark: "20" },
  { title: "Birthday Film", slug: "birthday-film", mark: "▶" }
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-nav-wrap">
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close universe menu" : "Open universe menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-monogram">L</span>
        <span className="nav-toggle-label">YOUR UNIVERSE</span>
        <span className="nav-chevron">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <nav className="universe-menu" aria-label="Explore the universe">
          <div className="universe-menu-heading">
            <span>THE WORLD OF LADEEEE</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          </div>
          <Link href="/home" onClick={() => setOpen(false)} className="universe-home-link">
            House of Ladeeee <span>⌂</span>
          </Link>
          {destinations.map((item, index) => (
            <Link
              href={`/home/rooms/${item.slug}`}
              key={item.slug}
              onClick={() => setOpen(false)}
              className="universe-menu-link"
            >
              <span className="universe-menu-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="universe-menu-mark">{item.mark}</span>
              <span>{item.title}</span>
              <span className="universe-menu-arrow">↗</span>
            </Link>
          ))}
          <p className="universe-menu-foot">TAKE YOUR TIME. THIS WORLD IS YOURS.</p>
        </nav>
      )}
    </div>
  );
}
