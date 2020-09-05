import React from "react";
import { ThemeProvider as RootThemeProvider } from "styled-components";
import { themes } from "theme";
import { useFeatureFlags } from "feature-flags";

const DarkModeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const { darkModeDefault } = useFeatureFlags();
  const [isDarkMode, setIsDarkMode] = React.useState(darkModeDefault);

  return (
    <DarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <RootThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
        {children}
      </RootThemeProvider>
    </DarkModeContext.Provider>
  );
};
ThemeProvider.displayName = "ThemeProviderWithDarkMode";

export const useDarkMode = () => React.useContext(DarkModeContext);
