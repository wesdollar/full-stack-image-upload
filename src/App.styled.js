/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { gutters } from "./constants/gutters";
import { px } from "./helpers/units";
import { device } from "./constants/device";

export const StyledContainer = styled.div`
  max-width: 960px;
  margin: ${px(gutters.gutter)} auto;

  @media ${device.mobile} {
    width: calc(100% - 40px);
    margin: 20px auto;
  }
`;
