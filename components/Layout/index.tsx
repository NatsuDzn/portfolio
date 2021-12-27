import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

const index = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
