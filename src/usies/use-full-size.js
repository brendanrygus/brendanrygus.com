import { useState, useEffect } from "react";

const getInitialSize = () => {
  if (!!window) {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }
  return {
    height: null,
    width: null
  };
};

export const useFullSize = () => {
  const initialDimensions = getInitialSize();
  const [dimensions, setDimensions] = useState(initialDimensions);
  useEffect(() => {
    const handleResize = ({ target }) => {
      const height = target.innerHeight;
      const width = target.innerWidth;
      setDimensions({
        height,
        width
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return dimensions;
};
