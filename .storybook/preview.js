import React from "react";

import { ThemeProvider  } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

import { ContentProvider } from "content";
import { themes } from "theme";
import { Block } from "components/Block";
import { Page } from "components/Page";

import "../src/App.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const WithThemeProvider = (Story) => {
  return (
  <ThemeProvider theme={themes.dark}>
    <Story />
  </ThemeProvider>
)
  }
const WithContent = (Story) => (
  <ContentProvider>
    <Story />
  </ContentProvider>
)
const WithPage = (Story) => (
  <HelmetProvider>
    <Page bg="surfaceBase" color="textPrimary">
      <Story />
    </Page>
  </HelmetProvider>
)

export const decorators = [WithPage, WithContent, WithThemeProvider]