import React from "react";
import { VisuallyHidden } from "components/Visibility";

import { SkeletonLoadingBar } from "./skeleton.style";

const SkeletonContext = React.createContext({ isLoading: false });
export const useSkeleton = () => React.useContext(SkeletonContext);
export const SkeletonProvider = ({ children, isLoading }) => (
  <SkeletonContext.Provider value={{ isLoading }}>
    {children}
  </SkeletonContext.Provider>
);

export const Skeleton = ({ children, ...props }) => {
  const { isLoading } = useSkeleton();
  if (!isLoading) {
    return children;
  }

  return React.Children.map(children, child => (
    <SkeletonLoadingBar {...props}>
      <VisuallyHidden>{child}</VisuallyHidden>
    </SkeletonLoadingBar>
  ));
};
