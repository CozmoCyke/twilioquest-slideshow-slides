import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <main>{children}</main>
      {router.query.embedded ? null : <Footer />}
    </>
  );
};

export default Layout;
