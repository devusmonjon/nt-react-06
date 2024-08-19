import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { memo } from "react";

const Theme = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  );
};

export default memo(Theme);
