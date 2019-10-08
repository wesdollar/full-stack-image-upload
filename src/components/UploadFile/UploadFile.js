import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledHiddenDiv } from "./UploadFile.styled";
import { handleFileUpload } from "../../helpers/handleFileUpload";
import Alert from "../Alert/Alert";

const UploadFile = ({ files, setFiles }) => {
  const [alert, setAlert] = useState({});
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    setAlertText(alert.text);
    setAlertType(alert.type);
  }, [alert]);

  return (
    <React.Fragment>
      <StyledHiddenDiv>
        <input
          type="file"
          name="imageUpload"
          id="uploadFile"
          onChange={event => handleFileUpload(event, files, setFiles, setAlert)}
        />
      </StyledHiddenDiv>
      <Alert text={alertText} type={alertType} />
    </React.Fragment>
  );
};

UploadFile.propTypes = {
  files: PropTypes.array.isRequired,
  setFiles: PropTypes.func.isRequired
};

UploadFile.defaultProps = {
  files: [],
  setFiles: () => {}
};

export default UploadFile;
