import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar"; // Import the ProgressBar component

const AddNewFile = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  const chunkSize = 20 * 1024 * 1024; // 20 MB per chunk
  const parallelLimit = 5; // Limit to 5 parallel chunk uploads

  useEffect(() => {
    if (uploading && file) {
      uploadFile(); // Trigger upload when file is set and uploading is true
      setUploading(false); // Reset uploading state after starting the upload
    }
    // eslint-disable-next-line
  }, [uploading, file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const checkUploadedChunks = async (fileName, totalChunks) => {
    const response = await fetch("http://localhost:4000/upload/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, totalChunks }),
    });
    const data = await response.json();
    return data.uploadedChunks;
  };

  const uploadChunk = async (chunk, fileName, chunkIndex, totalChunks) => {
    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("fileName", fileName);
    formData.append("chunkIndex", chunkIndex);
    formData.append("totalChunks", totalChunks);

    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error uploading chunk ${chunkIndex + 1}`);
    }

    return chunkIndex;
  };

  const uploadFile = async () => {
    if (!file) return;

    const totalChunks = Math.ceil(file.size / chunkSize);
    const uploadedChunks = await checkUploadedChunks(file.name, totalChunks);

    let uploadedCount = uploadedChunks.length;
    let chunkIndex = 0;
    let offset = 0;
    let uploadedBytes = 0;
    let previousUploadedBytes = 0;
    let previousTime = Date.now();

    const uploadNextBatch = async () => {
      const chunkUploadPromises = [];

      while (
        chunkUploadPromises.length < parallelLimit &&
        chunkIndex < totalChunks
      ) {
        if (uploadedChunks.includes(chunkIndex)) {
          chunkIndex++;
          continue;
        }

        const chunk = file.slice(offset, offset + chunkSize);
        chunkUploadPromises.push(
          uploadChunk(chunk, file.name, chunkIndex, totalChunks)
            .then(() => {
              uploadedCount++;
              uploadedBytes += chunk.size;
              const currentTime = Date.now();
              const elapsedTime = (currentTime - previousTime) / 1000;
              const speed = (uploadedBytes - previousUploadedBytes) / elapsedTime;

              const remainingChunks = totalChunks - uploadedCount;
              const remainingTimeInSeconds =
                remainingChunks * (chunkSize / speed);

              previousUploadedBytes = uploadedBytes;
              previousTime = currentTime;

              setUploadedSize(uploadedBytes);
              setProgress(Math.round((uploadedCount / totalChunks) * 100));
              setUploadSpeed((speed / (1024 * 1024)).toFixed(2)); // Convert to MB/s
              setRemainingTime(Math.round(remainingTimeInSeconds));

              console.log(
                `Chunk ${chunkIndex + 1} of ${totalChunks} uploaded.`
              );
            })
            .catch((error) => {
              console.error(`Error uploading chunk ${chunkIndex + 1}:`, error);
            })
        );

        chunkIndex++;
        offset += chunkSize;
      }

      await Promise.all(chunkUploadPromises);

      if (chunkIndex < totalChunks) {
        await uploadNextBatch();
      }
    };

    await uploadNextBatch();
    console.log("File upload completed!");
  };

  return (
    <div>
      <h1>Chunk File Upload</h1>
      <div className="flex flex-row gap-6 justify-between items-center mb-3">
        <div className="flex items-center">
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
          disabled={!file}
        >
          Upload File
        </button>
      </div>

      {progress > 0 && (
        <ProgressBar
          progress={progress}
          fileSize={file.size}
          uploadedSize={uploadedSize}
          uploadSpeed={uploadSpeed}
          remainingTime={remainingTime}
        />
      )}
    </div>
  );
};

export default AddNewFile;
