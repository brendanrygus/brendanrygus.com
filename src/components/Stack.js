import React from "react";
import styled, { css } from "styled-components";
import { Block } from "components";

const VerticalStackStyles = css`
  > * {
    margin-bottom: ${({ gap, theme }) => theme.spacing[gap] || gap};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HorizontalStackStyles = css`
  display: flex;

  > * {
    margin-left: calc(${({ gap, theme }) => theme.spacing[gap] || gap} / 2);
    margin-right: calc(${({ gap, theme }) => theme.spacing[gap] || gap} / 2);

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StackWrapper = styled(Block)`
  ${({ direction }) => direction === "horizontal" && HorizontalStackStyles};
  ${({ direction }) => direction === "vertical" && VerticalStackStyles};
`;

export const Stack = ({
  children,
  direction = "vertical",
  gap = 3,
  ...props
}) => {
  return (
    <StackWrapper gap={gap} direction={direction} {...props}>
      {children}
    </StackWrapper>
  );
};

export const Inline = props => <Stack {...props} direction="horizontal" />;
