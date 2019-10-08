import React, { useState, useEffect } from "react";
import { gutters } from "../../constants/gutters";
import FlexContainer from "../FlexContainer/FlexContainer";
import { justifyContent } from "../../constants/flexBox/justifyContent";
import { alignItems } from "../../constants/flexBox/alignItems";
import DisplayFiles from "../DisplayFiles/DisplayFiles";
import Button from "../Button/Button";
import { buttonSize } from "../../constants/buttonSize";
import FileCount from "../FileCount/FileCount";
import { getFiles } from "../../services/files/getFiles";
import AllFilesTotalSize from "../AllFilesTotalSize/AllFilesTotalSize";
import UploadFile from "../UploadFile/UploadFile";
import SearchFiles from "../SearchFiles/SearchFIles";
import { flexWrap } from "../../constants/flexBox/flexWrap";

const handleUploadClick = () => {
  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: false
  });

  document.getElementById("uploadFile").dispatchEvent(clickEvent);
};

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFiles();

      if (result) {
        setFiles(result);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <FlexContainer
        justifyContent={justifyContent.spaceBetween}
        alignItems={alignItems.baseline}
        mobileFlexWrap={flexWrap.wrapReverse}
      >
        <SearchFiles setFiles={setFiles} />
        <Button
          fullWidthMobile={true}
          size={buttonSize.large}
          handleOnClick={handleUploadClick}
        >
          Upload
        </Button>
        <UploadFile files={files} setFiles={setFiles} />
      </FlexContainer>
      <FlexContainer
        justifyContent={justifyContent.spaceBetween}
        alignItems={alignItems.baseline}
        gutterBottom={gutters.halfGutter}
      >
        <FileCount fileCount={files.length} />
        <AllFilesTotalSize files={files} />
      </FlexContainer>
      <DisplayFiles files={files} setFiles={setFiles} />
    </React.Fragment>
  );
};

export default Dashboard;
