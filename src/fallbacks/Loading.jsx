import React from "react";
import { Block, LoadingIndicator } from "components";
import { HeaderOffset } from "Header";

// Displayed for any uncaught Suspense requests
export const LoadingFallback = () => (
  <HeaderOffset>
    <Block textAlign="center">
      <LoadingIndicator />
    </Block>
  </HeaderOffset>
);
