import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <Link href={`/${router.query.embedded ? "?embedded=true" : ""}`}>
        {"<- Back"}
      </Link>
    </footer>
  );
};

export default Footer;
