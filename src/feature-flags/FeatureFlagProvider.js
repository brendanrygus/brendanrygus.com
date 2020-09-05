import React from "react";
import { userPrefersDark } from "theme";

const getFlagFromQueryParams = (feature, defaultValue) => {
  const urlParams = new URLSearchParams(window.location.search);
  const featureParam = urlParams.get(feature);
  if (!featureParam) {
    return defaultValue;
  }
  // Convert str 'param=true' | 'param=false' to boolean
  return JSON.parse(featureParam);
};

// Set flags at runtime based on user preferences, or query param overrides
const FEATURE_FLAGS = {
  darkModeDefault: getFlagFromQueryParams("darkMode", userPrefersDark()),
  unlocked: getFlagFromQueryParams("unlocked", false)
};

const FeatureFlagContext = React.createContext({});
export const useFeatureFlags = () => React.useContext(FeatureFlagContext);

export const FeatureFlagProvider = ({ children }) => {
  return (
    <FeatureFlagContext.Provider value={FEATURE_FLAGS}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
