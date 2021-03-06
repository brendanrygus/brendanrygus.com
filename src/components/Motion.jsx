import React from "react";
import styled, { css } from "styled-components";
import { FadeInStyles, SlideInStyles } from "styles";

import { Block } from "./Block";

const AnimationTimingStyles = css`
  animation-delay: ${({ delay, theme }) => theme.motion.speed[delay] || delay};
  animation-duration: ${({ duration, theme }) =>
    theme.motion.speed[duration] || duration};
`;

const FadeInBlock = styled(Block)`
  ${FadeInStyles};
  ${AnimationTimingStyles};
  animation-timing-function: ${({ theme }) => theme.motion.easing.enter};
`;
FadeInBlock.displayName = "FadeInBlock";

export const FadeIn = ({ children, delay, duration, ...props }) => {
  return (
    <FadeInBlock delay={delay} duration={duration} {...props}>
      {children}
    </FadeInBlock>
  );
};
FadeIn.defaultProps = {
  delay: "0ms",
  duration: 2
};

const SlideInBlock = styled(Block)`
  ${SlideInStyles};
  ${AnimationTimingStyles};
  animation-timing-function: ${({ theme }) => theme.motion.easing.spring};
`;
SlideInBlock.displayName = "SlideInBlock";

export const SlideIn = ({ children, delay, duration, ...props }) => {
  return (
    <SlideInBlock delay={delay} duration={duration} {...props}>
      {children}
    </SlideInBlock>
  );
};
SlideIn.defaultProps = {
  delay: "0ms",
  duration: 2
};
