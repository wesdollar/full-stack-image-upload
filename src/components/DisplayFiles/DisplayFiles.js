import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { flexWrap } from "../../constants/flexBox/flexWrap";
import { justifyContent } from "../../constants/flexBox/justifyContent";
import { alignItems } from "../../constants/flexBox/alignItems";
import { StyledFileInfoBox } from "./DisplayFiles.styled";
import FlexContainer from "../FlexContainer/FlexContainer";
import Button from "../Button/Button";
import DisplayFileSize from "../DisplayFileSize/DisplayFileSize";
import { deleteFile } from "../../helpers/deleteFile";
import Alert from "../Alert/Alert";

const DisplayFiles = ({ files, setFiles }) => {
  const [alert, setAlert] = useState({});
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    setAlertText(alert.text);
    setAlertType(alert.type);
  }, [alert]);

  if (!files.length) {
    return <h1>No Files Found</h1>;
  }

  return (
    <React.Fragment>
      <FlexContainer hasColumns={true} flexWrap={flexWrap.wrap}>
        {files.map((file, index) => (
          <StyledFileInfoBox key={`files-${index}`}>
            <h3>{file.filename}</h3>
            <FlexContainer
              justifyContent={justifyContent.spaceBetween}
              alignItems={alignItems.flexEnd}
              gutterBottom={0}
            >
              <DisplayFileSize fileSize={file.size} />
              <Button
                handleOnClick={() =>
                  deleteFile(file.filename, files, setFiles, setAlert)
                }
              >
                Delete
              </Button>
            </FlexContainer>
          </StyledFileInfoBox>
        ))}
      </FlexContainer>
      <Alert text={alertText} type={alertType} />
    </React.Fragment>
  );
};

DisplayFiles.propTypes = {
  files: PropTypes.array.isRequired,
  setFiles: PropTypes.func.isRequired
};

DisplayFiles.defaultProps = {
  files: [],
  setFiles: () => {}
};

export default DisplayFiles;
