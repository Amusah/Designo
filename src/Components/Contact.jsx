import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import BannerLarge from "./BannerLarge";
import Location from "./Location";
import Footer from "./Footer";
import CTA from "./CTA";
import Button from "./Button";
import styles from "./Contact.module.scss";

import { contact } from "../assets";

const { bgPatternHeroContact, iconError } = contact.desktop;
const { bgPatternHeroContactMobile } = contact.mobile;

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 660 && window.innerWidth <= 1070
  );
  const [email, setEmail] = useState('');

  function checkView() {
    if (window.innerWidth <= 660) {
      setIsMobile(true);
    }

    if (window.innerWidth > 660 && window.innerWidth <= 1070) {
      setIsTablet(true);
    }
  }

  useEffect(() => {
    checkView();

    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, [isMobile, isTablet]);

  return (
    <>
      <div className="container">
        <Navbar />
        
        <div className={`${styles.bannerContainer} border-radius`}>
          <img
            className={styles.bgPattern}
            src={isMobile ? bgPatternHeroContactMobile : bgPatternHeroContact}
            alt="blob pattern image"
          />

          <div className={styles.bannerText}>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form className={styles.form} action="">
            <span className={styles.inputWrapper}>
              <input type="text" name="name" placeholder="Name" />
              <p>
                Can’t be empty <img src={iconError} alt="caution" />
              </p>
            </span>
            <span className={styles.inputWrapper}>
              <input type="email" name="email" placeholder="Email Address" />
              <p>
                Can’t be empty <img src={iconError} alt="caution" />
              </p>
            </span>
            <span className={styles.inputWrapper}>
              <input type="text" name="phone" placeholder="Phone" />
              <p>
                Can’t be empty <img src={iconError} alt="caution" />
              </p>
            </span>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            <Button action={"submit"} color={"btnWhite"} type={"heroBtn"}>
              Submit
            </Button>
          </form>
        </div>
        <div className={styles.location}>
        <Location />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
