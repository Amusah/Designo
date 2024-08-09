import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import CardLarge from "./CardLarge";
import Location from "./Location";
import Footer from "./Footer";
import BannerLarge from "./BannerLarge";

import styles from "./About.module.scss";

import { about } from "../assets";

const { bgPatternHeroAbout, aboutHero, realDeal, worldClass } = about.desktop;
const { aboutHeroTablet, realDealTablet, worldClassTablet } = about.tablet;
const {
  bgPatternHeroAboutMobile,
  aboutHeroMobile,
  realDealMobile,
  worldClassMobile,
} = about.mobile;


const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 660 && window.innerWidth <= 1070
  );

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
        <main>
          <BannerLarge>
            <img
              className={styles.bgPattern}
              src={isMobile ? bgPatternHeroAboutMobile : bgPatternHeroAbout}
              alt="blob pattern image"
            />
            <div className={styles.bannerText}>
              <h1>About Us</h1>
              <p>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </div>

            <img
              className={styles.heroImage}
              src={
                isMobile
                  ? aboutHeroMobile
                  : isTablet
                  ? aboutHeroTablet
                  : aboutHero
              }
              alt="hero-image"
            />
          </BannerLarge>

          <CardLarge
            imgScr={
              // worldClassMobile
              isMobile
                ? worldClassMobile
                : isTablet
                ? worldClassTablet
                : worldClass
            }
          >
            <h2>World-class talent</h2>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </CardLarge>

          <Location />

          <CardLarge
            type={"left"}
            imgScr={
              // worldClassMobile
              isMobile ? realDealMobile : isTablet ? realDealTablet : realDeal
            }
          >
            <h2>World-class talent</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </CardLarge>
        </main>
      </div>

      <Footer />
    </>
  );
};

// export function BannerLarge({ children }) {
//   return (
//     <div className={`${styles.bannerContainer} border-radius`}>
//       {children}
//     </div>
//   );
// }

export default About;
