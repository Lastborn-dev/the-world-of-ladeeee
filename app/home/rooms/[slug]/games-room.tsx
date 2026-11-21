"use client";

import { useState } from "react";

type Question = { prompt: string; choices: string[]; answer: number; note: string };

const quizzes: Record<string, { title: string; intro: string; questions: Question[] }> = {
  "know-her": {
    title: "How Well Do You Know Yourself?",
    intro: "A little test about the things that make you wonderfully you.",
    questions: [
      { prompt: "What are some of your favourite ways to spend time?", choices: ["Only shopping", "Movies, food and music", "Running marathons", "Doing absolutely nothing forever"], answer: 1, note: "Movies, food and music — a little bit of everything you enjoy." },
      { prompt: "Which side of your personality do I secretly adore, even when it tests my patience?", choices: ["Your stubborn side", "Your ability to wake up early", "Your silence during films", "Your love of mathematics"], answer: 0, note: "That stubborn side is part of what makes you unmistakably you. 😂" },
      { prompt: "What do you tend to do when you're excited and happy?", choices: ["Stop talking", "Talk more, laugh and get playful", "Go to sleep immediately", "Pretend nothing happened"], answer: 1, note: "You talk more, laugh, become playful and want to tell me everything." },
      { prompt: "What do I especially want you to stop doing?", choices: ["Taking pictures", "Watching movies", "Doubting what you're capable of", "Sending long texts"], answer: 2, note: "I want you to see how capable you really are." },
      { prompt: "What do you do when I take too long to reply?", choices: ["Send extra messages and call", "Write a formal letter", "Change your phone number", "Wait six business months"], answer: 0, note: "The extra messages and calls are very much part of your signature. 😂" }
    ]
  },
  "little-things": {
    title: "The Little Things",
    intro: "The tiny details are often the ones that matter most. Let's see how many you recognise.",
    questions: [
      { prompt: "How do you call my name?", choices: ["Damo", "Damolaaaa!", "Mr. President", "You never say it"], answer: 1, note: "That unforgettable 'Damolaaaa!' 😂❤️" },
      { prompt: "Which text sounds most like one of your dramatic messages?", choices: ["Dear Sir, noted.", "Babeeeeee I'm tireddddddd", "Your parcel has shipped", "Good afternoon, colleague"], answer: 1, note: "The extra letters are essential. 😂" },
      { prompt: "How do you show me affection when we're apart?", choices: ["You check up on me, text and call", "You send smoke signals", "You disappear for a month", "You only send invoices"], answer: 0, note: "Those calls and check-ins help us stay close." },
      { prompt: "What do I notice even when you don't say much?", choices: ["Your favourite colour", "When you go unusually quiet", "The weather forecast", "The time on the clock"], answer: 1, note: "I notice when your usual energy changes, even when you don't say a word." },
      { prompt: "Which of your qualities do I admire most?", choices: ["Your kindness", "Your ability to fly", "Your handwriting speed", "Your alarm clock"], answer: 0, note: "Your kindness is one of the things I admire most about you." }
    ]
  },
  "memory-lane": {
    title: "Memory Lane",
    intro: "Let's see how well you remember the little details of our story. ♡",
    questions: [
      { prompt: "What name did I call you first?", choices: ["Sofia", "Arike", "Labakee", "Titilope"], answer: 1, note: "Arike. ❤️" },
      { prompt: "When did we start talking?", choices: ["March", "April", "February", "January"], answer: 2, note: "February — the beginning of our little story. ❤️" },
      { prompt: "Which picture did I take myself and love for no particular reason?", choices: ["A picture of a cake", "A group selfie", "The first picture I uploaded", "A picture of a sunset"], answer: 2, note: "That first picture you uploaded. I loved it, even without a particular reason." },
      { prompt: "What did I tell you when I saw one of your pictures?", choices: ["You should become a pilot", "You should be my model", "You should sell the camera", "You should stop taking pictures"], answer: 1, note: "I told you that you should be my model. 😂❤️" },
      { prompt: "Which outfit was special because it was the first time you wore it?", choices: ["A school uniform", "A winter coat", "A football jersey", "That gown"], answer: 3, note: "The first time you wore that gown." },
      { prompt: "What did I ask you to do in the picture whose style I wanted changed, even though I loved the photo?", choices: ["Change your hairstyle", "Change your shoes", "Change the style", "Take the picture down"], answer: 2, note: "I asked you to change the style — even though I still loved that picture. 😂" },
      { prompt: "What were you doing in one of my favourite quiet memories?", choices: ["Sleeping on my chest", "Cooking for a crowd", "Driving a bus", "Playing tennis"], answer: 0, note: "You were sleeping on my chest. One of my most precious memories. ❤️" },
      { prompt: "What kind of videos capture many of our moments together?", choices: ["Long documentaries", "Short videos, sometimes just a few seconds", "Voice-only podcasts", "Animated films"], answer: 1, note: "Our random little videos — sometimes only a few seconds long." }
    ]
  },
  "movie": {
    title: "Guess the Drama",
    intro: "No easy title clues this time. Remember the characters, the storylines and the little details? ♡",
    questions: [
      { prompt: "In Where the Mask Ends, what was A Chou's unusual reason for agreeing to become the bride in Lu Zhuo's household?", choices: ["She wanted to inherit a military title", "She needed money to help her sick foster mother", "She was secretly engaged to Lu Zhuo", "She was sent there as a palace investigator"], answer: 1, note: "A Chou accepted the dangerous marriage hoping to get the money needed to care for her foster mother." },
      { prompt: "In Ashes to Crown, which character joins forces with Chu Zhao and rises from a neglected son of the Xie family to a powerful general?", choices: ["Xie Yanlai", "Xiao Xun", "Xie Yanfang", "Deng Yi"], answer: 0, note: "Xie Yanlai is the man Chu Zhao helps, and together they fight to protect the Chu kingdom." },
      { prompt: "In The Lament of Autumn, what deal does Ye Pingjun make after she is wrongly blamed for an assassination attempt?", choices: ["Yu Changxuan must find the real culprit within ten days", "She must leave the city before sunrise", "She must marry the fifth son of the Yu family", "She must solve a case in one hundred days"], answer: 0, note: "She gives Yu Changxuan ten days to find the real culprit and clear her name." },
      { prompt: "In Pursuit of Jade, what is Fan Changyu's family trade before she becomes caught up in war and palace affairs?", choices: ["Silk weaving", "Medicine", "Butchery", "Tea trading"], answer: 2, note: "Fan Changyu is a butcher's daughter, and her butcher's knife becomes part of her journey." },
      { prompt: "In The Early Spring, which guarded creative genius does Shang Zhitao meet after arriving in Beijing?", choices: ["Sang Yan", "Luan Nian", "Ye Xinzhi", "Yu Changxuan"], answer: 1, note: "Shang Zhitao meets Luan Nian, whose guarded heart she gradually reaches." },
      { prompt: "In First Frost, what discovery helps bring Wen Yifan and Sang Yan closer after they unexpectedly become housemates?", choices: ["She is secretly a famous singer", "She sleepwalks", "He is moving overseas", "They are both working on the same film"], answer: 1, note: "Wen Yifan learns that she sleepwalks, and Sang Yan becomes aware of it too." },
      { prompt: "In Irreplaceable, what field does Xu Chi enter as she works her way up after a major upheaval in her family?", choices: ["Fashion design", "The consulting industry", "Professional medicine", "Broadcast journalism"], answer: 1, note: "Xu Chi enters consulting and proves herself through her drive and sharp mind." },
      { prompt: "In 100 Days of Deception, what was Lee Ga-kyung doing before she was recruited for the dangerous undercover mission?", choices: ["She was a skilled pickpocket", "She was a palace doctor", "She was a newspaper editor", "She was a government translator"], answer: 0, note: "Lee Ga-kyung was a talented pickpocket before becoming an undercover interpreter trainee." },
      { prompt: "In Can This Love Be Translated?, what is Joo Ho-jin's profession when he is hired for the reality show Romantic Trip?", choices: ["A film director", "A multilingual interpreter", "A celebrity chef", "A travel journalist"], answer: 1, note: "Joo Ho-jin is a multilingual interpreter, hired to translate between Cha Mu-hee and Hiro." },
      { prompt: "In Doctor X: Mafia in White, what makes Gye Su-jeong stand out when she arrives at Guseo University Medical Center?", choices: ["She is a brilliant surgeon who challenges the hospital's corruption", "She is the hospital owner's daughter", "She is a lawyer investigating the hospital", "She is a famous television presenter"], answer: 0, note: "Gye Su-jeong is a genius surgeon who exposes absurdities in the medical field." },
      { prompt: "In Dear Hongrang, how many years has Hongrang been missing when he returns to the Sim household?", choices: ["Five years", "Eight years", "Twelve years", "Twenty years"], answer: 2, note: "Hongrang returns twelve years after disappearing as a child, with no memory of his past." }
    ]
  },
  "treasure": {
    title: "Secret Treasure Hunt",
    intro: "Follow the clues. Every answer points to a little piece of your universe.",
    questions: [
      { prompt: "This whole little universe carries your name. Who was it made for?", choices: ["You, Ladeeee", "A movie star", "A football club", "A secret agent"], answer: 0, note: "This world was made for one person: you. ♡" },
      { prompt: "Find the room with one hundred little reminders of how loved you are, arranged in five collections.", choices: ["Her Gallery", "100 Reasons Why I Love You", "Her Soundtrack", "Chapter 20"], answer: 1, note: "The 100 Reasons room. Five collections, twenty letters each." },
      { prompt: "This room holds your pictures, little clips and moments seen through my eyes. Which room is it?", choices: ["Her Gallery", "Games Room", "Secret Universe", "Birthday Film"], answer: 0, note: "Her Gallery keeps the pictures and moving memories I love." },
      { prompt: "Which chapter do you step into on your twentieth birthday?", choices: ["Chapter 18", "Chapter 19", "Chapter 20", "Chapter 100"], answer: 2, note: "Chapter 20 — a celebration of you." },
      { prompt: "The final clue: what is the most important thing this whole world is trying to remind you?", choices: ["You have to be perfect", "You are loved and believed in", "You must hurry", "You should never rest"], answer: 1, note: "You are loved, appreciated and deeply believed in." }
    ]
  }
};

const games = [
  { id: "know-her", number: "01", title: "How Well Do You Know Yourself?", description: "A little quiz about the details that make you, you.", mark: "♡" },
  { id: "memory-lane", number: "02", title: "Memory Lane", description: "Take a trip through some moments worth keeping.", mark: "❀" },
  { id: "little-things", number: "03", title: "The Little Things", description: "The tiny habits and details that make you you.", mark: "✧" },
  { id: "treasure", number: "04", title: "Secret Treasure Hunt", description: "Follow the clues hidden around your universe.", mark: "⌕" },
  { id: "movie", number: "05", title: "Guess the Drama", description: "Your Chinese and Korean favourites. Let's see how well you know them.", mark: "▣" },
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
