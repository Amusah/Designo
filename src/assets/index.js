// Home
import friendly from "./home/desktop/friendly.svg";
import passionate from "./home/desktop/passionate.svg";
import resourceful from "./home/desktop/resourceful.svg";
import blob from "./home/desktop/bg-pattern-hero-home.svg";
import phone from "./home/desktop/image-hero-phone.png";
import webDesignlg from "./home/desktop/image-web-design-large.jpg";
import webDesignsm from "./home/desktop/image-web-design-small.jpg";
import graphicDesign from "./home/desktop/image-graphic-design.jpg";
import appDesign from "./home/desktop/image-app-design.jpg";

// Shared
import logoDark from "./shared/desktop/logo-dark.png";
import logoLight from "./shared/desktop/logo-light.png";
import close from "./shared/mobile/icon-close.svg";
import hamburger from "./shared/mobile/icon-hamburger.svg";
import rightArrow from "./shared/desktop/icon-right-arrow.svg";
import circle from "./shared/desktop/bg-pattern-small-circle.svg";
import leaf from "./shared/desktop/bg-pattern-leaf.svg";
import bgCta from "./shared/desktop/bg-pattern-call-to-action.svg";
import bgPatternIntroTablet from "./shared/tablet/bg-pattern-design-pages-intro-tablet.svg";
import bgPatternIntroMobile from "./shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import facebook from "./shared/desktop/icon-facebook.svg";
import instagram from "./shared/desktop/icon-instagram.svg";
import pinterest from "./shared/desktop/icon-pinterest.svg";
import twitter from "./shared/desktop/icon-twitter.svg";
import youtube from "./shared/desktop/icon-youtube.svg";
import unitedKingdom from "./shared/desktop/illustration-united-kingdom.svg";
import australia from "./shared/desktop/illustration-australia.svg";
import canada from "./shared/desktop/illustration-canada.svg";
import threeCircles from "./shared/desktop/bg-pattern-three-circles.svg";
import twoCircles from './shared/desktop/bg-pattern-two-circles.svg';
// import canadaImg from './shared/desktop/illustration-canada.svg';
// import australiaImg from './shared/desktop/illustration-australia.svg';
// import ukImg from './shared/desktop/illustration-united-kingdom.svg';

// Web design
import bgPatternIntroWeb from "./web-design/desktop/bg-pattern-intro-web.svg";
import bloger from "./web-design/desktop/image-blogr.jpg";
import builder from "./web-design/desktop/image-builder.jpg";
import camp from "./web-design/desktop/image-camp.jpg";
import express from "./web-design/desktop/image-express.jpg";
import photon from "./web-design/desktop/image-photon.jpg";
import transfer from "./web-design/desktop/image-transfer.jpg";

// App design
import bgPatternIntroApp from "./app-design/desktop/bg-pattern-intro-app.svg";
import airfiller from "./app-design/desktop/image-airfilter.jpg";
import eyecam from "./app-design/desktop/image-eyecam.jpg";
import faceit from "./app-design/desktop/image-faceit.jpg";
import loopstudios from "./app-design/desktop/image-loopstudios.jpg";
import todo from "./app-design/desktop/image-todo.jpg";

import bgPatternIntroGraphic from "./graphic-design/desktop/bg-pattern-intro-graphic.svg";
import boxedwater from "./graphic-design/desktop/image-boxed-water.jpg";
import change from "./graphic-design/desktop/image-change.jpg";
import science from "./graphic-design/desktop/image-science.jpg";

// About
import bgPatternHeroAbout from "./about/desktop/bg-pattern-hero-about-desktop.svg";
import aboutHero from "./about/desktop/image-about-hero.jpg";
import realDeal from "./about/desktop/image-real-deal.jpg";
import worldClass from "./about/desktop/image-world-class-talent.jpg";

import aboutHeroTablet from "./about/tablet/image-about-hero.jpg";
import realDealTablet from "./about/tablet/image-real-deal.jpg";
import worldClassTablet from "./about/tablet/image-world-class-talent.jpg";

import bgPatternHeroAboutMobile from "./about/mobile/bg-pattern-hero-about-mobile.svg";
import aboutHeroMobile from "./about/mobile/image-about-hero.jpg";
import realDealMobile from "./about/mobile/image-real-deal.jpg";
import worldClassMobile from "./about/mobile/image-world-class-talent.jpg";

// Locations
import mapAustralia from './locations/desktop/image-map-australia.png';
import mapCanada from "./locations/desktop/image-map-canada.png";
import mapUk from "./locations/desktop/image-map-united-kingdom.png";

import mapAustraliaTablet from "./locations/tablet/image-map-australia.png";
import mapCanadaTablet from "./locations/tablet/image-map-canada.png";
import mapUkTablet from "./locations/tablet/image-map-uk.png";

export const about = {
  desktop: {
    bgPatternHeroAbout,
    aboutHero,
    realDeal,
    worldClass,
  },

  tablet: {
    aboutHeroTablet,
    realDealTablet,
    worldClassTablet,
  },

  mobile: {
    bgPatternHeroAboutMobile,
    aboutHeroMobile,
    realDealMobile,
    worldClassMobile,
  },
};

export const home = {
  desktop: {
    friendly,
    passionate,
    resourceful,
    blob,
    phone,
    webDesignlg,
    webDesignsm,
    graphicDesign,
    appDesign,
  },
};

export const web = {
  desktop: {
    bgPatternIntroWeb,
    bloger,
    builder,
    camp,
    express,
    photon,
    transfer,
  },
};

export const app = {
  bgPatternIntroApp,
  airfiller,
  eyecam,
  faceit,
  loopstudios,
  todo,
};

export const graphic = {
  bgPatternIntroGraphic,
  boxedwater,
  change,
  science,
};

export const locations = {
  desktop: { mapAustralia, mapCanada, mapUk },
  tablet: { mapAustraliaTablet, mapCanadaTablet, mapUkTablet }
}

export const shared = {
  desktop: {
    logoDark,
    logoLight,
    rightArrow,
    circle,
    leaf,
    bgCta,
    facebook,
    instagram,
    twitter,
    pinterest,
    youtube,
    unitedKingdom,
    australia,
    canada,
    threeCircles,
    twoCircles
  },

  tablet: { bgPatternIntroTablet, bgPatternIntroMobile },
  mobile: { close, hamburger },
};
