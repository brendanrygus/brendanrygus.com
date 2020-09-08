import React from "react";

import { AspectRatio } from "./AspectRatio";

export default {
  title: "AspectRatio",
  component: AspectRatio
};

export const Square = () => (
  <div style={{ width: "50%" }}>
    <AspectRatio bg="surfaceCallout" ratio={1} />
  </div>
);
export const FourThirds = () => (
  <div style={{ width: "50%" }}>
    <AspectRatio bg="surfaceCallout" ratio={4 / 3} />
  </div>
);
export const Widescreen = () => (
  <div style={{ width: "50%" }}>
    <AspectRatio bg="surfaceCallout" ratio={16 / 9} />
  </div>
);
