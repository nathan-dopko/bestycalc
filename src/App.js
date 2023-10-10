import "./App.css";

import React from "react";
import { BestyCalcR } from "./components/Vreact/BestyCalcR";
import { Card } from "./components/Vreact/Card/Card";

function App() {
  return (
    <div className="App">
      <div className="compWrapper">
        <Card />
        <BestyCalcR />
      </div>
    </div>
  );
}

export default App;
