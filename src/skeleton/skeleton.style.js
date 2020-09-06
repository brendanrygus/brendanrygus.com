import styled, { css, keyframes } from "styled-components";
import { Block } from "components/Block";

export const WaveAnimation = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(100%)
  }
`;

export const WavePlaceholderStyles = css`
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  &::before {
    background: currentColor;
    opacity: 0.1;
  }
  &::after {
    animation: ${WaveAnimation} 2s ${({ theme }) => theme.motion.easing.default}
      infinite;
    background-image: linear-gradient(
      90deg,
      transparent 0,
      currentColor 50%,
      transparent 100%
    );
    opacity: 0.25;
  }
`;

export const SkeletonLoadingBar = styled(Block)`
  border-radius: 0.25rem;
  height: 1em;
  ${WavePlaceholderStyles};
`;
SkeletonLoadingBar.displayName = "SkeletonLoadingBar";
