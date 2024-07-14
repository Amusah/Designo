import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Features from "../Components/Features";

function Homepage({ toggle, setToggle }) {
  return (
    <>
      <div className="container">
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Hero />
        <Services />
        <Features />
      </div>
    </>
  );
}

export default Homepage;
