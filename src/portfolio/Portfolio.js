import React from "react";
import { Page } from "components";
import { useContent } from "content";
import { HeaderOffset } from "Header";
import { HashScrollRoute } from "router";

import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { PortfolioScrollRoutes } from "./portfolio.routes";

export const PortfolioPage = () => {
  const { meta, projects } = useContent();
  return (
    <Page title={meta.title}>
      <HashScrollRoute id={PortfolioScrollRoutes.About} threshold={0.75}>
        <Hero />
      </HashScrollRoute>

      <HashScrollRoute id={PortfolioScrollRoutes.Work} threshold={0.25}>
        <HeaderOffset>
          <Gallery projects={projects} />
        </HeaderOffset>
      </HashScrollRoute>
    </Page>
  );
};
