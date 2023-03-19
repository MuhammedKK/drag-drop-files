import React, { useState } from "react";
import { useRef } from "react";
const DragAndDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    // setFiles(e.dataTransfer.files);.
    console.log(e.dataTransfer.files);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log(Array.from(e.dataTransfer.files));
    setFiles(e.dataTransfer.files);
  };

  // handle Upload Files To The
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append(files);
    console.log(files);
  };

  if (files)
    return (
      <div className="upload">
        <ul>
          {Array.from(files).map((file, indx) => (
            <li key={indx}>{file.name}</li>
          ))}
        </ul>
        <button onClick={() => handleUpload}>Upload</button>
      </div>
    );
  console.log(files);

  return (
    <>
      {!files && (
        <div
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e)}
          className="dropzone"
        >
          <h2>Drag And Drop Files Here</h2>
          <span>Or</span>
          <br />
          <input
            type="file"
            multiple
            name="file"
            onChange={(e) => setFiles(e.target.files)}
            ref={inputRef}
            hidden
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
      )}
    </>
  );
};

export default DragAndDrop;
