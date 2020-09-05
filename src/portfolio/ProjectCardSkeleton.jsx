import React from "react";
import {
  AbsoluteCentered,
  AspectRatio,
  Block,
  LoadingIndicator
} from "components";

const RATIO = 9 / 16;

export const SkeletonCard = ({ brandColor }) => (
  <AspectRatio ratio={RATIO}>
    <Block width="100%" height="100%" bg="surfaceBody" color={brandColor}>
      <AbsoluteCentered top="40%">
        <LoadingIndicator />
      </AbsoluteCentered>
    </Block>
  </AspectRatio>
);
