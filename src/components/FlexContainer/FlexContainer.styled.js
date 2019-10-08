import styled, { css } from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { device } from "../../constants/device";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  margin-bottom: ${({ gutterBottom }) => px(gutterBottom)};

  ${({ hasColumns }) =>
    hasColumns &&
    css`
      margin-left: ${`-${gutters.halfGutter}px`};
      margin-right: ${`-${gutters.halfGutter}px`};
    `}
  
  @media ${device.mobile} {
    flex-wrap: ${({ mobileFlexWrap }) => mobileFlexWrap};
  }
`;
