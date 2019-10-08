const {
  uploadDirectory,
  maxFileSize,
  allowedMimeTypes
} = require("../config/uploads");
const {
  badRequest,
  serverError,
  notAcceptable
} = require("../constants/statusCodes");

module.exports = function upload(req, res) {
  // eslint-disable-next-line no-magic-numbers
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(badRequest).json("No files were uploaded.");
  }

  const uploadedFile = req.files.imageUpload;

  if (
    allowedMimeTypes.includes(uploadedFile.mimetype) &&
    uploadedFile.size < maxFileSize
  ) {
    uploadedFile.mv(`${uploadDirectory}/${uploadedFile.name}`, function(error) {
      if (error) {
        return res.status(serverError).json(error);
      }

      res.json("File uploaded!");
    });
  } else {
    res.status(notAcceptable).json("Unable to save file.");
  }
};
