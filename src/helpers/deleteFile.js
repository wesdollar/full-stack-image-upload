// eslint-disable-next-line max-params
import { alert } from "../constants/alert";

// eslint-disable-next-line max-params
export const deleteFile = async (filename, files, setFiles, setAlert) => {
  const data = { filename };
  const localFiles = [...files];

  try {
    const response = await fetch("/delete", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const updatedFiles = localFiles.filter(
        file => file.filename !== filename
      );

      setFiles(updatedFiles);

      const alertData = {
        type: alert.type.success,
        text: `File deleted!`
      };

      return setAlert(alertData);
    }
  } catch (error) {
    const alertData = {
      type: alert.type.error,
      text: `Error: ${error}`
    };

    return setAlert(alertData);
  }
};
