import styled, { css } from "styled-components";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography
} from "styled-system";
import { themeGet } from "@styled-system/theme-get";

const addVariantTheme = ({ variant }) =>
  variant &&
  css`
    background-color: ${themeGet(`variants.${variant}.bgColor`)};
    color: ${themeGet(`variants.${variant}.color`)};
  `;

export const Block = styled("div")`
  ${addVariantTheme};
  ${background};
  ${border};
  ${color};
  ${flexbox};
  ${layout};
  ${position};
  ${shadow};
  ${space};
  ${typography};
`;
