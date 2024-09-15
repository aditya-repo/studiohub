import React from "react";
import ProgressBar from "./ProgressBar"; // Make sure to import your ProgressBar component

const FolderList = () => {
  const folders = [
    { name: "Engagement Day", progress: 70 },
    { name: "Haldi Ceremony", progress: 100 },
    { name: "Mehndi Day", progress: 80 },
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
            <ProgressBar progress={folder.progress} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
