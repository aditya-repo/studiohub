import React from "react";
// import ProgressBar from "./ProgressBar"; // Make sure to import your ProgressBar component
import FileUploadStatus from "./FileUploadStatus";
import axiosStudioInstance from "../../Config/axiosStudioConfig";
import { useParams } from "react-router-dom";
import URL from "../../Config/config";

const FolderList = ({ folders, triggerUpdate }) => {
  const { clientid } = useParams();

  const handleDelete = async (id) => {
    await axiosStudioInstance.post(URL.DELETE_FOLDER(clientid), { id });
    triggerUpdate();
  };

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        List of All Folders
      </h2>
      {folders.map((folder, index) => (
        <div key={folder._id} className="flex flex-row items-center mb-4">
          <div className="w-60">{`${index + 1}. ${folder.foldername}`}</div>
          <div className="flex-1" onClick={() => handleDelete(folder._id)}>
            <FileUploadStatus fileSize={folder.size} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
