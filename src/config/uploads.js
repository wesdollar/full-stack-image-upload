import { fileSize } from "../constants/fileSize";

const maxFileSizeInMB = 10;

export const uploads = {
  humanMaxFileSize: `${maxFileSizeInMB}MB`,
  maxFileSize: maxFileSizeInMB * fileSize.bytesToMB,
  allowedFileTypes: [".jpg", ".png"]
};
