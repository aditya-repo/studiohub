import React from "react";
import ProgressBar from "../_components/Cloud/ProgressBar"
import AddNewFile from "../_components/Cloud/AddNewFile";
import FolderList from "../_components/Cloud/FolderDetails"

const CloudCard = ({ clientData }) => {
  return (

    <div className="flex justify-center">
      <div className="w-[1100px]">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
          <div className="flex justify-between items-center">
            <h2>
              <strong>Add New</strong>
            </h2>
            <div>
              <span className="font-bold">Total Uploaded </span> : 28.92 GB
            </div>
          </div>
          <div className="my-3">
            <AddNewFile />
            <ProgressBar />
          </div>
          <div className="w-[100%] h-[1px] my-8 border-dashed border-b-[1px]  border-black-700"></div>
          <FolderList />
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
