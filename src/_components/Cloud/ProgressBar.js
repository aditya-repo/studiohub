import React from "react";

const ProgressBar = ({
  progress = 0,
  fileSize = 0,
  uploadedSize = 0,
  uploadSpeed = 0,
  remainingTime = 0,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        {/* Progress Bar */}

        <div className="relative flex mt-5">
          {/* Background of the progress bar */}
          <div
            className="absolute inset-0 bg-gray-200 rounded-full"
            aria-hidden="true"
          />
          {/* Fill of the progress bar */}
          <div
            className="relative bg-indigo-600 text-xs font-medium text-white text-center leading-none rounded-full"
            style={{ width: `${progress}%`, height: "0.3rem" }}
          >
            <span className="sr-only">{progress}% Complete</span>
          </div>
          {/* Tooltip for progress percentage */}
          {progress <= 100 && progress > 0 && (
            <div
              className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white rounded-full py-1 px-2"
              style={{ left: `${progress}%`, fontSize:11 }}
            >
              {progress}% 
            </div>
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between text-xs font-medium text-gray-700 mt-2 w-full">
        <span>
          <span className="font-bold">File Size</span>:{" "}
          {(uploadedSize / (1024 * 1024)).toFixed(2)} MB{" / "}
          {(fileSize / (1024 * 1024)).toFixed(2)} MB
        </span>
        <span>
          <span className="font-bold">Speed</span>:{" "}
          {uploadSpeed > 0 ? uploadSpeed : "N/A"} MB/s
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
