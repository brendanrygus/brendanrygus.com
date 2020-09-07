import styled from "styled-components";
import { layout, position, shadow } from "styled-system";

export const Relative = styled.div`
  ${layout};
  ${position};
  ${shadow};
  position: relative;
`;

export const Absolute = styled.div`
  ${position};
  ${shadow};
  position: absolute;
`;

export const AbsoluteCentered = { ...Absolute };
AbsoluteCentered.defaultProps = {
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)"
};

export const Fixed = styled.div`
  ${position};
  ${shadow};
  position: fixed;
`;

export const Sticky = styled.div`
  ${position};
  ${shadow};
  position: sticky;
`;
