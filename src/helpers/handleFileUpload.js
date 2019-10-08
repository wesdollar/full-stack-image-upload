import { uploads } from "../config/uploads";
import { alert } from "../constants/alert";

// eslint-disable-next-line max-params
export const handleFileUpload = async (event, files, setFiles, setAlert) => {
  // eslint-disable-next-line no-magic-numbers, prefer-destructuring
  const file = event.target.files[0] || false;
  const { name } = event.target;

  if (!file) {
    const alertData = {
      type: alert.type.error,
      text: `Error: No file selected.`
    };

    return setAlert(alertData);
  }

  const fileSize = file.size;

  if (fileSize > uploads.maxFileSize) {
    const alertData = {
      type: alert.type.error,
      text: `Error: File is too large. Must be less than ${uploads.humanMaxFileSize}.`
    };

    return setAlert(alertData);
  }

  const formData = new FormData();

  formData.append(name, file);

  const response = await fetch("/upload", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    const localFiles = [...files];

    localFiles.push({ filename: file.name, size: fileSize });

    setFiles(localFiles);

    const alertData = {
      type: alert.type.success,
      text: `File uploaded!`
    };

    return setAlert(alertData);
  }
};
