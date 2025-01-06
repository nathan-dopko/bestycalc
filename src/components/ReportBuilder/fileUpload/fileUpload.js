import React, { useState } from "react";
import "./fileUpload.css"; // Import CSS for styling

const FileUpload = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <div className="file-upload-container">
      <label className="file-upload-label">
        <input type="file" onChange={handleFileUpload} className="file-input" />
        <span className="file-upload-button">Choose File</span>
      </label>
      {fileName && <p className="file-name">Selected File: {fileName}</p>}
    </div>
  );
};

export default FileUpload;
