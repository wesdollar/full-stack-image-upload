/* eslint-disable no-magic-numbers */
import styled from "styled-components";
import { gutters } from "../../constants/gutters";
import { px } from "../../helpers/units";
import { colors } from "../../constants/colors";
import { device } from "../../constants/device";

export const StyledInput = styled.input`
  font-size: 0.9em;
  padding: ${px(gutters.quarterGutter)};
  width: 50%;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 4px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const StyledButtonContainer = styled.div`
  flex-grow: 2;
  padding-left: ${px(gutters.quarterGutter)};

  @media ${device.mobile} {
    order: -1;
    padding-left: 0;
    padding-top: ${px(gutters.quarterGutter)};

    button {
      width: 100%;
      padding-top: ${px(gutters.halfGutter)};
      padding-bottom: ${px(gutters.halfGutter)};
    }
  }
`;
