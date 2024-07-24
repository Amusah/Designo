import React from "react";

import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Webdesign from "../Components/WebDesign";
import Footer from "../Components/Footer";
import Blob from "../Components/Blob";

import { web } from "../assets";

const { bgPatternIntroWeb } = web.desktop;

const WebDesign = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Banner bgPatternImg={bgPatternIntroWeb} bgPatterntype={"bgPatternRight"}>
          <h2>Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools <br />
            and bring memorable brand experiences.
          </p>
        </Banner>

        <Webdesign />
      </div>
      <Footer />
    </>
  );
};

export default WebDesign;
