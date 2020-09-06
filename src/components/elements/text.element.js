import React from "react";
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

const HeadingElement = styled.h3`
  ${color};
  ${space};
  ${typography};
`;
HeadingElement.defaultProps = {
  fontFamily: "primary",
  fontWeight: 400,
  lineHeight: "heading"
};
export const Heading = props => <HeadingElement {...props} />;
