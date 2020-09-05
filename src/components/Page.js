import React from "react";
import { createGlobalStyle } from "styled-components";

import { Meta } from "./Meta";

const PageBg = createGlobalStyle`
  html {
    background: ${({ bg, theme }) => theme.colors[bg] || bg};
    color: ${({ color, theme }) => theme.colors[color] || color};    
  }
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    min-height: 100vh;
  }
`;
PageBg.defaultProps = {
  bg: "surfaceBase",
  color: "textPrimary"
};

export const Page = ({ bg, color, children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      {(bg || color) && <PageBg bg={bg} color={color} />}
      {children}
    </>
  );
};
