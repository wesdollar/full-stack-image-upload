import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledButtonContainer } from "./SearchFiles.styled";
import Button from "../Button/Button";
import { handleFileSearch } from "../../helpers/handleFileSearch";
import Alert from "../Alert/Alert";

// eslint-disable-next-line max-params
const handleKeyPress = (event, value, setFiles, setAlert) => {
  if (event.key === "Enter") {
    handleFileSearch(value, setFiles, setAlert);
  }
};

const SearchFiles = ({ setFiles }) => {
  const [value, setValue] = useState("");

  const [alert, setAlert] = useState({});
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    setAlertText(alert.text);
    setAlertType(alert.type);
  }, [alert]);

  return (
    <React.Fragment>
      <StyledInput
        type={"text"}
        name={"search"}
        placeholder={"Search documents..."}
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={event => handleKeyPress(event, value, setFiles, setAlert)}
      />
      {value.length ? (
        <StyledButtonContainer>
          <Button
            ghost={true}
            flexGrow={2}
            handleOnClick={() => handleFileSearch(value, setFiles, setAlert)}
          >
            Search
          </Button>
        </StyledButtonContainer>
      ) : null}
      <Alert text={alertText} type={alertType} />
    </React.Fragment>
  );
};

SearchFiles.propTypes = {
  setFiles: PropTypes.func.isRequired
};

SearchFiles.defaultProps = {
  setFiles: () => {}
};

export default SearchFiles;
