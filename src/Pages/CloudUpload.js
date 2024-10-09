import React, { useEffect, useState } from "react";
import AddNewFile from "../_components/Cloud/AddNewFile";
import FolderList from "../_components/Cloud/FolderDetails";
import URL from "../Config/config";
import axiosStudioInstance from "../Config/axiosStudioConfig";
import { useParams } from "react-router-dom";

const CloudCard = ({ clientData }) => {
  const [formData, setFormData] = useState({ folder: [] });
  const [canAddFile, setCanAddFile] = useState(false);
  const [updateEffect, setUpdateEffect] = useState(false);

  const { clientid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosStudioInstance.get(
          URL.GET_UPLOAD_DATA(clientid)
        );
        setFormData(response.data);
        setCanAddFile(Number(response.data.folder.length) < 5); // Simplified logic
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    fetchData();

    return () => setUpdateEffect(false);
  }, [clientid, updateEffect]);

  const handleSubmit = async () => {
    try {
      await axiosStudioInstance.post(URL.DECOMPRESSION(clientid));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1100px]">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md mt-4">
          <div className="flex justify-between items-center">
            <h2>
              <strong>Cloud Uploads</strong>
            </h2>
            <div>
              <span className="font-bold">Total File </span>:{" "}
              {formData.folder.length} / 5
            </div>
            <div>
              <span className="font-bold">Total Uploaded </span>: 28.92 / 35 GB
            </div>
          </div>
          {canAddFile && ( // Using conditional rendering directly
            <div>
              <div className="my-3 border px-4 py-3 rounded-md">
                <AddNewFile triggerUpdate={() => setUpdateEffect(true)} />
              </div>
              <div className="w-full h-[1px] my-8 border-dashed border-b border-gray-600"></div>
            </div>
          )}
          <FolderList
            folders={formData.folder}
            triggerUpdate={() => setUpdateEffect(true)}
          />
          <div className="flex justify-center">
            <div
              className="bg-indigo-600 rounded-full px-8 py-2 text-white"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
