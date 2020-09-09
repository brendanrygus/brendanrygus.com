import React from "react";
import { lighten } from "polished";
import { useAnalytics, EVENT_TYPES } from "analytics";
import {
  Absolute,
  AbsoluteCentered,
  AspectRatio,
  Block,
  FadeIn,
  Flex,
  Grid,
  HeadingLarge,
  Keyline,
  LinkBlock,
  LoadingIndicator,
  Paragraph,
  SlideIn,
  Stack,
  Tag
} from "components";
import { FeatureFlag } from "feature-flags";
import { Icon } from "icons";
import { useHover } from "usies/use-hover";

import {
  AnimatedBlock,
  createGradient,
  HoverCard,
  ImageOverlay
} from "./ProjectCard.style";
import { ContrastAwareTextBlock } from "./ContrastAwareTextBlock";
import { FillImage } from "./FillImage";

const RATIO = 9 / 16;

export const ProjectBaseballCard = ({
  brandColor,
  cta,
  description,
  icon,
  id,
  imageAlt,
  imageCaption,
  imageSrc,
  logo,
  tags,
  title,
  url,
  variant = "preview"
}) => {
  const [hoverRef, isHovered] = useHover();

  const { trackEvent } = useAnalytics();
  React.useEffect(
    function trackHoverInteraction() {
      if (isHovered) {
        trackEvent(EVENT_TYPES.INTERACTION, "Project Hover", title);
      }
    },
    [isHovered, title, trackEvent]
  );

  const trackNavigationEvent = () =>
    trackEvent(EVENT_TYPES.INTERACTION, "Project Card Link", title);

  const linkProps =
    variant === "full"
      ? {
          as: LinkBlock,
          target: "_blank",
          href: url,
          title: `Launch ${title}`,
          rel: "noreferrer",
          "aria-label": `See the ${title} project. Link will open in a new tab.`
        }
      : {};

  return (
    <AspectRatio ratio={RATIO}>
      <HoverCard
        color={isHovered ? "textOnDark" : "textPrimary"}
        height="100%"
        hoverColor={lighten(0.12, brandColor)}
        onClick={trackNavigationEvent}
        ref={hoverRef}
        {...linkProps}
      >
        <FeatureFlag id="unlocked">
          <Absolute zIndex={0} top={0} left={0} right={0} bottom={0}>
            <AnimatedBlock
              bg={brandColor}
              height="100%"
              opacity={isHovered ? 1 : 0}
              width="100%"
              style={{
                ...createGradient(brandColor)
              }}
            />
          </Absolute>
        </FeatureFlag>

        <ImageOverlay isHovered={isHovered}>
          <FillImage
            alt={imageAlt || title}
            src={imageSrc}
            opacity={variant === "full" ? 1 : 0.5}
            style={{
              filter: "saturate(0)"
            }}
          />
        </ImageOverlay>

        <Grid
          key={`${id}-card-content`}
          height="100%"
          gridTemplateRows="1fr 3fr 1fr"
          position="relative"
          zIndex={1}
        >
          <FadeIn delay={2}>
            <HeadingLarge letterSpacing={1} fontSize={[1, 2, 2]} p={4}>
              {title}
            </HeadingLarge>
          </FadeIn>

          <Flex alignItems="center" justifyContent="center" textAlign="center">
            <FadeIn delay={4}>
              {variant === "preview" ? (
                <Icon
                  size="8rem"
                  name={icon}
                  color={isHovered ? brandColor : "currentColor"}
                />
              ) : (
                <Icon size="10rem" name={logo} />
              )}
            </FadeIn>
          </Flex>
          <SlideIn delay={3}>
            <ProjectDetails
              bg={isHovered ? brandColor : "surfaceBody"}
              description={description}
              tags={tags}
              height="100%"
            />
          </SlideIn>
        </Grid>
      </HoverCard>
    </AspectRatio>
  );
};

const ProjectDetails = ({ bg, description, tags, ...props }) => {
  return (
    <ContrastAwareTextBlock
      bg={bg}
      alignItems="center"
      display="flex"
      {...props}
    >
      <Stack p={4} gap={3}>
        {description && (
          <>
            <Paragraph fontFamily="secondary" lineHeight="body" fontSize={2}>
              {description}
            </Paragraph>
            <Keyline bg="currentColor" opacity={0.2} />
          </>
        )}

        {tags && tags.length && (
          <Stack key="tags-list" gap={2}>
            {tags.map(tag => (
              <Tag key={tag} mr={2} fontSize={0} color="currentColor">
                {tag}
              </Tag>
            ))}
            <Keyline bg="currentColor" opacity={0.2} />
          </Stack>
        )}
      </Stack>
    </ContrastAwareTextBlock>
  );
};

export const SkeletonCard = ({ brandColor }) => (
  <AspectRatio ratio={RATIO}>
    <Block width="100%" height="100%" bg="surfaceBody" color={brandColor}>
      <AbsoluteCentered top="40%">
        <LoadingIndicator />
      </AbsoluteCentered>
    </Block>
  </AspectRatio>
);

export default ProjectBaseballCard;
