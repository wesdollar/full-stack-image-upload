import React from "react";
import PropTypes from "prop-types";
import { fileSize } from "../../constants/fileSize";

const AllFilesTotalSize = ({ files }) => {
  if (!files.length) {
    return null;
  }

  // eslint-disable-next-line no-magic-numbers
  let totalFileSize = 0;

  files.map(file => (totalFileSize += file.size));

  const totalSizeMB = (totalFileSize / fileSize.bytesToMB).toFixed(
    fileSize.decimalPlaces
  );

  return <span>Total Size: {totalSizeMB}MB</span>;
};

AllFilesTotalSize.propTypes = {
  files: PropTypes.array.isRequired
};

AllFilesTotalSize.defaultProps = {
  files: []
};

export default AllFilesTotalSize;
