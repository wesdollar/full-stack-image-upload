import React from "react";
import PropTypes from "prop-types";
import { justifyContent } from "../../constants/flexBox/justifyContent";
import { alignItems } from "../../constants/flexBox/alignItems";
import { gutters } from "../../constants/gutters";
import { flexWrap } from "../../constants/flexBox/flexWrap";
import { StyledDiv } from "./FlexContainer.styled";
import { children } from "../../constants/propTypes";

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  flexWrap,
  gutterBottom,
  hasColumns,
  mobileFlexWrap
}) => (
  <StyledDiv
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexWrap={flexWrap}
    gutterBottom={gutterBottom}
    hasColumns={hasColumns}
    mobileFlexWrap={mobileFlexWrap}
  >
    {children}
  </StyledDiv>
);

FlexContainer.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  gutterBottom: PropTypes.number,
  hasColumns: PropTypes.bool,
  mobileFlexWrap: PropTypes.string,
  children
};

FlexContainer.defaultProps = {
  justifyContent: justifyContent.default,
  alignItems: alignItems.default,
  flexWrap: flexWrap.default,
  gutterBottom: gutters.gutter,
  mobileFlexWrap: flexWrap.wrap,
  hasColumns: false
};

export default FlexContainer;
