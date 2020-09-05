import styled from "styled-components";
import { typography } from "styled-system";
import { MicroInteractionStyles } from "styles";

export const Link = styled.a`
  color: ${({ theme, variant }) => theme.buttonVariants[variant].linkColor};
  // font-family: ${({ theme }) => theme.fonts.primary};
  // font-size: ${({ theme }) => theme.fontSizes[3]};
  ${typography};
  text-decoration: underline;
  ${MicroInteractionStyles};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme, variant }) => theme.buttonVariants[variant].linkHover};
  }
`;
Link.defaultProps = {
  color: "textAction",
  fontWeight: 500,
  variant: "Primary"
};

export const LinkIcon = styled.a`
  ${MicroInteractionStyles};
  position: relative;
  transform: scale(1);
  transform-origin: center center;

  &::before {
    ${MicroInteractionStyles};
    content: "";
    border-radius: 0.25rem;
    border: 2px solid transparent;
    box-sizing: content-box;
    height: 100%;
    left: -8px;
    opacity: 0;
    padding: 6px;
    position: absolute;
    top: -8px;
    transition-property: border, opacity;
    width: 100%;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;

    &::before {
      border-color: ${({ theme }) => theme.colors.textCallout};
      opacity: 0.5;
    }
  }
`;
