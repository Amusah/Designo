import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";

function Homepage({ toggle, setToggle }) {
  return (
    <>
      <div className="container">
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Hero />
        <Services />
        <Features />
      </div>
      <Footer cta={<CTA />} />
    </>
  );
}

export default Homepage;
