import "./App.css";
import React from "react";
import { BestyCalcR } from "./components/Vreact/BestyCalcR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Vreact/Card/Card";
import { NewFeatures } from "./components/NewFeature/NewFeatures";
import { BookingPage } from "./components/BookingPage/BookingPage";
import { BookingPageConf } from "./components/BookingPageConf/BookingPage";

const CompWrapper = () => {
  return (
    <div className="compWrapper">
      {/* <Card /> */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
