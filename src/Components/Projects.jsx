import React from "react";
import { Link } from "react-router-dom";

import styles from "./Projects.module.scss";
import { shared } from "../assets";

const { rightArrow } = shared.desktop;

const Projects = ({ children, serviceImg1, serviceImg2, service1, service2 }) => {
  return (
    <section className={styles.container}>
      <div className={styles.projectContainer}>{children}</div>

      <div className={styles.serviceContainer}>
        <Link className={styles.link} to={"/webdesign"}>
          <img className={styles.serviceImg} src={serviceImg1} alt="picture of service offered" />
          <div className={styles.overlay}>
            <h2>{service1}</h2>
            <span>
              <h3>View projects</h3>
              <img src={rightArrow} alt="right arrow icon" />
            </span>
          </div>
        </Link>

        <Link className={styles.link} to={"/webdesign"}>
          <img className={styles.serviceImg} src={serviceImg2} alt="picture of service offered" />
          <div className={styles.overlay}>
            <h2>{service2}</h2>
            <span>
              <h3>View projects</h3>
              <img src={rightArrow} alt="right arrow icon" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
