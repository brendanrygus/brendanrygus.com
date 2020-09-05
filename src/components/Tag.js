import React from "react";

import { Block } from "./Block";

export const Tag = props => (
  <Block
    as="span"
    bg="surfaceAlpha"
    border="1px solid"
    borderColor="borderPrimary"
    color="textSecondary"
    display="inline-block"
    fontSize={2}
    borderRadius={1}
    fontFamily="secondary"
    padding="1em"
    {...props}
  />
);
