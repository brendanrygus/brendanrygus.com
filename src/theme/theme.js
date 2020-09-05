// space	margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
// fontSizes	font-size
// colors	color, background-color, border-color
// fonts	font-family
// fontWeights	font-weight
// lineHeights	line-height
// letterSpacings	letter-spacing
// maxWidths	max-width
// minWidths	min-widths
// widths	width
// maxHeights	max-height
// minHeights	min-height
// heights	height
// borders	border, border-top, border-right, border-bottom, border-left
// borderWidths	border-width
// borderStyles	border-style
// radii	border-radius
// shadows	box-shadow, text-shadow
// zIndices	z-index

import { rgba, em, darken } from "polished";
import { css } from "styled-components";

// const bold = {
//   aquamarine: "#83FFC0",
//   springGreen: "#07FE86", // guppieGreen
//   jade: "#01AA60",
//   valhalla: "#26283E" // maritimeBlue
// };

const colorPalette = {
  aurora: "#6EEA9D", // #70EA9D or #6EEA9D
  banana: "#FFC950",
  black: "#000000",
  black8: "rgba(0, 0, 0, 0.88)",
  black7: "rgba(0, 0, 0, 0.77)",
  black6: "rgba(0, 0, 0, 0.66)",
  black5: "rgba(0, 0, 0, 0.55)",
  black4: "rgba(0, 0, 0, 0.44)",
  black3: "rgba(0, 0, 0, 0.33)",
  black2: "rgba(0, 0, 0, 0.22)",
  black1: "rgba(0, 0, 0, 0.11)",
  white1: "rgba(255, 255, 255, 0.11)",
  blizzard: "#9AEEEB", // permafrost,
  blurple: "#4941ec",
  canary: "#FFF791",
  denim: "#1B5ECE",
  hawaii: "#00BBFF",
  ice: "#E6F7FF",
  peachPuff: "#FFDBB6",
  rose: "#FD918F",
  sand: "#F9F8F4",
  void: "#071327",
  winterWizard: "#A2E3FF",
  white: "#FFFFFF",

  dragonLord: "#6645DA", // inaccessible on black
  flickeringSea: "#505AF0",
  orchid: "#7783FD", // AA on BG
  // #7D63D0
  gold: "#D2AA6C",
  sunset: "#ff5549"
};

// --surfaceBase: #1a1a1a;
// --surfaceBody: #302D30;
//   surfaceBase: colorPalette.white,
// surfaceBody: colorPalette.ice,
const colorsDark = {
  borderPrimary: colorPalette.white1,
  borderHighlight: rgba(colorPalette.dragonLord, 0.25),
  brandPrimary: colorPalette.denim,
  surfaceBase: "#111111",
  surfaceBody: "#1E1E1E",
  surfaceGradient: "linear-gradient(180deg,#0e0e0e 0%,#111 100%)",
  surfaceAlpha: rgba(colorPalette.white, 0.12),
  surfaceAlpha2: "rgba(17, 17, 17, 0.88)", // TODO: Rename
  surfaceMuted: "#302D30",
  surfaceCallout: colorPalette.sunset,
  textPrimary: colorPalette.white,
  textSecondary: rgba(255, 255, 255, 0.8),
  textMuted: rgba(colorPalette.white, 0.5),
  textReverse: colorPalette.black8,
  textOnDark: colorPalette.white,
  textError: darken(0.25, colorPalette.sunset),
  textAction: colorPalette.hawaii,
  textCallout: colorPalette.sunset,
  uiDivider: colorPalette.white1,
  uiShadow: colorPalette.black1
};

const colorsLight = {
  borderPrimary: colorPalette.black1,
  borderHighlight: colorPalette.dragonLord,
  brandPrimary: colorPalette.denim,
  surfaceBase: "#F6F6F6",
  surfaceBody: "#FFF",
  surfaceAlpha: rgba(colorPalette.black, 0.12),
  surfaceAlpha2: rgba(colorPalette.white, 0.88),
  surfaceMuted: "#EEE",
  surfaceCallout: colorPalette.dragonLord,
  textPrimary: colorPalette.black8,
  textSecondary: colorPalette.black6,
  textMuted: colorPalette.black5,
  textOnDark: colorPalette.white,
  textReverse: colorPalette.white,
  textAction: colorPalette.hawaii,
  textCallout: colorPalette.dragonLord,
  uiDivider: colorPalette.black1,
  uiShadow: "rgba(0, 0, 0, 0.05)"
};

