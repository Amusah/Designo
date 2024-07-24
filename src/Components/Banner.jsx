import React, { useState, useEffect } from "react";

import styles from './Banner.module.scss';


const Banner = ({ children, bgPatterntype, bgPatternImg }) => {

  return (
    <div className={`${styles.bannerContainer} border-radius`}>
      <img className={styles[bgPatterntype]} src={bgPatternImg} alt="background pattern" />
      {children}
    </div>
  );
};

export default Banner;
