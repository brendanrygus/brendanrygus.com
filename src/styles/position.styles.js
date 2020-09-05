import { css } from "styled-components";

// Use Styles suffix to mark CSS partials
// For clearer imports

/* Composable styles used for positioning elements */

export const FillParentStyles = css`
  position: relative;
`;

export const FillStyles = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const VerticalCenterStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
