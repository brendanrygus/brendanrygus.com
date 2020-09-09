import React from "react";
import styled from "styled-components";
import { useAnalytics, EventTypes } from "analytics";
import {
  Block,
  Fixed,
  Flex,
  Link,
  LinkIcon,
  Paragraph,
  Stack
} from "components";
import { Content } from "content";
import { Icon } from "icons";
import { PortfolioScrollRoutes } from "portfolio";
import { routes, RouterLink, useLocation } from "router";
import { Skeleton } from "skeleton";
import { useDarkMode } from "theme";

const BlurredBlock = styled(Block)`
  backdrop-filter: blur(1rem);
`;

const HEADER_HEIGHT_SMALL = "4rem";
const HEADER_HEIGHT_LARGE = "6rem";

const createHashLink = hash => ({
  pathname: routes.home,
  hash: `#${hash}`
});

export const Header = () => {
  const { trackEvent } = useAnalytics();
  const { hash } = useLocation();
  const isHashActive = id => hash === `#${id}`;

  const trackNavigationEvent = label =>
    trackEvent(EventTypes.NAVIGATION, "Navigation Link", label);

  return (
    <Fixed top={0} left={0} right={0} zIndex={3} boxShadow="elevation3">
      <BlurredBlock
        bg="surfaceAlpha2"
        borderBottom="1px solid"
        borderColor="borderPrimary"
        py={[3, 4]}
        px={[3, 4, 5]}
        height={[HEADER_HEIGHT_SMALL, HEADER_HEIGHT_SMALL, HEADER_HEIGHT_LARGE]}
      >
        <Flex height="100%" justifyContent="space-between" alignItems="center">
          <Paragraph
            as={RouterLink}
            to={createHashLink(PortfolioScrollRoutes.About)}
            color="textPrimary"
            fontSize={[3, 4, 5]}
            fontWeight="light"
            letterSpacing={2}
            style={{ textTransform: "uppercase", textDecoration: "none" }}
            onClick={() => trackNavigationEvent("Title")}
          >
            <Skeleton>
              <Content id="contact.name" />
            </Skeleton>
          </Paragraph>

          <Stack direction="horizontal" gap={3} justifyContent="flex-end">
            <Link
              as={RouterLink}
              to={createHashLink(PortfolioScrollRoutes.About)}
              variant={
                isHashActive(PortfolioScrollRoutes.About) ? "Cta" : "Flat"
              }
              fontFamily="secondary"
              onClick={() => trackNavigationEvent("About")}
            >
              <Skeleton>About</Skeleton>
            </Link>
            <Link
              as={RouterLink}
              to={createHashLink(PortfolioScrollRoutes.Work)}
              variant={
                isHashActive(PortfolioScrollRoutes.Work) ? "Cta" : "Flat"
              }
              fontFamily="secondary"
              onClick={() => trackNavigationEvent("Work")}
            >
              <Skeleton>Work</Skeleton>
            </Link>
            <DarkModeToggle />
          </Stack>
        </Flex>
      </BlurredBlock>
    </Fixed>
  );
};

const DarkModeToggle = () => {
  const { trackEvent } = useAnalytics();
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const handleDarkModeToggle = () => {
    trackEvent(EventTypes.INTERACTION, "Toggle Dark Mode", !isDarkMode);
    setIsDarkMode(isDark => !isDark);
  };

  return (
    <LinkIcon
      as="button"
      onClick={handleDarkModeToggle}
      style={{ textDecoration: "none" }}
    >
      <span role="img" aria-label="Toggle dark mode">
        <Icon size={4} color="textPrimary" name={isDarkMode ? "Sun" : "Moon"} />
      </span>
    </LinkIcon>
  );
};

export const HeaderOffset = ({ children, ...props }) => (
  <Block
    pt={[HEADER_HEIGHT_SMALL, HEADER_HEIGHT_SMALL, HEADER_HEIGHT_LARGE]}
    {...props}
  >
    {children}
  </Block>
);
