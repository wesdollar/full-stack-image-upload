const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const app = express();
const port = 5000;
const upload = require("./routes/upload");
const getFilesFromUploads = require("./services/getFilesFromUploads");
const { uploadDirectory } = require("./config/uploads");
const { check, validationResult } = require("express-validator");
const { notAcceptable } = require("./constants/statusCodes");

app.use(fileUpload());
app.use(express.json());

app.get("/", (req, res) =>
  res.send("Hello World! Because we always say hello.")
);

app.get("/files", (req, res) => {
  const fileCollection = getFilesFromUploads();

  res.json(fileCollection);
});

app.post("/upload", upload);

app.post("/delete", (req, res) => {
  const { filename } = req.body;

  try {
    fs.unlinkSync(`${uploadDirectory}/${filename}`);

    res.json(`File deleted!`);
  } catch (error) {
    res.json(error);
  }
});

app.post(
  "/find",
  [
    check("searchTerm")
      .trim()
      .escape()
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(notAcceptable).json({ errors: errors.array() });
    }

    const fileCollection = getFilesFromUploads();
    const { searchTerm } = req.body;

    const matchedFiles = fileCollection.filter(file =>
      file.filename.includes(searchTerm)
    );

    res.json(matchedFiles);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
