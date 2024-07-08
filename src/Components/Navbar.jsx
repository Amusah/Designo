import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { shared } from "../assets";
import styles from "./Navbar.module.scss";

// const [{ logoDark, logoLight }, { close, hamburger }] = shared;

const { logoDark, logoLight } = shared.desktop;
const { close, hamburger } = shared.mobile;



const Navbar = ({ toggle, setToggle }) => {
  // const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

  function checkMobileView() {
    setIsMobile(window.innerWidth <= 660);
  }

  function handleToggleNav() {
    setToggle((toggle) => !toggle);
  }

  useEffect(() => {
    // checkMobileView();

    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  return (
    <nav className={`${styles.nav}`}>
      <img className={styles.navLogo} src={logoDark} alt="logo" />
      <ul
        className={`${styles.navLinks} ${
          isMobile ? (toggle ? "displayNav" : "") : ""
        }`}
      >
        {navLinks.map((link, idx) => (
          <li
            key={link.id}
            className={`${styles.link} ${
              idx === navLinks.length - 1 ? "" : styles.mr
            }`}
            onClick={isMobile ? handleToggleNav : undefined}
          >
            {link.title}
          </li>
        ))}
      </ul>
      {isMobile && (
        <img
          className="cursor-pointer"
          onClick={handleToggleNav}
          src={toggle ? close : hamburger}
          alt="hamburger icon"
        />
      )}
    </nav>
  );
};

export default Navbar;
