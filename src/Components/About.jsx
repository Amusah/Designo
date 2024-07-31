import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import styles from "./About.module.scss";

import { about } from "../assets";

const { bgPatternHeroAbout, aboutHero, realDeal, worldClass } = about.desktop;
const { aboutHeroTablet, realDealTablet, worldClassTablet } = about.tablet;
const {
  bgPatternHeroAboutMobile,
  aboutHeroMobile,
  realDealMobile,
  worldClassMobile,
} = about.mobile;

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 660 && window.innerWidth <= 1070)

  function checkView(){
    if(window.innerWidth <= 660){
      setIsMobile(true);
    }

    if(window.innerWidth > 660 && window.innerWidth <= 1070){
      setIsTablet(true);
    }
  }


  useEffect(() => {
    // checkMobileView();

    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, [isMobile, isTablet]);

  return (
    <div className="container">
      <Navbar />
      <main>
        <Banner isMobile={isMobile} isTablet={isTablet} />
        <Card isMobile={isMobile} isTablet={isTablet} />
      </main>
    </div>
  );
};

function Banner({ isMobile, isTablet }) {
  return (
    <div className={`${styles.bannerContainer} border-radius`}>
      <img
        className={styles.bgPattern}
        src={isMobile ? bgPatternHeroAboutMobile : bgPatternHeroAbout}
        alt="blob pattern image"
      />
      <div className={styles.bannerText}>
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      {/* <img className={styles.heroImage} src={isMobile ? aboutHeroMobile : aboutHero} alt="hero-image" /> */}
      <img className={styles.heroImage} src={isMobile ? aboutHeroMobile : isTablet ? aboutHeroTablet : aboutHero} alt="hero-image" />
    </div>
  );
}

function Card({ isMobile, isTablet }){
  return (
    <div className={styles.cardComponent}>
      
      <img src={isMobile ? worldClassMobile : isTablet ? worldClassTablet : worldClass} alt="Image of a lady" />
    </div>
  );
}

export default About;
