import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { AnalyticsProvider } from "analytics";
import { Page } from "components";
import { ContentProvider } from "content";
import { FeatureFlagProvider } from "feature-flags";
import { PortfolioPage } from "portfolio";
import { routes, HashScrollManager } from "router";
import { ThemeProvider } from "theme";

import { ErrorFallback, LoadingFallback, NotFound } from "./fallbacks";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./App.css";

// Wrap all routes with fixed header, footer, and error handling
// Must be rendered inside `Router` to support navigation links
const AppShell = ({ children }) => (
  <Page bg="surfaceBase" color="textPrimary">
    <Header />
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </ErrorBoundary>
    </main>
    <Footer />
  </Page>
);

const Routes = () => (
  <Router>
    <AppShell>
      <HashScrollManager>
        <Switch>
          <Route exact path={routes.home}>
            <PortfolioPage />
          </Route>
          <Route path={routes.fallback}>
            <NotFound />
          </Route>
        </Switch>
      </HashScrollManager>
    </AppShell>
  </Router>
);

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <FeatureFlagProvider>
        <ThemeProvider>
          <AnalyticsProvider>
            <ContentProvider>
              <Routes />
            </ContentProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </FeatureFlagProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;
