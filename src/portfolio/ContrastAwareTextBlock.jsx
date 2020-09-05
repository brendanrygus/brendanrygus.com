import React from "react";
import { sort, pipe, prop } from "ramda";
import { meetsContrastGuidelines } from "polished";
import styled, { useTheme } from "styled-components";
import { Block } from "components";
import { MicroInteractionStyles } from "styles";

const AnimatedBlock = styled(Block)`
  ${MicroInteractionStyles}
  will-change: background, color;
`;

const sortByContrast = bgColor => (a, b) => {
  if (a.AAA !== b.AAA) {
    return a.AAA ? -1 : 1;
  }
  if (a.AA !== b.AA) {
    return a.AA ? -1 : 1;
  }
  console.warn("Warning: failing contrast ratio for bg color", bgColor);
  return 0;
};

const getHighestContrastTextColor = (bgColor, textColor1, textColor2) => {
  const primaryContrast = {
    key: "textPrimary",
    ...meetsContrastGuidelines(bgColor, textColor1)
  };
  const reverseContrast = {
    key: "textReverse",
    ...meetsContrastGuidelines(bgColor, textColor2)
  };

  return pipe(
    sort(sortByContrast(bgColor)),
    prop("0"),
    prop("key")
  )([primaryContrast, reverseContrast]);
};

export const ContrastAwareTextBlock = ({ bg, ...props }) => {
  const theme = useTheme();
  const { textPrimary, textReverse } = theme.colors;
  const bgColor = theme.colors[bg] || bg;

  return (
    <AnimatedBlock
      bg={bg}
      color={getHighestContrastTextColor(bgColor, textPrimary, textReverse)}
      {...props}
    />
  );
};
