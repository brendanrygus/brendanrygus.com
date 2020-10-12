import { Images } from "./assets";

export const meta = {
  title: "Portfolio",
  titleDecorator: "| Brendan Rygus",
  description: ""
};

export const contact = {
  name: "Brendan Rygus",
  email: "brendan.rygus@gmail.com",
  links: [
    {
      label: "Github",
      url: "https://github.com/brendanrygus"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/brendanrygus"
    },
    { label: "Instagram", url: "https://instagram.com/brendanrygus" }
  ]
};

const portfolio = {
  heroTitle: "UX Developer",
  heroSubtitle:
    "I create accessible, performant, and delightful user experiences.",
  title: "Recent Work",
  subtitle: "Test it in prod!"
};

export const projects = [
  {
    id: "uniqlo-jp",
    brand: "Uniqlo JP",
    title: "Unique Clothing",
    description:
      "On-site technical consultant and feature developer for the new flagship web product.",
    tags: ["React", "Redux", "TypeScript", "Design System"],
    timestamp: "Developed at Rangle Japan, 2019-2020.",
    cta: "Coming Soon",
    url: "https://uniqlo.com/jp/ja",
    imageSrc: Images.Uniqlo,
    imageCaption: "Uniqlo Japan",
    imageAlt: "Shinjuku Uniqlo store",
    brandColor: "#FF0000",
    icon: "Cart",
    logo: "Uniqlo"
  },
  {
    id: "roche-spol",
    brand: "Roche Diabetes Care",
    title: "Diabetes Care Platform",
    description:
      "A personalized approach to diabetes care used by patients & professionals around the world.",
    cta: "See the docs",
    tags: ["React", "Redux", "RxJs", "TypeScript", "styled-components"],
    timestamp: "Developed at Rangle.io, 2017-2018.",
    url: "https://www.diabetescareplatform.com/",
    imageSrc: Images.Roche,
    imageAlt: "",
    imageCaption: "Diabetes Care",
    brandColor: "#0066CC",
    icon: "Tube",
    logo: "Roche"
  },
  {
    id: "hims",
    brand: "For Hims",
    title: "Men's Health",
    description:
      "Rebuilding the front end of a controversial startup on the road to 'unicorn'-level growth.",
    tags: ["React", "Redux", "styled-components", "Component Library"],
    timestamp: "Developed at Rangle.io, 2019.",
    cta: "Shop Now",
    url: "https://forhims.com",
    imageSrc: Images.Hims,
    imageCaption: "For Hims",
    imageAlt: "",
    // brandColor: "#cc835c",
    brandColor: "#efb27b",
    icon: "Cactus",
    logo: "Hims"
  },
  {
    id: "hers",
    brand: "For Hers",
    title: "Women's Wellness",
    description: "A beautiful e-commerce experience for a new DTC brand.",
    cta: "Shop Now",
    tags: ["React", "Redux", "styled-components", "Component Library"],
    timestamp: "Developed at Rangle.io, 2018-2019.",
    url: "https://forhers.com",
    imageSrc: Images.Hers,
    imageCaption: "For Hers",
    imageAlt: "",
    // brandColor: "#8BB9AE",
    brandColor: "#BED0C4",
    icon: "Mask",
    logo: "Hers"
  }
];
// https://www.accu-chek.com.br/br/solucoes-digitais/index2.html

const errors = {
  errorFallback: "Bummer, something went wrong.",
  pageNotFound: "Bummer, this page no longer exists.",
  returnToTop: "Go home."
};

export default {
  contact,
  errors,
  meta,
  projects,
  portfolio
};
