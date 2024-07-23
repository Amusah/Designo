import React from "react";

import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import WeDesign from "../Components/WebDesign";
import Footer from "../Components/Footer";
import Blob from "../Components/Blob";

const WebDesign = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Banner bgPatterntype={"bgPatternRight"}>
          <h2>Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools <br />
            and bring memorable brand experiences.
          </p>
        </Banner>

        <WeDesign />
      </div>
      <Footer />
    </>
  );
};

export default WebDesign;
