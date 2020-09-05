import React from "react";

import { Paragraph } from "./elements";

export const ErrorMessage = ({ children, ...props }) => (
  <Paragraph color="textError" {...props}>
    {children}
  </Paragraph>
);
