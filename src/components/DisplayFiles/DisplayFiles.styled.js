/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";
import { device } from "../../constants/device";

export const StyledFileInfoBox = styled.div`
  width: calc(33% - ${px(gutters.gutter * 2)});
  padding: ${px(gutters.halfGutter)};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  margin: 0 ${px(gutters.halfGutter)} ${px(gutters.gutter)};

  h3 {
    white-space: nowrap;
    overflow-x: scroll;
    margin-top: 0;
    margin-bottom: ${px(gutters.quarterGutter)};
  }

  @media ${device.mobile} {
    width: calc(100%);
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;
