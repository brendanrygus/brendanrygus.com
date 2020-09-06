import styled from "styled-components";
import { MicroInteractionStyles } from "styles";

import { Heading } from "../elements";

export const HeadingMedium = styled(Heading)`
  ${MicroInteractionStyles};
`;
HeadingMedium.defaultProps = {
  fontSize: 6,
  lineHeight: "heading"
};
HeadingMedium.displayName = "HeadingMedium";
