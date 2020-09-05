import React from "react";
import styled from "styled-components";

import { AspectRatio } from "./AspectRatio";

const FillImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center center;
  width: 100%;
`;

export const AspectRatioImage = ({ children, ratio = 4 / 3, bg, ...props }) => {
  return (
    <AspectRatio bg={bg} ratio={ratio}>
      <FillImage {...props} />
    </AspectRatio>
  );
};
