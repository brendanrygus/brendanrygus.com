import { useFeatureFlags } from "./FeatureFlagProvider";

export const FeatureFlag = ({ children, id }) => {
  const featureFlags = useFeatureFlags();
  if (!featureFlags[id]) {
    return null;
  }
  return children;
};
