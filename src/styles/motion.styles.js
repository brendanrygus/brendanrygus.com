import { css, keyframes } from "styled-components";

export const MicroInteractionStyles = css`
  transition-property: all;
  transition-duration: ${({ theme }) => theme.motion.speed[1]};
  transition-timing-function: ${({ theme }) => theme.motion.easing.spring};
`;
export const MotionHelperStyles = css`
  transform: translate3d(0, 0, 0);
  perspective: 0px;
`;

const FadeInAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1
}
`;

const SlideInAnimation = keyframes`
from {
  transform: translate3d(0,100%,0);
}
to {
  transform: translate3d(0,0,0);
}
`;

export const FadeInStyles = css`
  animation-fill-mode: both;
  animation-name: ${FadeInAnimation};
  will-change: opacity;
  ${MotionHelperStyles};
`;

export const SlideInStyles = css`
  animation-fill-mode: both;
  animation-name: ${SlideInAnimation};
  will-change: transform;
  ${MotionHelperStyles};
`;
