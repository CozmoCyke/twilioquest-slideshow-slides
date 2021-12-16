import Link from "next/link";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>TwilioQuest Slideshow</h1>
        <ol>
          <li>
            <Link href="/slide-1">FIRST slide!</Link>
          </li>
          <li>
            <Link href="/slide-2">SECOND slide!</Link>
          </li>
          <li>
            <Link href="/slide-3">THIRD slide!</Link>
          </li>
        </ol>
      </main>
    </>
  );
}
