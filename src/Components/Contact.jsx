import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Location from "./Location";
import Footer from "./Footer";
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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

  // Handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Can't be empty";
    } else {
      if (name.trim().length < 3)
        newErrors.name = "Can't be less than 3 characters";
    }

    if (email.trim() === "") {
      newErrors.email = "Can't be empty";
    }

    if (phone.trim() === "") {
      newErrors.phone = "Can't be empty";
    } else {
      if (phone.trim().length < 10)
        newErrors.phone = "Can't be less than 10 numbers";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

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
          <form
            className={styles.form}
            action=""
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <span className={styles.inputWrapper}>
              <input
                value={name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p>
                  {errors.name} <img src={iconError} alt="caution" />
                </p>
              )}
            </span>
            <span className={styles.inputWrapper}>
              <input
                value={email}
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p>
                  {errors.email} <img src={iconError} alt="caution" />
                </p>
              )}
            </span>
            <span className={styles.inputWrapper}>
              <input
                value={phone}
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <p>
                  {errors.phone} <img src={iconError} alt="caution" />
                </p>
              )}
            </span>
            <textarea
              value={message}
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
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
