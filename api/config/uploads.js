const path = require("path");

module.exports = {
  // eslint-disable-next-line no-magic-numbers
  maxFileSize: 10 * 1000000,
  allowedFileTypes: [".jpg", ".png"],
  allowedMimeTypes: ["image/jpeg", "image/png"],
  uploadDirectory: path.join(__dirname, "..", "uploads")
};
