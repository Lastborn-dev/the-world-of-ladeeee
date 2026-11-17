import { unlockWorld } from "./actions";
type Props = { searchParams: Promise<{ error?: string }> };
export default async function EntrancePage({ searchParams }: Props) {
  const { error } = await searchParams;
  return <main className="entrance">
    <div className="paper-grain" aria-hidden="true" />
    <section className="entrance-frame">
      <p className="top-note">A LITTLE UNIVERSE, MADE WITH LOVE</p>
      <div className="portrait-placeholder"><span>HER PORTRAIT</span><small>Your selected framed photograph will go here</small></div>
      <p className="eyebrow">A place that belongs to you</p>
      <h1>The World of <em>Ladeeee</em></h1>
      <p className="intro">Some people deserve more than a birthday wish.<br />They deserve an entire universe.</p>
      <div className="envelope" aria-hidden="true"><span>For Ladeeee</span><b className="seal">L</b></div>
      <form action={unlockWorld} className="unlock-form">
        <label htmlFor="password">A little secret opens the door</label>
        <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your secret password" required />
        <button type="submit">Open your universe <span aria-hidden="true">↗</span></button>
      </form>
      {error === "incorrect" && <p className="form-message">That doesn't seem to be the right password. Try again, love.</p>}
      {error === "setup" && <p className="form-message">The private entrance is being prepared. Please try again later.</p>}
      <p className="footnote">A keepsake for Chapter 20 · 26 November 2026</p>
    </section>
  </main>;
}