import React from 'react'

import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Graphic from '../Components/GraphicDesign';
import Footer from '../Components/Footer';

import { graphic } from '../assets';

const { bgPatternIntroGraphic } = graphic;


const GraphicDesign = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Banner
          bgPatternImg={bgPatternIntroGraphic}
          bgPatterntype={"bgPatternLeft"}
        >
          <h2>Graphic Design</h2>
          <p>
            We deliver eye-catching branding materials that are <br /> tailored to meet
            your business objectives.
          </p>
        </Banner>

        <Graphic />
      </div>
      <Footer />
    </>
  );
}

export default GraphicDesign;