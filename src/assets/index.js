import friendly from "./home/desktop/friendly.svg";
import passionate from "./home/desktop/passionate.svg";
import resourceful from "./home/desktop/resourceful.svg";
import logoDark from "./shared/desktop/logo-dark.png";
import logoLight from "./shared/desktop/logo-light.png";
import close from "./shared/mobile/icon-close.svg";
import hamburger from "./shared/mobile/icon-hamburger.svg";

export const home = {
  desktop: { friendly, passionate, resourceful },
};

// export const shared = {
//   desktop: { logoDark, logoLight },

//   mobile: { close, hamburger }
// }

export const shared = [
  { logoDark, logoLight },

  { close, hamburger },
];

// export { friendly, passionate, resourceful };
