import React from "react";

const FileUploadStatus = ({ fileSize }) => {
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
                        {(fileSize / (1024 * 1024)).toFixed(2)} MB
                    </span>
                    <span>08:40 PM, 12 Sep, 2024</span>
                </div>
            </div>

            <div className="w-19 flex justify-center mt-1 pl-3">
                <div className="w-full flex justify-center">
                    <div className="w-22 h-22 border border-gray-600 rounded-full flex items-center justify-center p-1">
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
