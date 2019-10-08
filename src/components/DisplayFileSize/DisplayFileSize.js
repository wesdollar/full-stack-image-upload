import React from "react";
import PropTypes from "prop-types";
import { fileSize as fileSizeConfig } from "../../constants/fileSize";

const DisplayFileSize = ({ fileSize }) => {
  // eslint-disable-next-line no-magic-numbers
  if (fileSize === 0) {
    return null;
  }

  const oneMB = 1000000;
  const bytesToKB = 1000;

  if (fileSize < oneMB) {
    return (
      <span>
        {(fileSize / bytesToKB).toFixed(fileSizeConfig.decimalPlaces)}KB
      </span>
    );
  }

  return (
    <span>{(fileSize / oneMB).toFixed(fileSizeConfig.decimalPlaces)}MB</span>
  );
};

DisplayFileSize.propTypes = {
  fileSize: PropTypes.number.isRequired
};

DisplayFileSize.defaultProps = {
  fileSize: 0
};

export default DisplayFileSize;
