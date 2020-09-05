import styled from "styled-components";

export const Button = styled("button")`
  appearance: none;
  background: transparent;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0;
  padding: 0;

  &[disabled] {
    pointer-events: none;
  }

  &:focus:active,
  &:focus:hover {
    outline: 0;
  }
`;
