/* eslint-disable no-magic-numbers */
import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { buttonSize } from "../../constants/buttonSize";
import { lighten } from "polished";
import { device } from "../../constants/device";

export const StyledButton = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 50px;
  padding: ${px(gutters.quarterGutter)} ${px(gutters.halfGutter)};
  font-size: 0.6em;
  text-transform: uppercase;

  ${({ size }) =>
    size === buttonSize.large &&
    css`
      padding: ${px(gutters.halfGutter)} ${px(gutters.gutter)};
      font-size: 1em;
    `}

  &:hover {
    cursor: pointer;
    background: ${lighten(0.075, colors.primary)};
  }

  ${({ ghost }) =>
    ghost &&
    css`
      background: none;
      color: ${colors.primary};

      &:hover {
        background: none;
        border-color: ${colors.primary};
      }
    `}

  ${({ fullWidthMobile }) =>
    fullWidthMobile &&
    css`
      @media ${device.mobile} {
        width: 100%;
        margin-bottom: ${px(gutters.halfGutter)};
      }
    `}
`;
