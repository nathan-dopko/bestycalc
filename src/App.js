import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { BestyPricingCalculator } from "./components/BFFCalc/BFFCalc";
import { BookingPage } from "./components/BookingPage/BookingPage";
import { BookingPageConf } from "./components/BookingPageConf/BookingPage";
import { NewFeatures } from "./components/NewFeature/NewFeatures";
import Report from "./components/ReportBuilder/index";
import { BestyCalcR } from "./components/Vreact/BestyCalcR";
import MessageStats from "./components/MessageStats/MessageStats";

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
          <Route path="/bffcalc" element={<BestyPricingCalculator />} />
          <Route path="/message-stats" element={<MessageStats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
