import styled, { keyframes } from "styled-components";
import { Block } from "components";

export const VisuallyHidden = styled.span`
  visibility: hidden;
`;

export const WaveAnimation = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(100%)
  }
`;

export const SkeletonLoadingBar = styled(Block)`
  border-radius: 0.25rem;
  height: 1em;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    background: currentColor;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    position: absolute;
    right: 0;
    top: 0;
  }

  &::after {
    content: "";
    animation: ${WaveAnimation} 2s ${({ theme }) => theme.motion.easing.default}
      infinite;
    background-image: linear-gradient(
      90deg,
      transparent 0,
      currentColor 50%,
      transparent 100%
    );
    bottom: 0;
    left: 0;
    opacity: 0.25;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
SkeletonLoadingBar.displayName = "SkeletonLoadingBar";