const colors = colorsDark;

const variants = {
  Primary: {
    bgColor: colors.surfaceBase,
    color: colors.textPrimary
  },
  Secondary: {
    bgColor: colors.surfaceBody,
    color: colors.textSecondary
  },
  Brand: {
    bgColor: colors.brandPrimary,
    color: colors.textOnDark
  },
  Callout: {
    bgColor: colors.surfaceCallout,
    color: colorPalette.black8
  },
  // Dark: {
  //   bgColor: colors.surfaceDark,
  //   color: colors.textOnDark
  // },
  Informational: {
    bgColor: "transparent",
    color: colors.textMuted
  }
};

const buttonVariants = {
  Primary: {
    bgColor: colorPalette.black,
    bgHover: colorPalette.blurple,
    color: colors.textOnDark,
    linkColor: colors.brandPrimary,
    linkHover: colorPalette.blurple
  },
  Secondary: {
    bgColor: colorPalette.white,
    bgHover: colorPalette.ice,
    color: colorPalette.black8,
    linkColor: colorPalette.hawaii,
    linkHover: colorPalette.ice
  },
  Cta: {
    bgColor: colors.surfaceCallout,
    bgHover: colorPalette.flickeringSea,
    color: colorPalette.white,
    linkColor: colors.surfaceCallout,
    linkHover: colorPalette.flickeringSea
  },
  Flat: {
    bgColor: "transparent",
    color: "currentColor",
    linkColor: "currentColor"
  },
  Ghost: {
    bgColor: "transparent",
    borderColor: "currentColor",
    color: "currentColor"
  }
};

const breakpoints = [em(640), em(896), em(1024), em(1600)];
// Alias keys
breakpoints.small = breakpoints[0];
breakpoints.medium = breakpoints[1];
breakpoints.large = breakpoints[2];
breakpoints.xlarge = breakpoints[3];

export const theme = {
  breakpoints,
  colors,
  variants,
  buttonVariants,

  fonts: {
    primary: "'IBM Plex Sans', sans-serif",
    // primary: "'Cormorant', serif",
    secondary: "'IBM Plex Mono', monospace"
  },
  fontSizes: [
    "0.625rem",
    ".75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.25rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem"
  ],
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  lineHeights: {
    base: 1,
    heading: 1.125,
    body: 1.6
  },
  letterSpacings: ["0.025em", "0.05em", "0.1em"],
  motion: {
    easing: {
      default: "ease",
      enter: "ease-in",
      exit: "ease-out",
      // spring: "cubic-bezier(0.33, 0, 0, 1)",
      spring: "cubic-bezier(0.215, 0.61, 0.355, 1)"
    },
    speed: ["100ms", "200ms", "300ms", "600ms", "1000ms"]
  },
  radii: ["1px", ".125rem", ".25rem", ".5rem", "1rem"],
  spacing: [".125rem", ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem"],
  shadows: {
    elevation1: `0 1px 2px ${colors.uiShadow}, 0 0 2px ${colors.uiShadow}`,
    elevation2: `0 4px 8px ${colors.uiShadow}, 0 0 4px ${colors.uiShadow}`,
    elevation3: `0 6px 16px ${colors.uiShadow}, 0 0 6px ${colors.uiShadow}`,
    elevation4: `0 12px 32px ${colors.uiShadow}, 0 0 12px ${colors.uiShadow}`
  }
};

const imageOverlayStyles = {
  dark: css`
    mix-blend-mode: soft-light;
  `,
  light: css`
    mix-blend-mode: multiply;
    opacity: 0.25;
  `
};
const imageOverlayHoverStyles = {
  dark: css`
    mix-blend-mode: soft-light;
  `,
  light: css`
    mix-blend-mode: soft-light;
    opacity: 1;
  `
};

export const themes = {
  dark: {
    ...theme,
    colors: colorsDark,
    imageOverlay: imageOverlayStyles.dark,
    imageOverlayHover: imageOverlayHoverStyles.dark
  },
  light: {
    ...theme,
    colors: colorsLight,
    imageOverlay: imageOverlayStyles.light,
    imageOverlayHover: imageOverlayHoverStyles.light
  }
};

const matchMedia = query =>
  window.matchMedia ? window.matchMedia(query).matches : false;

export const userPrefersDark = () => matchMedia("(prefers-color-scheme: dark)");
