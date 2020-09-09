import { darken, linearGradient } from "polished";
import styled from "styled-components";
import { Absolute, Block } from "components";
import { MicroInteractionStyles } from "styles";

export const AnimatedBlock = styled(Block)`
  ${MicroInteractionStyles};
`;
AnimatedBlock.displayName = "AnimatedBlock";

export const ImageOverlay = styled(Absolute)`
  ${MicroInteractionStyles};
  ${({ isHovered, theme }) =>
    isHovered ? theme.imageOverlayHover : theme.imageOverlay};
`;
ImageOverlay.defaultProps = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  zIndex: 0
};

export const HoverCard = styled(Block)`
  ${MicroInteractionStyles};
  transition-property: border, box-shadow;
  overflow: hidden;
  transform: translateZ(0);

  &:hover,
  &:focus {
    border-color: ${({ hoverColor }) => hoverColor};
    box-shadow: ${({ theme }) => theme.shadows.elevation3};
    outline: none;
  }

  &:link,
  &:visited {
    color: currentColor;
    text-decoration: none;
  }
`;
HoverCard.defaultProps = {
  bg: "surfaceBody",
  borderColor: "borderPrimary",
  borderStyle: "solid",
  borderWidth: 1,
  boxShadow: "elevation1",
  display: "block"
};
HoverCard.displayName = "HoverCard";

export const createGradient = color =>
  linearGradient({
    colorStops: [`${color} 25%`, `${darken(0.12, color)} 75%`],
    toDirection: "to top"
  });
