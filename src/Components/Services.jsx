import React from 'react';

import styles from './Services.module.scss';

import { home, shared } from '../assets';

const { webDesignlg, appDesign, graphicDesign } = home.desktop;
const { rightArrow } = shared.desktop;

const Services = () => {
  return (
    <section className={styles.servicesContainer}>
      <div className={`${styles.service} ${styles.webDesign}`}>
        <img className={styles.img} src={webDesignlg} alt="laptop image" />
        <div className={styles.overlay}>
          <h2>Web Design</h2>
          <a className={styles.link} href="">
            <h3>View projects</h3>
            <img src={rightArrow} alt="right arrow icon" />
          </a>
        </div>
      </div>

      <div className={`${styles.service} ${styles.appDesign}`}>
        <img className={styles.img} src={appDesign} alt="mobile phone" />
        <div className={styles.overlay}>
          <h2>App Design</h2>
          <a className={styles.link} href="">
            <h3>View projects</h3>
            <img src={rightArrow} alt="right arrow icon" />
          </a>
        </div>
      </div>

      <div className={`${styles.service} ${styles.graphicDesign}`}>
        <img className={styles.img} src={graphicDesign} alt="graphics design" />
        <div className={styles.overlay}>
          <h2>Graphic Design</h2>
          <a className={styles.link} href="">
            <h3>View projects</h3>
            <img src={rightArrow} alt="right arrow icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;