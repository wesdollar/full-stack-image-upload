export const getFiles = async () => {
  try {
    const response = await fetch("/files");

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
};
