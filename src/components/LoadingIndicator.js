import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingRing = styled.div`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  &::after {
    content: " ";
    display: block;
    width: calc(${({ size }) => size} * 0.8);
    height: calc(${({ size }) => size} * 0.8);
    margin: calc(${({ size }) => size} * 0.1);
    border-radius: 50%;
    border: calc(${({ size }) => size} * 0.1) solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: ${Spinner} 1.2s linear infinite;
  }
`;

export const LoadingIndicator = ({ size = "2rem" }) => (
  <LoadingRing size={size} />
);
