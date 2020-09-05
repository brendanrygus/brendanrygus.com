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

const colorPalette = {
  aurora: "#6EEA9D", // #70EA9D
  banana: "#FFC950",
  black: "#000000",
  black8: "rgba(0, 0, 0, 0.88)",
  black6: "rgba(0, 0, 0, 0.66)",
  black4: "rgba(0, 0, 0, 0.44)",
  black2: "rgba(0, 0, 0, 0.22)",
  black1: "rgba(0, 0, 0, 0.11)",
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
  white: "#FFFFFF"
};

const colors = {
  borderPrimary: colorPalette.black1,
  borderHighlight: colorPalette.canary,
  brandPrimary: colorPalette.blurple,
  surfaceBase: colorPalette.white,
  surfaceBody: colorPalette.sand,
  surfaceMuted: "rgba(0,0,0,0.02)",
  surfaceDark: colorPalette.void,
  surfaceCallout: colorPalette.canary,
  textPrimary: colorPalette.black8,
  textSecondary: colorPalette.black6,
  textMuted: colorPalette.black4,
  textOnDark: colorPalette.white,
  textAction: colorPalette.rose,
  textCallout: colorPalette.canary,
  textOnCallout: colorPalette.void,
  uiDivider: colorPalette.black1,
  uiShadow: colorPalette.black1
};

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
    color: colors.textOnCallout
  },
  Dark: {
    bgColor: colors.surfaceDark,
    color: colors.textOnDark
  },
  Informational: {
    bgColor: "transparent",
    color: colors.textMuted
  }
};

const buttonVariants = {
  Primary: {
    bgColor: colors.brandPrimary,
    color: colors.textOnDark
  },
  Secondary: {
    bgColor: colors.textAction,
    color: colors.textOnDark
  },
  Cta: {
    bgColor: colors.surfaceCallout,
    color: colorPalette.textOnCallout
  },
  Flat: {
    bgColor: "transparent",
    color: colors.textPrimary
  }
};

export const theme = {
  colors,
  variants,
  buttonVariants,
  fonts: {
    primary: "'Work Sans', Helvetica, Arial, sans-serif"
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
  motion: {
    easing: {
      default: "ease",
      enter: "ease-in",
      exit: "ease-out",
      spring: "cubic-bezier(0.33, 0, 0, 1)"
    },
    speed: ["100ms", "200ms", "300ms", "600ms", "1000ms"]
  },
  spacing: [".125rem", ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem"]
};
