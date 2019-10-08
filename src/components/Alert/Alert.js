import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledDiv } from "./Alert.styled";
import { alert } from "../../constants/alert";

const Alert = ({ text, type }) => {
  const [showAlert, setShowAlert] = useState(false);
  const msToClose = 3000;

  useEffect(() => {
    if (text.length) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, msToClose);
    }
  }, [text]);

  if (!showAlert) {
    return null;
  }

  return (
    <StyledDiv
      type={type}
      onClick={() => {
        setShowAlert(false);
      }}
    >
      {text}
    </StyledDiv>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

Alert.defaultProps = {
  text: "",
  type: alert.type.success
};

export default Alert;
