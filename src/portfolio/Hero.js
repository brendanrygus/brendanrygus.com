import React from "react";
import {
  darken,
  lighten,
  meetsContrastGuidelines,
  radialGradient,
  linearGradient
} from "polished";
import styled, { useTheme } from "styled-components";
import {
  AspectRatio,
  AspectRatioImage,
  Block,
  Button,
  Grid,
  HeadingStroke,
  HeadingLarge,
  HeadingMedium,
  Link,
  Page,
  Stack,
  Tag,
  Flex,
  Keyline,
  Paragraph
} from "components";
import { Content } from "content";
import { HeaderOffset } from "Header";
import { RouterLink } from "router";

import { PortfolioScrollRoutes } from "./portfolio.routes";
import { FillImage } from "./FillImage";
import BgImage from "./bg.jpg";

export const Hero = () => {
  return (
    <Grid as="section" gridTemplateColumns={["initial", "initial", "6fr 4fr"]}>
      <Block key="left" bg="surfaceBody" display={["none", "none", "block"]}>
        <React.Suspense fallback={null}>
          <Block
            width="100%"
            height="100%"
            style={{ mixBlendMode: "soft-light" }}
          >
            <FillImage src="https://images.unsplash.com/photo-1563639326633-3d331a93af06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          </Block>
        </React.Suspense>

        <HeaderOffset></HeaderOffset>
      </Block>

      <Block key="right" textAlign="left" variant="Callout">
        <Grid gridTemplateRows="1fr auto" minHeight="600px">
          <HeaderOffset>
            <Block py={5} px={[4, 5]}>
              <Stack gap={4}>
                <HeadingStroke fontSize={[9, 8, 9, 11]}>
                  <Content id="portfolio.heroTitle" />
                </HeadingStroke>
                {/* <Keyline /> */}

                <Stack gap={2}>
                  <Paragraph fontSize={3} fontFamily="secondary">
                    <Content id="portfolio.heroSubtitle" />
                  </Paragraph>
                  <Paragraph fontFamily="secondary" fontSize={3}>
                    Currently building next-generation web apps at{" "}
                    <Link
                      href="http://rangle.io"
                      target="_blank"
                      rel="noreferrer"
                      variant="Flat"
                    >
                      Rangle.io
                    </Link>
                    .
                  </Paragraph>
                </Stack>
              </Stack>
            </Block>
          </HeaderOffset>
          <Block>
            <Grid gridTemplateColumns={["none", "1fr 1fr"]} overflow="hidden">
              <Button
                as={RouterLink}
                to={{ hash: PortfolioScrollRoutes.Work }}
                variant="Cta"
                style={{ borderRadius: 0 }}
              >
                See Work
              </Button>
              <Button
                as="a"
                href="mailto:brendan.rygus@gmail.com"
                variant="Primary"
                style={{ borderRadius: 0 }}
              >
                Get in touch
              </Button>
            </Grid>
          </Block>
        </Grid>
      </Block>
    </Grid>
  );
};
