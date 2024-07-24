import React from 'react';

import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Appdesign from '../Components/AppDesign';
import Footer from '../Components/Footer';

import { app } from '../assets';

const { bgPatternIntroApp } = app;

const AppDesign = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Banner bgPatternImg={bgPatternIntroApp} bgPatterntype={"bgPatternLeft"}>
          <h2>App Design</h2>
          <p>
            Our mobile designs bring intuitive digital solutions <br /> to your
            customers right at their fingertips.
          </p>
        </Banner>

        <Appdesign />
      </div>
      <Footer />
    </>
  );
}

export default AppDesign;