import React, { useState } from "react";
import FileUpload from "./fileUpload/fileUpload";
import GenerateSlides from "./slides";
import Papa from "papaparse";
import "./report.css";

const Report = () => {
  const [logo, setLogo] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [reportName, setReportName] = useState("");
  const [currency, setCurrency] = useState("$");

  return (
    <div className="report-builder">
      <h1 className="title">Report Builder</h1>

      <div className="form-group">
        <label className="form-label" htmlFor="reportName">
          Report Name
        </label>
        <input id="reportName" className="form-input" type="text" value={reportName} onChange={(e) => setReportName(e.target.value)} placeholder="Enter Report Name" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="currency">
          Currency
        </label>
        <select id="currency" className="form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
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
              complete: (results) => setCsvData(results.data),
            });
          }}
        />
      </div>

      <div className="form-actions">
        <GenerateSlides logo={logo} csvData={csvData} reportName={reportName} currency={currency} />
      </div>
    </div>
  );
};

export default Report;
