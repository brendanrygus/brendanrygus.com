export const ANALYTICS_SCRIPT = "https://www.google-analytics.com/analytics.js";

const ANALYTICS_ID = "UA-16356224-11";
export const ANALYTICS_BODY = `
  window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
  ga('create', '${ANALYTICS_ID}', 'auto');
  ga('send', 'pageview');
`;

export const EVENT_TYPES = {
  ERROR: "Error",
  FEATURE_FLAG: "Feature Flag",
  NAVIGATION: "Navigation",
  INTERACTION: "Engagement"
};
