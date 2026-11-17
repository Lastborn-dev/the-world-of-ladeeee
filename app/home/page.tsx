import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function HomePage() {
  const store = await cookies();
  if (!store.has("ladeeee_session")) redirect("/");
  return <main className="home-page">
    <p className="eyebrow">WELCOME TO YOUR LITTLE UNIVERSE</p>
    <h1>Welcome, <em>Ladeeee.</em></h1>
    <p className="home-intro">This little universe has been waiting for you.</p>
    <div className="chapter-card"><span>THE YEAR OF YOU</span><strong>Chapter 20</strong><p>A beautiful new chapter awaits you.</p></div>
    <p className="coming-soon">Your world is being lovingly put together. There is so much waiting for you here.</p>
  </main>;
}