import React from "react";

import { Paragraph } from "./elements/text.element";
import { Stack } from "./Stack";
import { Block } from "./Block";
import { HeadingMedium } from "./headings";
import { AspectRatioImage } from "./AspectRatioImage";

export const Card = ({ altDescription, description, image, title }) => (
  <Block
    bg="surfaceBody"
    color="textPrimary"
    borderColor="borderSecondary"
    borderRadius="4px"
  >
    <AspectRatioImage src={image} alt={altDescription} ratio={2.35 / 1} />
    <Block p={4}>
      <Stack gap={3}>
        {title && (
          <HeadingMedium fontSize={5} fontWeight={600} as="h2">
            {title}
          </HeadingMedium>
        )}
        {description && <Paragraph>{description}</Paragraph>}
      </Stack>
    </Block>
  </Block>
);
