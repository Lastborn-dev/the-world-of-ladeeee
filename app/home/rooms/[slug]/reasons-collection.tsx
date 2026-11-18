"use client";

import { useState } from "react";

const reasons = [
  { title: "Your smile", body: "I don't think you understand just how much I love your smile. Sometimes I find myself looking at your pictures and smiling because of that very smile. I can't even explain what it is about it, but there's something that gets to me every single time. It doesn't have to be a special occasion, and you don't have to do anything extraordinary. Sometimes just seeing you smile is enough to make my day a little better. I hope life always gives you reasons to wear it." },
  { title: "The way you laugh", body: "I love hearing you laugh. It is one of those sounds I don't think I could ever get tired of. I love when something genuinely amuses you and you just let yourself laugh without holding back. Even when I don't know what is so funny, I still enjoy watching you enjoy yourself. I hope you never run out of things to laugh about, and I hope I get to be around for plenty of those moments." },
  { title: "Your playful side", body: "I love how playful you can be. You bring a kind of fun into ordinary moments that makes being around you enjoyable. I like that we can joke, tease each other and be completely unserious sometimes. Life can be serious enough on its own, so having someone who can make me laugh and loosen up is something I appreciate. Please don't ever feel you have to hide that side of yourself." },
  { title: "Your stubborn side", body: "Your stubbornness can test my patience, I won't even lie. 😂 But it is also one of those unmistakably you things that I have grown to know so well. I don't love every disagreement, and I won't pretend you are always right, but I love that you have your own mind. I love the person behind that stubborn streak, and I wouldn't want you to lose the confidence to speak up for yourself." },
  { title: "The fact that I love all of you", body: "If someone asks me what exactly I love about you, I could start listing things and still feel like I have left something out. Your smile, your laugh, your mind, your kindness, your playful moments and even the habits that sometimes make me shake my head. I don't want to reduce you to one perfect quality. I love the whole person, including the parts that make you wonderfully and unmistakably Ladeeee." },
  { title: "Your consideration", body: "I love how considerate you can be. You have a way of making me feel that my feelings and the little things happening in my life matter to you. I notice when you think about me, when you check in and when you make room for what I am going through. You may see these things as ordinary, but they mean a lot to me. I hope you know that your thoughtfulness does not go unnoticed." },
  { title: "Someone I can talk to", body: "I love that you are someone I can talk to. I don't always have to arrange my thoughts perfectly before I come to you. Sometimes I have something serious to discuss, sometimes it is just a random thought, and sometimes I don't even know where to begin. I appreciate having someone who listens and gives me room to speak. That kind of comfort is not something I take for granted." },
  { title: "Even when you're annoying", body: "You can be really annoying sometimes, and I know you know it. 😂 But even in those moments, I still enjoy having you in my life. I can complain about your wahala and still want to tell you about my day five minutes later. That is part of what makes our connection ours. I don't need every moment to be perfect to know that you are someone I am grateful to have." },
  { title: "Our random conversations", body: "I love that I can talk to you about serious things and completely random things. Not every conversation needs a big subject or a meaningful conclusion. Sometimes it is just us talking, laughing, changing topics and somehow keeping the conversation going. I enjoy that. I enjoy being able to share the small details of my day with you, because those little conversations make you part of my everyday life." },
  { title: "Your intelligence", body: "I admire how intelligent you are. I wish you could see yourself the way I see you, especially on the days when you underestimate what you can do. You have a capable mind, and I hope you never allow a difficult task or a tired day to convince you otherwise. You do not have to know everything immediately. I just want you to give yourself the chance to learn, try and surprise yourself." },
  { title: "Your kindness", body: "Your kindness is one of the things I admire most about you. You have a way of caring that feels genuine, and I notice how much room your heart makes for other people. I know that sometimes your kindness can leave you giving more than you should, and I hope you remember that you deserve care too. You can be kind without allowing anyone to take advantage of you. Your heart is precious; protect it." },
  { title: "The way you go quiet", body: "I notice when you go quiet. I may not always know what is happening in your mind, and I won't pretend I can read every feeling, but I notice when your usual energy changes. I want you to know that you don't have to force yourself to be cheerful around me. You can talk when you're ready, or be quiet if that's what you need. I still care, and I still want to understand." },
  { title: "The way you call my name", body: "I don't think you realise what you do to me when you call my name like that: 'Damolaaaa!' 😂 There is something about the way you stretch it that always gets my attention and makes me smile. It can be the most ordinary moment, but hearing you call me like that makes it feel like our own little thing. I could hear it a hundred times and still know it is you." },
  { title: "Your voice", body: "I love the way you talk. I still remember telling you that you have this seductive way of talking, and I meant it. 😂 Sometimes it is not even what you are saying; it is the way you say it. I find myself paying attention to your voice even when the conversation is about something completely ordinary. I hope you never feel you need to change it. It is one of those little things that is simply yours." },
  { title: "Your expressive face", body: "I love how expressive your face can be, especially when you're angry. Sometimes your expression tells me that something is wrong before you even say a word. 😂 I have become familiar with those little looks, and they are part of the details I notice about you. I won't say I enjoy being the reason you're annoyed, but I do love how much of your personality can show without you saying anything." },
  { title: "Your Babeeee messages", body: "Your 'Babeeeeee, I'm tireddddddd' messages deserve a place of their own. 😂 I can almost hear your voice when I read all those extra letters. You probably think you are just sending an ordinary text, but I have come to recognise your style so well that the message already sounds like you in my head. Please don't start typing normally; those extra letters have become part of the experience." },
  { title: "Your happiness", body: "I love seeing you genuinely happy. When you're excited, it is as if every part of you joins in: you talk more, laugh more, become extra playful and want to tell me everything. I love getting to witness that version of you. I hope you have more reasons to feel that kind of happiness, not just on special days but in the ordinary parts of life too. You deserve joy that feels easy and full." },
  { title: "How comfortable you are with me", body: "I love how comfortable you are around me. You can be yourself without worrying about every little thing. You can be playful, tired, stubborn, dramatic, quiet or completely unserious. I don't want you to feel that you have to perform or present a perfect version of yourself for me. I want you to feel free to be you. The unfiltered, everyday version of Ladeeee is someone I genuinely adore." },
  { title: "The way you tease me", body: "You really enjoy teasing me and trying to get a reaction out of me. 😂 Sometimes I pretend to be seriously annoyed, but I know those little exchanges are part of what makes our time together fun. I love that we can laugh, disturb each other and turn an ordinary conversation into something memorable. You have a special talent for getting under my skin and still making me smile." },
  { title: "Your romantic side", body: "I love that romance is not something that belongs to just one of us. You have your own way of showing affection, and I appreciate it. I notice the thoughtful things, the moments you make an effort and the ways you remind me that you care. I don't want you to think those gestures have to be grand to matter. The little things you do reach me, and I am grateful for them." }
];

