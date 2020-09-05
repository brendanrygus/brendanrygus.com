import React from "react";
import styled from "styled-components";
import { darken, rem } from "polished";

import { Button as ButtonElement } from "./elements";

const BUTTON_ACTIVE_DARKEN = 0.12;

// Use named variations to drive styling from your theme object
// CSS-in-JS can also be leveraged
// ...to create a switch of styles for each variant
export const ButtonWithVariants = styled(ButtonElement)`
  background-color: ${({ theme, variant }) =>
    theme.buttonVariants[variant].bgColor};
  border-radius: ${rem(4)};
  border-color: ${({ theme, variant }) =>
    theme.buttonVariants[variant].borderColor || theme.colors.borderPrimary};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.uiShadow};
  box-shadow: ${({ theme }) => theme.shadows.elevation1};
  color: ${({ theme, variant }) => theme.buttonVariants[variant].color};
  font-family: ${({ theme }) => theme.fonts.primary};
  height: ${rem(56)};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  transition-property: background, box-shadow;
  transition-duration: ${({ theme }) => theme.motion.speed[1]};
  transition-timing-function: ${({ theme }) => theme.motion.spring};
  position: relative;
  text-align: center;

  &:link {
    color: ${({ theme, variant }) => theme.buttonVariants[variant].color};
    line-height: calc(${rem(56)} - (${({ theme }) => theme.spacing[0]} * 2));
    text-decoration: none;

    &:visited {
      color: ${({ theme, variant }) => theme.buttonVariants[variant].color};
    }
  }

  &::before {
    content: "";
    border-radius: 0.25rem;
    border: 2px solid
      ${({ theme, variant }) => theme.buttonVariants[variant].bgColor};
    box-sizing: content-box;
    height: 100%;
    left: -8px;
    opacity: 0;
    padding: 6px;
    position: absolute;
    top: -8px;
    transition-property: border, opacity;
    transition-duration: ${({ theme }) => theme.motion.speed[1]};
    transition-timing-function: ${({ theme }) => theme.motion.spring};
    width: 100%;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme, variant }) =>
      theme.buttonVariants[variant].bgHover};
    box-shadow: ${({ theme }) =>
      `0 ${theme.spacing[1]} ${theme.spacing[2]} ${theme.colors.uiShadow}`};
  }

  &:focus {
    /* border-color: ${({ theme, variant }) =>
      darken(BUTTON_ACTIVE_DARKEN, theme.buttonVariants[variant].bgColor)}; */
    outline: none;

    &::before {
      border-color: ${({ theme, variant }) =>
        theme.buttonVariants[variant].bgHover};        
      opacity: 0.5;
    }
  }

   &[disabled] {
    background-color: #999;
    color: #4a4a4a;
    
    &::before {
      border-color: #999;
    }
  }
`;

export const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const Button = ({ children, variant, onClick, ...props }) => (
  <ButtonWithVariants variant={variant} onClick={onClick} {...props}>
    <ButtonText>{children}</ButtonText>
  </ButtonWithVariants>
);
Button.defaultProps = {
  variant: "Primary"
};
