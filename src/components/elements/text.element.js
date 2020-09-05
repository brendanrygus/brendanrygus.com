import styled from "styled-components";
import { color, space, typography } from "styled-system";

export const Paragraph = styled.p`
  margin: 0;
  ${color};
  ${space};
  ${typography};
`;
Paragraph.defaultProps = {
  fontFamily: "primary",
  fontSize: 3,
  lineHeight: "body"
};

export const Heading = styled.h3`
  ${color};
  ${space};
  ${typography};
`;
Heading.defaultProps = {
  fontFamily: "primary",
  fontWeight: 400,
  lineHeight: "heading"
};
