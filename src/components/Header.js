import Head from "next/head";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TwilioQuest Product Summit</title>
        <meta
          name="description"
          content="TwilioQuest Product Summit presentation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.embedded ? (
        <header>
          <button
            onClick={() => {
              window.parent.postMessage({ hide: true }, "*");
            }}
          >
            X
          </button>
        </header>
      ) : null}
    </>
  );
};

export default Header;
