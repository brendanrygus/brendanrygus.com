import React from "react";

import Icons from "./components";

export const Icon = ({ color, name, size, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    console.error("Icon", name, "not found!");
    return null;
  }
  return <IconComponent color={color} fontSize={size} {...props} />;
};
