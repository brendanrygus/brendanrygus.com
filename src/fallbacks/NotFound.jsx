import React from "react";
import { Block, Page, Paragraph, Link } from "components";
import { Content } from "content";
import { HeaderOffset } from "Header";
import { RouterLink, routes } from "router";

export const NotFound = () => {
  return (
    <Page title="Page not found" description="">
      <HeaderOffset>
        <Block p={5}>
          <Paragraph mb={3}>
            <Content id="errors.pageNotFound" />
          </Paragraph>
          <Link as={RouterLink} variant="Cta" to={routes.home}>
            <Content id="errors.returnToTop" />
          </Link>
        </Block>
      </HeaderOffset>
    </Page>
  );
};