export default function ReasonsCollection() {
  const [opened, setOpened] = useState<number | null>(null);
  const current = opened === null ? null : reasons[opened];

  return (
    <section className="reasons-room">
      <header className="reasons-intro">
        <p className="eyebrow">A HUNDRED LITTLE REMINDERS</p>
        <h2>100 Reasons Why I Love You</h2>
        <p>Collection I · Everything I adore about you</p>
        <span className="reasons-count">20 little letters, written with you in mind ♡</span>
      </header>

      <div className="reason-grid">
        {reasons.map((reason, index) => (
          <button className="reason-card" key={reason.title} onClick={() => setOpened(index)} aria-label={`Open reason ${index + 1}: ${reason.title}`}>
            <span className="reason-number">NO. {String(index + 1).padStart(2, "0")}</span>
            <span className="reason-flower">✧</span>
            <span className="reason-title">{reason.title}</span>
            <span className="reason-open">OPEN THIS LITTLE LETTER ↗</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="reason-overlay" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setOpened(null)}>
          <article className="reason-paper" onClick={(event) => event.stopPropagation()}>
            <button className="reason-close" onClick={() => setOpened(null)} aria-label="Close letter">×</button>
            <span className="reason-paper-mark">✧</span>
            <p className="eyebrow">REASON {String(opened! + 1).padStart(2, "0")} OF 100</p>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
            <span className="reason-signoff">Always, in all the little ways. ♡</span>
            <div className="reason-pager">
              <button disabled={opened === 0} onClick={() => setOpened((value) => value === null ? null : value - 1)}>← PREVIOUS</button>
              <span>{opened! + 1} / 20</span>
              <button disabled={opened === reasons.length - 1} onClick={() => setOpened((value) => value === null ? null : value + 1)}>NEXT →</button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
