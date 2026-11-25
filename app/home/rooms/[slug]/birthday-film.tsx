"use client";

export default function BirthdayFilm() {
  return (
    <section
      aria-label="Birthday tribute from your coursemates"
      style={{
        width: "min(100%, 920px)",
        margin: "48px auto 24px",
        padding: "clamp(22px, 5vw, 42px)",
        border: "1px solid rgba(139, 111, 76, 0.2)",
        borderRadius: "24px",
        background: "rgba(255, 252, 246, 0.82)",
        boxShadow: "0 18px 55px rgba(91, 70, 48, 0.08)",
        textAlign: "center"
      }}
    >
      <p className="eyebrow">A BIRTHDAY TRIBUTE</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "clamp(1.8rem, 5vw, 2.7rem)", margin: "12px 0" }}>
        A few words from your people
      </h2>
      <p style={{ maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.8, color: "#766b5e" }}>
        A little collection of familiar faces, warm wishes, and people taking a moment to celebrate you.
      </p>
      <div style={{ overflow: "hidden", borderRadius: 16, background: "#171411", boxShadow: "0 12px 36px rgba(30, 22, 15, 0.16)" }}>
        <video
          controls
          playsInline
          preload="metadata"
          controlsList="nodownload"
          aria-label="Birthday wishes from your coursemates"
          style={{ display: "block", width: "100%", maxHeight: 620, objectFit: "contain" }}
        >
          <source src="/videos/birthday-film/coursemates-tribute-under-25mb.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>
      <p style={{ margin: "22px 0 0", fontFamily: "Georgia, serif", fontStyle: "italic", color: "#8a7258" }}>
        You are celebrated, Ladeeee. ♡
      </p>
    </section>
  );
}
