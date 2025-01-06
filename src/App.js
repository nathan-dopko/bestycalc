import "./App.css";
import React from "react";
import { BestyCalcR } from "./components/Vreact/BestyCalcR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewFeatures } from "./components/NewFeature/NewFeatures";
import { BookingPage } from "./components/BookingPage/BookingPage";
import { BookingPageConf } from "./components/BookingPageConf/BookingPage";
import Report from "./components/ReportBuilder/index";

const CompWrapper = () => {
  return (
    <div className="compWrapper">
      <BestyCalcR />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CompWrapper />} />
          <Route path="/copilot" element={<NewFeatures />} />
          <Route path="/demo-booking" element={<BookingPage />} />
          <Route path="/conference" element={<BookingPageConf />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
