import { Link, Links } from "./index";

export const links: Links = [
  {
    href: "/#about",
    en: {
      title: "About",
    },
    he: {
      title: "אודות",
    },
  },
  {
    href: "/#consultation",
    en: {
      title: "Consultation",
    },
    he: {
      title: "ייעוץ",
    },
  },
  {
    href: "/#expirience",
    en: {
      title: "Expirience",
    },
    he: {
      title: "נסיון",
    },
  },

  {
    href: "/#contact",
    en: {
      title: "Contact",
    },
    he: {
      title: "צור קשר",
    },
  },
];

export const routeToIndexMap = links.reduce((acc: any, curr: Link) => {
  acc[curr.href] = links.indexOf(curr);
  return acc;
}, {});
