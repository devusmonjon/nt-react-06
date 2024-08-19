import { memo } from "react";
import { Hero, Products } from "../components";

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
    </main>
  );
};

export default memo(Home);
