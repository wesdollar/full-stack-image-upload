const {
  allowedFileTypes,
  maxFileSize,
  uploadDirectory
} = require("../config/uploads");

module.exports = function getFilesFromUploads() {
  const path = require("path");
  const fs = require("fs");
  const directoryPath = uploadDirectory;

  const fileCollection = [];
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    const filePath = `${directoryPath}/${file}`;
    const fileStat = fs.statSync(filePath);
    const fileExtension = path.extname(filePath);

    if (
      allowedFileTypes.includes(fileExtension) &&
      fileStat.size < maxFileSize
    ) {
      fileCollection.push({
        filename: file,
        size: fileStat.size
      });
    }
  });

  return fileCollection;
};
