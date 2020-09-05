import React from "react";

import { Block } from "./Block";

export const Keyline = props => (
  <Block as="hr" height="1px" border="none" bg="uiDivider" {...props} />
);
