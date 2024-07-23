import React, { useState, useEffect } from "react";

import styles from './Banner.module.scss';
import { shared, web } from "../assets";

const { bgPattern,  } = shared.desktop;
  const { bgPatternIntroTablet, bgPatternIntroMobile } = shared.tablet;
  // const {bgPatternIntroMobile} = shared.mobile;

  const {bgPatternIntroWeb} = web.desktop;

const Banner = ({ children, bgPatterntype }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

   function checkMobileView() {
     setIsMobile(window.innerWidth <= 660);
   }
   useEffect(() => {
     window.addEventListener("resize", checkMobileView);
     return () => window.removeEventListener("resize", checkMobileView);
   }, []);

  return (
    <div className={`${styles.bannerContainer} border-radius`}>
      <img className={styles[bgPatterntype]} src={bgPatternIntroWeb} alt="background pattern" />
      {/* <img className={styles[type]} src={isMobile ? bgPatternIntroMobile : bgPatternIntroTablet} alt="background pattern" /> */}
      {children}
    </div>
  );
};

export default Banner;
