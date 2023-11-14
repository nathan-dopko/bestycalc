import "./App.css";
import React from "react";
import { BestyCalcR } from "./components/Vreact/BestyCalcR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Vreact/Card/Card";
import { NewFeatures } from "./components/NewFeature/NewFeatures";

const CompWrapper = () => {
  return (
    <div className="compWrapper">
      <Card />
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
          <Route path="/newFeature" element={<NewFeatures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
