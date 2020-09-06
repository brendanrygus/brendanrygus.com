import React from "react";
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

const BlockWrapper = styled("div")`
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

export const Block = React.forwardRef((props, ref) => (
  <BlockWrapper {...props} ref={ref} />
));
