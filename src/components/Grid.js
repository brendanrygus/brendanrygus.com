import styled from "styled-components";
import { grid } from "styled-system";
import { Block } from "components";

export const Grid = styled(Block)`
  ${grid};
  display: grid;
`;
Grid.displayName = "Grid";
