import React from "react";
import PropTypes from "prop-types";
import { StyledH2 } from "./FileCount.styled";

const FileCount = ({ fileCount }) => {
  if (!fileCount) {
    return null;
  }

  let countLabel = "Documents";

  // eslint-disable-next-line no-magic-numbers
  if (fileCount === 1) {
    countLabel = "Document";
  }

  return (
    <StyledH2>
      {fileCount} {countLabel}
    </StyledH2>
  );
};

FileCount.propTypes = {
  fileCount: PropTypes.number.isRequired
};

FileCount.defaultProps = {
  fileCount: 0
};

export default FileCount;
