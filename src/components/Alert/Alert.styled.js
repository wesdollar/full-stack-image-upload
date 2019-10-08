/* eslint-disable no-magic-numbers */
import styled, { css } from "styled-components";
import { px } from "../../helpers/units";
import { gutters } from "../../constants/gutters";
import { colors } from "../../constants/colors";

export const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${px(gutters.gutter)} 0;
  text-align: center;
  z-index: 3;
  background: ${colors.alert.success};
  color: ${colors.text.success};

  &:hover {
    cursor: pointer;
  }

  ${({ type }) =>
    type &&
    css`
      background: ${colors.alert[type]};
      color: ${colors.text[type]};
    `}
`;
