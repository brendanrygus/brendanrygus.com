import styled from "styled-components";
import { layout, position, shadow } from "styled-system";

export const Relative = styled.div`
  ${layout};
  ${position};
  ${shadow};
  position: relative;
`;
Relative.displayName = "Relative";

export const Absolute = styled.div`
  ${position};
  ${shadow};
  position: absolute;
`;
Absolute.displayName = "Absolute";

export const AbsoluteCentered = { ...Absolute };
AbsoluteCentered.defaultProps = {
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)"
};
AbsoluteCentered.displayName = "AbsoluteCentered";

export const Fixed = styled.div`
  ${position};
  ${shadow};
  position: fixed;
`;
Fixed.displayName = "Fixed";

export const Sticky = styled.div`
  ${position};
  ${shadow};
  position: sticky;
`;
Sticky.displayName = "Sticky";
