import styled from "styled-components";
import { MicroInteractionStyles } from "styles";

import { Heading } from "../elements";

export const HeadingLarge = styled(Heading)`
  text-transform: uppercase;
  ${MicroInteractionStyles};
`;
HeadingLarge.defaultProps = {
  fontSize: 7,
  fontWeight: 500,
  lineHeight: "heading"
};
HeadingLarge.displayName = "HeadingLarge";
