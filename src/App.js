import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";

const App = () => {
  return (
    <div className="App">
      <div className="game-board">
        <Game rows={15} columns={30} />
      </div>
      <div className="score"></div>
    </div>
  );
};

export default App;
