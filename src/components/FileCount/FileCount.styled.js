/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { device } from "../../constants/device";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";

export const StyledH2 = styled.h2`
  margin: 0;

  @media ${device.mobile} {
    width: 100%;
    margin-bottom: ${px(gutters.quarterGutter)};
  }
`;
