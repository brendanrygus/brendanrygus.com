import React from "react";

import { Block } from "./Block";
import { Absolute, Relative } from "./Position";

export const AspectRatio = ({ children, bg, ratio = 16 / 9, ...props }) => (
  <Relative overflow="hidden">
    <Block width="100%" bg={bg} height={0} pb={`${100 / ratio}%`} />
    <Absolute top={0} right={0} bottom={0} left={0} {...props}>
      {children}
    </Absolute>
  </Relative>
);
