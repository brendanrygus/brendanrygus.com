import React from "react";
import { FadeIn } from "components/Motion";

import { AnimatedBlock } from "./ProjectCard.style";
import { useSuspenseImage } from "./use-suspense";

export const FillImage = ({ alt, src, ...props }) => {
  const imageSrc = useSuspenseImage(src);
  return (
    <FadeIn height="100%" width="100%">
      <AnimatedBlock
        backgroundImage={`url(${imageSrc})`}
        backgroundPosition="center center"
        backgroundSize="cover"
        height="100%"
        width="100%"
        {...props}
      />
    </FadeIn>
  );
};
