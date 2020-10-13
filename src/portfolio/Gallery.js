import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { useAnalytics, EventTypes } from "analytics";
import { Block, Grid, HeadingMedium, Stack } from "components";
import { Content } from "content";
import { useFeatureFlags } from "feature-flags";
import { Skeleton } from "skeleton";

import { SkeletonCard } from "./ProjectCardSkeleton";

const ProjectCard = React.lazy(() => import("./ProjectCard"));

const LazyGrid = ({ children }) => {
  const { trackEvent } = useAnalytics();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      trackEvent(EventTypes.INTERACTION, "Scrolled to Gallery");
    }
  }, [inView, trackEvent]);

  return (
    <Grid
      ref={ref}
      alignItems="center"
      gridTemplateColumns={[
        "1fr",
        "1fr 1fr",
        "1fr 1fr",
        "1fr 1fr",
        "1fr 1fr 1fr 1fr"
      ]}
      gridColumnGap={[3, 4, 5]}
      gridRowGap={4}
      minHeight="56.25vh"
      width="100%"
    >
      {inView && children}
    </Grid>
  );
};

export const Gallery = ({ projects }) => {
  const { unlocked } = useFeatureFlags();
  const { trackMeta } = useAnalytics();
  React.useEffect(() => {
    trackMeta(
      EventTypes.FEATURE_FLAG,
      "Portfolio Unlocked",
      unlocked.toString()
    );
  }, [trackMeta, unlocked]);

  return (
    <Block as="section" textAlign="left" pb={5} px={[3, 4, 5]}>
      <Stack mb={5} gap={3}>
        {/* <HeadingMedium
          color="textSecondary"
          fontSize={3}
          fontFamily="secondary"
        >
          <Skeleton width="12ch">
            <Content id="portfolio.subtitle" />
          </Skeleton>
        </HeadingMedium> */}
        <HeadingMedium>
          <Skeleton width="12ch">
            <Content id="portfolio.title" />
          </Skeleton>
        </HeadingMedium>
      </Stack>

      <LazyGrid>
        <Suspense
          fallback={projects.map(project => (
            <SkeletonCard key={project.title} {...project} />
          ))}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              {...project}
              title={unlocked ? project.brand : project.title}
              variant={unlocked ? "full" : "preview"}
            />
          ))}
        </Suspense>
      </LazyGrid>
    </Block>
  );
};
