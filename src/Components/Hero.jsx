import React from "react";
import { Link } from "react-router-dom";

import Button from './Button';
import { home } from "../assets";
import styles from './Hero.module.scss';
import Blob from "./Blob";

const { blob, phone } = home.desktop;

const Hero = () => {
  return (
    <section>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.intro1}>Award-winning custom <br /> designs and digital <br /> branding solutions</h1>
          <p className={styles.intro2}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to={'/contact'}>
            <Button type={'heroBtn'} color={'btnWhite'}>Learn More</Button>
          </Link>
        </div>

        <div className={styles.heroImage}>
          <img className={styles.phone} src={phone} alt="phone image" />
          <img className={styles.blob} src={blob} alt="background blob image" />
        </div>
      </div>
      <Blob type={'left'}/>
    </section>
  );
};

export default Hero;
