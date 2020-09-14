import React from "react";
import { Helmet } from "react-helmet-async";

import { ANALYTICS_BODY, ANALYTICS_SCRIPT } from "./analytics.config";

const AnalyticsContext = React.createContext({
  trackEvent: () => {},
  trackMeta: () => {}
});

const addToGoogleAnalyticsQueue = function() {
  return {
    q: [].push(arguments)
  };
};
const getGoogleAnalytics = () => window.ga || addToGoogleAnalyticsQueue;

const sendGoogleAnalytics = (...args) => {
  const ga = getGoogleAnalytics();
  ga("send", ...args);
};

const prefix = "📊Analytics";
const logger = (...args) =>
  process.env.NODE_ENV === "development" && console.log(`[${prefix}]`, ...args);

const sendGoogleAnalyticsEvent = ({
  category,
  action,
  label,
  interactive = true
}) => {
  logger("Event", {
    category,
    action,
    label,
    interactive
  });

  const metadata = !interactive
    ? {
        nonInteraction: true
      }
    : {};

  sendGoogleAnalytics("event", category, action, label, metadata);
};

const sendGoogleAnalyticsPageview = ({ location, path, title }) => {
  logger("Pageview", {
    location,
    path,
    title
  });

  sendGoogleAnalytics("pageview", path);
};

export const AnalyticsProvider = ({ children }) => {
  const trackEvent = (category, action, label) => {
    const payload = {
      category,
      action,
      label,
      interactive: true
    };
    sendGoogleAnalyticsEvent(payload);
  };

  const trackMeta = (category, action, label) => {
    const payload = {
      category,
      action,
      label,
      interactive: false
    };
    sendGoogleAnalyticsEvent(payload);
  };

  const trackPageview = (title, location, path) => {
    const payload = {
      location,
      path,
      title
    };
    sendGoogleAnalyticsPageview(payload);
  };

  return (
    <>
      <Helmet>
        <script>{ANALYTICS_BODY}</script>
        <script async src={ANALYTICS_SCRIPT}></script>
      </Helmet>
      <AnalyticsContext.Provider
        value={{ trackEvent, trackMeta, trackPageview }}
      >
        {children}
      </AnalyticsContext.Provider>
    </>
  );
};

export const useAnalytics = () => React.useContext(AnalyticsContext);
