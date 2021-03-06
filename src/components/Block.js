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
BlockWrapper.displayName = "BlockWrapper";

export const Block = React.forwardRef((props, ref) => (
  <BlockWrapper {...props} ref={ref} />
));

export const LinkBlock = styled.a`
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
