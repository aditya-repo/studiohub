import React, { useEffect } from "react";
// import ProgressBar from "./ProgressBar"; // Make sure to import your ProgressBar component
import FileUploadStatus from "./FileUploadStatus";
import axiosStudioInstance from "../../Config/axiosStudioConfig";
import { useParams } from "react-router-dom";
import URL from "../../Config/config";

const FolderList = ({ folders, triggerUpdate, totalSize }) => {
  const { clientid } = useParams();

  const handleDelete = async (id) => {
    await axiosStudioInstance.post(URL.DELETE_FOLDER(clientid), { id });
    triggerUpdate();
  };

  useEffect(() => {
    let calculateSize = folders.reduce((total, current) => {
      return total + Number(current.size); // Ensure the total is returned
    }, 0);
  
    let filesize = (calculateSize / 1024 / 1024 / 1024).toFixed(2); // Convert to KB (or whatever unit you're aiming for)
  
    totalSize(filesize); // Pass the calculated size to totalSize
  }, [folders, totalSize]);
  

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        List of All Folders
      </h2>
      {folders.map((folder, index) => (
        <div key={folder._id} className="flex flex-row items-center mb-4">
          <div className="w-60">{`${index + 1}. ${folder.foldername}`}</div>
          <div className="flex-1">
            <FileUploadStatus fileSize={folder.size} timestamp={folder.uploadtime} folderid={folder._id} deleteme={(data) => handleDelete(data)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
