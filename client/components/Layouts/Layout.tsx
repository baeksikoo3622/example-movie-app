import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
