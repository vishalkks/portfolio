import React from "react";
import BlobsPlayground from "../components/animations/BlobsPlayground";
import About from "../components/modules/About";
import Intro from "../components/modules/Intro";

const Home = () => {
  return (
    <BlobsPlayground>
      <Intro />
      <About />
    </BlobsPlayground>
  );
};

export default Home;
