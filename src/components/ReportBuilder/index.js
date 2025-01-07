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
      <h1 className="title">Report Builder</h1>

      <div className="form-group">
        <label className="form-label" htmlFor="reportName">
          Report Name
        </label>
        <input
          id="reportName"
          className="form-input"
          type="text"
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          placeholder="Enter Report Name"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="currency">
          Currency
        </label>
        <select
          id="currency"
          className="form-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="$">USD ($)</option>
          <option value="€">EUR (€)</option>
          <option value="£">GBP (£)</option>
          <option value="A$">AUD (A$)</option>
          <option value="₹">INR (₹)</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="uploadLogo">
          Upload Logo
        </label>
        <FileUpload
          onFileUpload={(file) => {
            const reader = new FileReader();
            reader.onload = () => setLogo(reader.result);
            reader.readAsDataURL(file);
          }}
        />
        {logo && <img src={logo} alt="Uploaded Logo" className="uploaded-logo" />}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="uploadCSV">
          Upload CSV
        </label>
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
        <label className="form-label" htmlFor="colorPicker">
          Choose Color
        </label>
        <input
          id="colorPicker"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="form-color-picker"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="darkMode">
          Dark Mode
        </label>
        <input
          id="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          className="form-checkbox"
        />
      </div>

      <div className="form-actions">
        <GenerateSlides
          logo={logo}
          csvData={csvData}
          reportName={reportName}
          currency={currency}
          color={color}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default Report;
