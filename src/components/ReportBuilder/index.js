import React, { useState } from "react";
import FileUpload from "./fileUpload/fileUpload";
import GenerateSlides from "./slides";
import Papa from "papaparse";
import dayjs from "dayjs";
import "./report.css";

const Report = () => {
  const [logo, setLogo] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [reportName, setReportName] = useState("");
  const [currency, setCurrency] = useState("$");
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("#9C7F6C");

  const processCSVData = (data) => {
    return data.map((row) => {
      if (row["Date Sent"]) {
        const parsedDate = dayjs(row["Date Sent"], "M/D/YYYY");
        row["Date Sent"] = parsedDate.isValid() ? parsedDate.format("ddd, MMM D") : row["Date Sent"];
      }
      return row;
    });
  };

  return (
    <div className={`report-builder ${darkMode ? "dark-mode" : ""}`}>
      <div className="report-header">
        <h1>Report Builder</h1>
        <p>besty ai report builder v1</p>
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Report Name</label>
          <input type="text" value={reportName} onChange={(e) => setReportName(e.target.value)} placeholder="Enter report name" />
        </div>

        <div className="form-group">
          <label>Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="$">USD ($)</option>
            <option value="€">EUR (€)</option>
            <option value="£">GBP (£)</option>
            <option value="A$">AUD (A$)</option>
            <option value="₹">INR (₹)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Logo</label>
          <FileUpload
            onFileUpload={(file) => {
              const reader = new FileReader();
              reader.onload = () => setLogo(reader.result);
              reader.readAsDataURL(file);
            }}
          />
          {logo && <img src={logo} alt="Uploaded Logo" className="preview" />}
        </div>

        <div className="form-group">
          <label>Upload CSV</label>
          <FileUpload
            onFileUpload={(file) => {
              Papa.parse(file, {
                header: true,
                complete: (results) => {
                  const processedData = processCSVData(results.data);
                  setCsvData(processedData);
                },
              });
            }}
          />
        </div>

        <div className="form-group">
          <label>Choose Color</label>
          <div className="color-picker">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <span style={{ backgroundColor: color }} className="color-preview" />
          </div>
        </div>

        <div className="form-group">
          <label>Dark Mode</label>
          <div className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
          </div>
        </div>

        <div className="form-actions">
          <GenerateSlides logo={logo} csvData={csvData} reportName={reportName} currency={currency} color={color} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Report;
