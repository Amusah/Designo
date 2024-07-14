import { home, shared } from "../assets";

const { passionate, resourceful, friendly } = home.desktop;
const { circle } = shared.desktop;

export const navLinks = [
  {
    id: "home",
    title: "Our Company",
  },
  {
    id: "locations",
    title: "Locations",
  },
  {
    id: "contact",
    title: "Contact",
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
