import React from "react";
import { Block, Link, Stack, Grid, Paragraph } from "components";
import { useAnalytics, EventTypes } from "analytics";
import { Content, useContent } from "content";

const year = new Date().getFullYear();

export const Footer = () => {
  const { trackEvent } = useAnalytics();

  const trackNavigationEvent = label =>
    trackEvent(EventTypes.NAVIGATION, "Footer Social", label);

  const { contact } = useContent();
  const { links } = contact;

  return (
    <Block
      bg="surfaceBody"
      py={48}
      borderTop="1px solid"
      borderColor="borderPrimary"
    >
      <Block px={[3, 4, 5]}>
        <Grid gridTemplateColumns={["initial", "2fr 1fr"]}>
          <Stack direction="horizontal" pb={2}>
            {links.map(({ label, url }) => (
              <Link
                key={label}
                href={url}
                target="_blank"
                onClick={() => trackNavigationEvent(label)}
                rel="noreferrer"
                fontFamily="secondary"
                variant="Cta"
              >
                {label}
              </Link>
            ))}
          </Stack>
          <Paragraph
            color="textMuted"
            fontFamily="secondary"
            textAlign={["left", "right"]}
          >
            <Content id="contact.name" />, {year}
          </Paragraph>
        </Grid>
        <Paragraph fontSize={1}>
          All icons created by{" "}
          <Link
            href="https://thenounproject.com/georgiana.ionescu"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackNavigationEvent("Icons")}
            variant="Flat"
          >
            Georgiana Ionescu
          </Link>{" "}
          from the Noun Project.
        </Paragraph>
      </Block>
    </Block>
  );
};
