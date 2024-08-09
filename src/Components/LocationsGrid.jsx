import React, { useState, useEffect } from "react";
import styles from "./LocationsGrid.module.scss";

import { shared, locations } from "../assets";

const { twoCircles } = shared.desktop;
const { mapAustralia, mapCanada, mapUk } = locations.desktop;
const { mapAustraliaTablet, mapCanadaTablet, mapUkTablet} = locations.tablet;

const LocationsGrid = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 660 && window.innerWidth <= 1070
  );

  function checkView() {
    // if (window.innerWidth <= 660) {
    //   setIsMobile(true);
    // }

    if (window.innerWidth > 660 && window.innerWidth <= 1070) {
      setIsTablet(true);
    }
  }

  useEffect(() => {
    checkView();

    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, [isTablet]);

  return (
    <div className={styles.container}>
      <div className={`${styles.location} ${styles.canada}`}>
        <h2>Canada</h2>
        <div className={styles.address}>
          <p>
            <span>Designo Central Office</span> <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p>
            <span>Contact</span> <br />
            P : +1 253-863-8967 <br />M : contact@designo.co
          </p>
        </div>
        <img className={styles.bgPattern} src={twoCircles} alt="bgPattern" />
      </div>

      {/* <div className={`${styles.map}`}>
        <Map lat={61.0666922} lng={-107.991707} />
      </div> */}
      <img
        className={`${styles.map} ${styles.canadaMap} border-radius`}
        src={isTablet ? mapCanadaTablet : mapCanada}
        alt="Map image"
      />
      <img
        className={`${styles.map} ${styles.australiaMap} border-radius`}
        src={isTablet ? mapAustraliaTablet : mapAustralia}
        alt="Map image"
      />

      <div className={`${styles.location} ${styles.australia}`}>
        <h2>Australia</h2>
        <div className={styles.address}>
          <p>
            <span>Designo AU Office</span> <br />
            19 Balonne Street Street <br />
            New South Wales 2443
          </p>
          <p>
            <span>Contact</span> <br />
            P : (02) 6720 9092 <br />M : contact@designo.au
          </p>
        </div>
        <img className={styles.bgPattern} src={twoCircles} alt="bgPattern" />
      </div>

      <div className={`${styles.location} ${styles.uk}`}>
        <h2>United Kingdom</h2>
        <div className={styles.address}>
          <p>
            <span>Designo UK Office</span> <br />
            13 Colorado Way <br />
            Rhyd-y-fro SA8 9GA
          </p>
          <p>
            <span>Contact</span> <br />
            P : 078 3115 1400 <br />M : contact@designo.uk
          </p>
        </div>
        <img className={styles.bgPattern} src={twoCircles} alt="bgPattern" />
      </div>

      <img
        className={`${styles.map} ${styles.ukMap} border-radius`}
        src={isTablet ? mapUkTablet : mapUk}
        alt="Map image"
      />
    </div>
  );
};

export default LocationsGrid;
