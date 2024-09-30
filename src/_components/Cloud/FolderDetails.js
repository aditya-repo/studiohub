import React from "react";
// import ProgressBar from "./ProgressBar"; // Make sure to import your ProgressBar component
import FileUploadStatus from "./FileUploadStatus";

const FolderList = () => {
  const folders = [
    { name: "Engagement Day", fileSize: 7000000000 },
    { name: "Haldi Ceremony", fileSize: 1000000000 },
    { name: "Mehndi Day", fileSize: 8000041500 },
  ];

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        List of All Folders
      </h2>
      {folders.map((folder, index) => (
        <div key={index} className="flex flex-row items-center mb-4">
          <div className="w-60">{`${index + 1}. ${folder.name}`}</div>
          <div className="flex-1">
            <FileUploadStatus fileSize={folder.fileSize} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
