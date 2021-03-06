import React from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  React.useEffect(() => {
    const targetNode = ref.current;
    if (targetNode) {
      targetNode.addEventListener("mouseenter", handleMouseOver);
      targetNode.addEventListener("mouseleave", handleMouseOut);

      return () => {
        targetNode.removeEventListener("mouseenter", handleMouseOver);
        targetNode.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [ref]);
  return [ref, isHovered];
};

export const useFocus = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const ref = React.useRef(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  React.useEffect(() => {
    const targetNode = ref.current;
    if (targetNode) {
      targetNode.addEventListener("focus", handleFocus);
      targetNode.addEventListener("blur", handleBlur);

      return () => {
        targetNode.removeEventListener("focus", handleBlur);
        targetNode.removeEventListener("blur", handleBlur);
      };
    }
  }, [ref]);
  return [ref, isFocused];
};

export const useInteraction = ({ disabled = false }) => {
  const [focusRef, isFocused] = useFocus();
  const [hoverRef, isHovered] = useHover();
  const setRef = React.useCallback(
    ref => {
      focusRef.current = ref;
      hoverRef.current = ref;
    },
    [focusRef, hoverRef]
  );
  return [setRef, disabled ? false : isFocused || isHovered];
};
