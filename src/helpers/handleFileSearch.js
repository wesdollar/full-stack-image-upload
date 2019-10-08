import { alert } from "../constants/alert";

export const handleFileSearch = async (value, setFiles, setAlert) => {
  const response = await fetch("/find", {
    method: "POST",
    body: JSON.stringify({ searchTerm: value }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    const files = await response.json();

    return setFiles(files);
  }

  return setAlert({
    type: alert.type.error,
    text: "Error! Invalid entry. Please try again."
  });
};
