"use client";

import { useState } from "react";

type Question = { prompt: string; choices: string[]; answer: number; note: string };

const quizzes: Record<string, { title: string; intro: string; questions: Question[] }> = {
  "know-her": {
    title: "Who Knows Ladeeee Best?",
    intro: "A little test of how closely you've been paying attention.",
    questions: [
      { prompt: "What is one of Ladeeee's favourite ways to spend time?", choices: ["Only shopping", "Movies, food and music", "Running marathons", "Doing absolutely nothing forever"], answer: 1, note: "Movies, food and music — a little bit of everything." },
      { prompt: "Which side of her personality does Damola secretly adore, even when it tests his patience?", choices: ["Her stubborn side", "Her ability to wake up early", "Her silence during films", "Her love of mathematics"], answer: 0, note: "That stubborn side is part of what makes her unmistakably herself. 😂" },
      { prompt: "What does she do when she is excited and happy?", choices: ["Stops talking", "Talks more, laughs and gets playful", "Goes to sleep immediately", "Pretends nothing happened"], answer: 1, note: "She talks more, laughs, becomes playful and wants to tell him everything." },
      { prompt: "What does Damola especially want her to stop doing?", choices: ["Taking pictures", "Watching movies", "Doubting what she is capable of", "Sending long texts"], answer: 2, note: "He wants her to see how capable she really is." },
      { prompt: "What is one thing she does when Damola takes too long to reply?", choices: ["Sends extra messages and calls", "Writes a formal letter", "Changes her phone number", "Waits six business months"], answer: 0, note: "The extra messages and calls are very much part of her signature. 😂" }
    ]
  },
  "little-things": {
    title: "The Little Things",
    intro: "The tiny details are often the ones that matter most.",
    questions: [
      { prompt: "How does she call his name?", choices: ["Damo", "Damolaaaa!", "Mr. President", "She never says it"], answer: 1, note: "That unforgettable 'Damolaaaa!' 😂❤️" },
      { prompt: "Which text sounds most like one of her dramatic messages?", choices: ["Dear Sir, noted.", "Babeeeeee I'm tireddddddd", "Your parcel has shipped", "Good afternoon, colleague"], answer: 1, note: "The extra letters are essential. 😂" },
      { prompt: "What does she do to show affection when they are apart?", choices: ["Checks up, texts and calls", "Sends smoke signals", "Disappears for a month", "Only sends invoices"], answer: 0, note: "Those calls and check-ins help them stay close." },
      { prompt: "What is one thing Damola notices even when she says very little?", choices: ["Her favourite colour", "When she goes unusually quiet", "The weather forecast", "The time on the clock"], answer: 1, note: "He notices when her usual energy changes." },
      { prompt: "What is one of the qualities he admires most about her?", choices: ["Her kindness", "Her ability to fly", "Her handwriting speed", "Her alarm clock"], answer: 0, note: "Her kindness is one of the things he admires most." }
    ]
  },
  "memory-lane": {
    title: "Memory Lane",
    intro: "A few moments from the little collection of memories.",
    questions: [
      { prompt: "Which picture did Damola say he took himself and loved for no particular reason?", choices: ["The first picture he uploaded", "A picture of a cake", "A group selfie", "A picture of a sunset"], answer: 0, note: "The first picture. Sometimes he just loved the moment." },
      { prompt: "What did he tell her when he saw another picture?", choices: ["You should be my model", "You should become a pilot", "You should sell the camera", "You should stop taking pictures"], answer: 0, note: "He told her she should be his model. 😂" },
      { prompt: "Which outfit was special because it was the first time she wore it?", choices: ["That gown", "A school uniform", "A winter coat", "A football jersey"], answer: 0, note: "The first time she wore that gown." },
      { prompt: "What was she doing in one of his favourite quiet memories?", choices: ["Sleeping on his chest", "Cooking for a crowd", "Driving a bus", "Playing tennis"], answer: 0, note: "She was sleeping on his chest. One of his most precious memories." },
      { prompt: "What format are many of their shared moments captured in?", choices: ["Short videos", "Newspaper articles", "Voice-only podcasts", "Paintings"], answer: 0, note: "Lots of their moments are little video clips, sometimes only a few seconds." }
    ]
  },
  "treasure": {
    title: "Secret Treasure Hunt",
    intro: "Follow the clues. Every answer points to a little piece of this universe.",
    questions: [
      { prompt: "I am the name this whole little universe carries. Who am I made for?", choices: ["Ladeeee", "A movie star", "A football club", "A secret agent"], answer: 0, note: "This world was made for one person: Ladeeee." },
      { prompt: "Find the room with one hundred little reminders, arranged in five collections.", choices: ["Her Gallery", "100 Reasons Why I Love You", "Her Soundtrack", "Chapter 20"], answer: 1, note: "The 100 Reasons room. Five collections, twenty letters each." },
      { prompt: "I hold pictures, little clips and moments seen through his eyes. Which room am I?", choices: ["Her Gallery", "Games Room", "Secret Universe", "Birthday Film"], answer: 0, note: "Her Gallery keeps the pictures and moving memories." },
      { prompt: "I am the chapter she steps into on her twentieth birthday.", choices: ["Chapter 18", "Chapter 19", "Chapter 20", "Chapter 100"], answer: 2, note: "Chapter 20 — a celebration of her." },
      { prompt: "The final clue: what is the most important thing this whole world is trying to remind her?", choices: ["She has to be perfect", "She is loved and believed in", "She must hurry", "She should never rest"], answer: 1, note: "That she is loved, appreciated and deeply believed in." }
    ]
  }
};

