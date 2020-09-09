export const getFlagFromQueryParams = (feature, defaultValue) => {
  const urlParams = new URLSearchParams(window.location.search);
  const featureParam = urlParams.get(feature);
  if (!featureParam) {
    return defaultValue;
  }

  // Convert str 'param=true' | 'param=false' to boolean
  return JSON.parse(featureParam);
};
