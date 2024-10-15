import React from "react";

const FileUploadStatus = ({ fileSize, timestamp, deleteme, folderid }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
      
        // Extracting time in 12-hour format
        const timePart = date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
      
        // Extracting the date in day-month-year format
        const datePart = date.toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
      
        return `${timePart}, ${datePart}`;
      };
      
      const convertFileSize = (fileSizeInKB) => {
        const sizeInGB = fileSizeInKB / (1024 * 1024); // Convert KB to GB
        if (sizeInGB >= 1) {
          return `${sizeInGB.toFixed(2)} GB`; // If size is 1 GB or more, return in GB
        }
        
        const sizeInMB = fileSizeInKB / 1024; // Convert KB to MB
        return `${sizeInMB.toFixed(2)} MB`; // Otherwise, return in MB
      };

      console.log(fileSize);
      
    
    return (
        <div className="flex items-stretch w-full items-center">
            <div className="flex-grow mt-2"> {/* Added mt-2 here for margin */}
                <div className="flex items-center">
                    <div className="relative bg-indigo-600 text-xs font-medium text-white text-center leading-none rounded-full" style={{ width: `100%`, height: "0.3rem" }}>
                        <span className="sr-only">100% Complete</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs font-medium text-gray-700 mt-2 w-full"> {/* Changed w-200 to w-full */}
                    <span>
                        <span className="font-bold">File Size</span>:{" "}
                        {(fileSize / (1024 * 1024 * 1024)).toFixed(2) <= 1 ? `${(fileSize / (1024 * 1024)).toFixed(2)} MB` : `${(fileSize / (1024 * 1024 * 1024)).toFixed(2)} GB`} 
                    </span>
                    <span>{formatDate(timestamp)}</span>
                </div>
            </div>

            <div className="w-19 flex justify-center mt-1 pl-3">
                <div className="w-full flex justify-center">
                    <div className="w-22 h-22 border border-gray-600 rounded-full flex items-center justify-center p-1" onClick={()=>deleteme(folderid)}>
                        <svg className="close-button" width="22" height="22" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="black" strokeWidth="5">
                                <line x1="10" y1="10" x2="40" y2="40" />
                                <line x1="40" y1="10" x2="10" y2="40" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadStatus;
