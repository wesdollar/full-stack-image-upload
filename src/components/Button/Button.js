import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";
import { children } from "../../constants/propTypes";
import { buttonSize } from "../../constants/buttonSize";

const Button = ({ children, ghost, size, handleOnClick, fullWidthMobile }) => (
  <StyledButton
    fullWidthMobile={fullWidthMobile}
    size={size}
    onClick={handleOnClick}
    ghost={ghost}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  size: PropTypes.oneOf([buttonSize.default, buttonSize.large]),
  handleOnClick: PropTypes.func,
  fullWidthMobile: PropTypes.bool,
  ghost: PropTypes.bool,
  children
};

Button.defaultProps = {
  size: buttonSize.default,
  fullWidthMobile: false,
  ghost: false,
  handleOnClick: () => {}
};

export default Button;
