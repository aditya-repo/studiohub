import React, { useEffect, useState } from "react";

const AddNewFile = ({ onProgress }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (uploading && file) {
      handleUpload();
      setUploading(false);
    }
  }, [uploading, file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      uploadChunks();
    }
  };

  const uploadChunks = async () => {
    const chunkSize = 1 * 1024 * 1024; // 1 MB chunk size
    const totalChunks = Math.ceil(file.size / chunkSize);
    let uploadedSize = 0;
    let previousUploadedSize = 0;
    let previousTime = Date.now();

    const uploadChunk = async (chunk, index) => {
      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("fileName", file.name);
      formData.append("totalChunks", totalChunks);
      formData.append("chunkIndex", index);

      try {
        const response = await fetch(
          "http://167.71.232.234:4000/upload-chunk",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        uploadedSize += chunk.size;
        const currentTime = Date.now();
        const elapsedTime = (currentTime - previousTime) / 1000; // in seconds
        const speed = (uploadedSize - previousUploadedSize) / elapsedTime; // bytes per second

        const remainingChunks = totalChunks - index - 1;
        const estimatedRemainingTime = (remainingChunks * chunkSize) / speed;

        previousUploadedSize = uploadedSize;
        previousTime = currentTime;

        onProgress({
          progress: Math.round(((index + 1) / totalChunks) * 100),
          fileSize: file.size,
          uploadedSize,
          uploadSpeed: (speed / (1024 * 1024)).toFixed(2), // MB/s
          remainingTime: Math.round(estimatedRemainingTime),
        });
      } catch (error) {
        console.error("Upload failed:", error);
        // Optionally handle upload failure
      }
    };

    for (let start = 0; start < file.size; start += chunkSize) {
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);
      const index = start / chunkSize;

      await uploadChunk(chunk, index);
    }

    // Notify completion
    try {
      await fetch("http://167.71.232.234/:4000/complete-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, totalChunks }),
      });
      alert("File upload complete!");
    } catch (error) {
      console.error("Failed to complete upload:", error);
      // Optionally handle failure to complete upload
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-6 justify-between items-center">
        <div className="flex items-center flex-start">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium leading-6 text-gray-900 pr-5 w-30"
          >
            File Upload
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="mt-2 w-72 block rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm h-10"
          />
        </div>

        <button
          onClick={() => setUploading(true)}
          className="rounded-md py-2 bg-indigo-800 px-4 text-white h-10 w-48 mt-2"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddNewFile;
