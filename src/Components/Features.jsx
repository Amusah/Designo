import React from "react";

import styles from "./Features.module.scss";
import { features } from "../constants";
import Blob from './Blob';
import CTA from "./CTA";




const Features = () => {
  return (
    <section className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <article className={styles.feature} key={feature.id}>
          <div className={styles.featureHead}>
            <img className={styles.featureIcon} src={feature.icon} alt="feature image" />
            <img className={`${styles.featureBg} ${index + 1 === 2 ? styles.rotateBg2 : index + 1 === 3 ? styles.rotateBg3 : ''}`} src={feature.bgPattern} alt="background circle image" />
          </div>
          <div className={styles.featureBody}>
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        </article>
      ))}
      <Blob type={'right'} />
      {/* <CTA /> */}
    </section>
  );
};

export default Features;
