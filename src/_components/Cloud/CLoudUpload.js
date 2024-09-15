import React from "react";
import ProgressBar from "./ProgressBar";
import AddNewFile from "./AddNewFile";
import FolderList from "./FolderDetails";

const CloudCard = ({ clientData }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
    <div className="flex justify-between items-center">
      <h2>
        <strong>Add New</strong>
      </h2>
      <div>
        <span className="font-bold">Total Uploaded </span>: 28.92 GB
      </div>
    </div>
    <div className="my-3">
      <AddNewFile />
      <ProgressBar />
    </div>
    <div className="w-[100%] h-[1px] my-8 border-dashed border-b-[1px]  border-black-700"></div>
    <FolderList />
  </div>
  );
};

export default CloudCard;
