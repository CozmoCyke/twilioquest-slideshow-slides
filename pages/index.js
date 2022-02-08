import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../src/components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main>
        <h1>TwilioQuest Slideshow</h1>
        <ol>
          <li>
            <Link
              href={`/slide-1${
                router.query.embedded ? "?embedded=true&forceFooter=true" : ""
              }`}
            >
              FIRST slide!
            </Link>
          </li>
          <li>
            <Link
              href={`/slide-2${
                router.query.embedded ? "?embedded=true&forceFooter=true" : ""
              }`}
            >
              SECOND slide!
            </Link>
          </li>
          <li>
            <Link
              href={`/slide-3${
                router.query.embedded ? "?embedded=true&forceFooter=true" : ""
              }`}
            >
              THIRD slide!
            </Link>
          </li>
        </ol>
      </main>
    </>
  );
}
