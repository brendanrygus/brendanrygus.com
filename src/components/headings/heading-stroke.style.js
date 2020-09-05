import styled from "styled-components";

import { Heading } from "../elements";

const STROKE_WIDTH = "1px";

export const HeadingStroke = styled(Heading)`
  -moz-text-fill-color: transparent;
  -moz-text-stroke-color: currentColor;
  -moz-text-stroke-width: ${STROKE_WIDTH};

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: currentColor;
  -webkit-text-stroke-width: ${STROKE_WIDTH};
  paint-order: stroke fill;
  text-transform: uppercase;
`;
HeadingStroke.defaultProps = {
  fontSize: ["4rem", "6rem", "7.5rem"],
  fontWeight: 700,
  lineHeight: "base"
};
HeadingStroke.displayName = "HeadingStroke";
