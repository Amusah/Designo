import { home, shared, web, app, graphic } from "../assets";

const { passionate, resourceful, friendly } = home.desktop;
const { circle, facebook, instagram, twitter, pinterest, youtube } = shared.desktop;
const { bloger, builder, camp, express, photon, transfer } = web.desktop;
const { airfiller, eyecam, faceit, loopstudios, todo } = app;
const { bgPatternIntroGraphic, boxedwater, change, science} = graphic;
const { australia, canada, unitedKingdom } = shared.desktop;

export const navLinks = [
  {
    id: "home",
    title: "Our Company",
    route: "/about",
  },
  {
    id: "locations",
    title: "Locations",
    route: "/locations",
  },
  {
    id: "contact",
    title: "Contact",
    route: "/contact",
  },
];

export const features = [
  {
    id: 1,
    title: "Passionate",
    icon: passionate,
    bgPattern: circle,
    content:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },

  {
    id: 2,
    title: "Resourceful",
    icon: resourceful,
    bgPattern: circle,
    content:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },

  {
    id: 3,
    title: "Friendly",
    icon: friendly,
    bgPattern: circle,
    content:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export const locations = [
  {
    name: "Canada",
    illustration: canada,
    bgPattern: circle,
  },

  {
    name: "Australia",
    illustration: australia,
    bgPattern: circle,
  },

  {
    name: "United Kingdom",
    illustration: unitedKingdom,
    bgPattern: circle,
  }
];

export const webProjects = [
  {
    id: 1,
    title: "Express",
    text: "A multi-carrier shipping website for ecommerce businesses",
    screenshot: express,
  },

  {
    id: 2,
    title: "Transfer",
    text: "Site for low-cost money transfers and sending money within seconds",
    screenshot: transfer,
  },

  {
    id: 3,
    title: "Photon",
    text: "A state-of-the-art music player with high-resolution audio and DSP effects",
    screenshot: photon,
  },

  {
    id: 4,
    title: "Builder",
    text: "Connects users with local contractors based on their location",
    screenshot: builder,
  },

  {
    id: 5,
    title: "Blogr",
    text: "Blogr is a platform for creating an online blog or publication",
    screenshot: bloger,
  },

  {
    id: 6,
    title: "Camp",
    text: "Get expert training in coding, data, design, and digital marketing",
    screenshot: camp,
  },
];

export const appProjects = [
  {
    id: 1,
    title: "Airfilter",
    text: "Solving the problem of poor indoor air quality by filtering the air",
    screenshot: airfiller,
  },

  {
    id: 2,
    title: "Eyecam",
    text: "Product that lets you edit your favorite photos and videos at any time",
    screenshot: eyecam,
  },

  {
    id: 3,
    title: "Faceit",
    text: "Get to meet your favorite internet superstar with the faceit app",
    screenshot: faceit,
  },

  {
    id: 4,
    title: "Todo",
    text: "A todo app that features cloud sync with light and dark mode",
    screenshot: todo,
  },

  {
    id: 5,
    title: "Loopstudios",
    text: "A VR experience app made for Loopstudios",
    screenshot: loopstudios,
  },
];

export const graphicProjects = [
  {
    id: 1,
    title: "TIM BROWN",
    text: "A book cover designed for Tim Brown’s new release, 'Change’",
    screenshot: change,
  },

  {
    id: 2,
    title: "BOXED WATER",
    text: "A simple packaging concept made for Boxed Water",
    screenshot: boxedwater,
  },

  {
    id: 3,
    title: "SCIENCE!",
    text: "A poster made in collaboration with the Federal Art Project",
    screenshot: science,
  },
];

export const socials = [
  `<path
    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
    fill="#E7816B"
    fill-rule="nonzero"
  />`,

  `<path 
    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" 
    fill="#E7816B" 
    fill-rule="nonzero"
    />`,

  `<path 
    d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" 
    fill="#E7816B" 
    fill-rule="nonzero"
    />`,

  `<path 
    d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" 
    fill="#E7816B" 
    fill-rule="nonzero"
    />`,

  `<path 
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" 
    fill="#E7816B" 
    fill-rule="nonzero"
    />`,
];
