import React from "react";
import { useAnalytics, EVENT_TYPES } from "analytics";
import { Block, Page, Paragraph, Link } from "components";
import { useContent, Content } from "content";
import { HeaderOffset } from "Header";
import { routes } from "router";

export const ErrorFallback = ({
  error,
  componentStack,
  resetErrorBoundary
}) => {
  const { trackMeta } = useAnalytics();

  React.useEffect(() => {
    trackMeta(EVENT_TYPES.ERROR, error.message, componentStack.toString());
  }, [componentStack, error, trackMeta]);

  const { errors } = useContent();

  return (
    <Page title="Error" description={errors.errorFallback}>
      <HeaderOffset>
        <Block p={5}>
          <Paragraph mb={3}>
            <Content id="errors.errorFallback" />
          </Paragraph>
          <Link as="a" variant="Cta" href={routes.home}>
            <Content id="errors.returnToTop" />
          </Link>
        </Block>
      </HeaderOffset>
    </Page>
  );
};