const games = [
  { id: "know-her", number: "01", title: "Who Knows Ladeeee Best?", description: "How well do you know the little details about yourself?", mark: "♡" },
  { id: "memory-lane", number: "02", title: "Memory Lane", description: "Take a trip through some moments worth keeping.", mark: "❀" },
  { id: "little-things", number: "03", title: "The Little Things", description: "The tiny habits and details that make you you.", mark: "✧" },
  { id: "treasure", number: "04", title: "Secret Treasure Hunt", description: "Follow the clues hidden around your universe.", mark: "⌕" },
  { id: "movie", number: "05", title: "Guess the Movie", description: "A movie challenge, waiting for your favourites.", mark: "▣", soon: true },
  { id: "soundtrack", number: "06", title: "Our Little Soundtrack", description: "Songs, memories and the stories behind them.", mark: "♫", soon: true }
];

export default function GamesRoom() {
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [star, setStar] = useState<number | null>(null);
  const quiz = selected ? quizzes[selected] : null;
  const score = quiz ? answers.reduce((total, answer, index) => total + (answer === quiz.questions[index]?.answer ? 1 : 0), 0) : 0;

  function start(id: string) { setSelected(id); setAnswers([]); setFinished(false); setStar(null); }
  function answer(choice: number) {
    if (!quiz || finished || answers.length >= quiz.questions.length) return;
    const next = [...answers, choice];
    setAnswers(next);
    if (next.length === quiz.questions.length) setFinished(true);
  }
  function back() { setSelected(null); setAnswers([]); setFinished(false); setStar(null); }

  return (
    <section className="games-room">
      <header className="games-intro">
        <p className="eyebrow">A LITTLE PLAYTIME IN YOUR WORLD</p>
        <h2>Games Room</h2>
        <p>Because this universe should have a little fun in it too. ♡</p>
      </header>

      {!selected && (
        <div className="games-grid">
          {games.map((game) => (
            <article className={`game-card ${game.soon ? "game-card-soon" : ""}`} key={game.id}>
              <span className="game-number">GAME {game.number}</span>
              <span className="game-mark">{game.mark}</span>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              {game.soon ? <span className="game-soon-label">A LITTLE SURPRISE — COMING SOON</span> : <button className="game-start" onClick={() => start(game.id)}>PLAY THIS GAME ↗</button>}
            </article>
          ))}
        </div>
      )}

      {quiz && (
        <div className="game-play">
          <button className="game-back" onClick={back}>← ALL GAMES</button>
          <p className="eyebrow">A LITTLE CHALLENGE</p>
          <h3>{quiz.title}</h3>
          <p className="game-play-intro">{quiz.intro}</p>
          {!finished ? (
            <>
              <div className="game-progress"><span style={{ width: `${(answers.length / quiz.questions.length) * 100}%` }} /></div>
              <p className="game-question-count">QUESTION {answers.length + 1} OF {quiz.questions.length}</p>
              <h4>{quiz.questions[answers.length].prompt}</h4>
              <div className="game-choices">
                {quiz.questions[answers.length].choices.map((choice, index) => (
                  <button key={choice} onClick={() => answer(index)}>{choice}</button>
                ))}
              </div>
            </>
          ) : (
            <div className="game-results">
              <span className="game-result-mark">✧</span>
              <p className="eyebrow">YOU MADE IT THROUGH</p>
              <h4>{score === quiz.questions.length ? "You know these little details!" : score >= 3 ? "You were paying attention!" : "There is always more to discover."}</h4>
              <p>You got {score} out of {quiz.questions.length} right.</p>
              <div className="game-answer-notes">
                {quiz.questions.map((question, index) => (
                  <div key={question.prompt}>
                    <strong>{index + 1}. {question.prompt}</strong>
                    <span>{question.note}</span>
                  </div>
                ))}
              </div>
              <button className="game-start" onClick={() => start(selected!)}>PLAY AGAIN ↻</button>
              <button className="game-back game-back-bottom" onClick={back}>CHOOSE ANOTHER GAME</button>
            </div>
          )}
        </div>
      )}

      {selected === "stars" && (
        <div className="game-play star-game">
          <button className="game-back" onClick={back}>← ALL GAMES</button>
          <p className="eyebrow">THE CONSTELLATION OF LADEEEE</p>
          <h3>Tap a star, discover a little thought.</h3>
          <p className="game-play-intro">Every star holds a small reminder. Open all six to complete your constellation.</p>
          <div className="star-map">
            {[0,1,2,3,4,5].map((n) => <button key={n} className={star === n ? "selected" : ""} onClick={() => setStar(n)} aria-label={`Open star ${n+1}`}>✦</button>)}
          </div>
          {star !== null && <p className="star-message">{["You are allowed to be soft and still be strong.","Your kindness deserves kindness in return.","You are more capable than your doubts tell you.","Your laugh is one of my favourite sounds.","You deserve to be celebrated on ordinary days too.","I believe in you, even on the days you forget to believe in yourself."][star]}</p>}
          <p className="star-count">{star === null ? "Choose your first star" : "A little light from your constellation ♡"}</p>
          <button className="game-start" onClick={() => setStar(null)}>RESET THE STARS ↻</button>
        </div>
      )}

      {!selected && (
        <button className="constellation-card" onClick={() => start("stars")}>
          <span>✧ ✦ ✧</span>
          <strong>The Constellation of Ladeeee</strong>
          <small>Six stars. Six little reminders. Tap to explore ↗</small>
        </button>
      )}
      <p className="games-footnote">Play at your own pace. There is no timer here. ♡</p>
    </section>
  );
}
