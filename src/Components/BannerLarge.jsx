import React from "react";

import styles from './BannerLarge.module.scss';

const BannerLarge = ({ children }) => {
  return (
    <div className={`${styles.bannerContainer} border-radius`}>{children}</div>
  );
};

export default BannerLarge;
