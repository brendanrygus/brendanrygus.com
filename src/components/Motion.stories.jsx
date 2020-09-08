import React from "react";

import {
  FadeIn as FadeInComponent,
  SlideIn as SlideInComponent
} from "./Motion";

export default {
  title: "Motion"
};

export const FadeIn = args => (
  <FadeInComponent {...args}>
    <p>Example content</p>
  </FadeInComponent>
);
FadeIn.args = {
  delay: "0ms",
  duration: 2
};

export const SlideIn = args => (
  <SlideInComponent {...args}>
    <p>Example content</p>
  </SlideInComponent>
);
SlideIn.args = {
  delay: "0ms",
  duration: 2
};
