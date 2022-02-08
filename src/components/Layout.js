import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();

  const { forceFooter, embedded } = router.query;

  let FooterComponent = <Footer />;

  if (embedded && !forceFooter) {
    FooterComponent = null;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {FooterComponent}
    </>
  );
};

export default Layout;
