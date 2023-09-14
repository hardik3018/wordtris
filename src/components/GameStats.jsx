import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (

    <div className="score-board">
        <h4>Level</h4>
        <br></br>
      <div className="score-display">
        <h4>{level}</h4>
      </div>
      <br></br>      
      <br></br>
      <h4>Score</h4>
        <br></br>
      <div className="score-display">
        <h4>{points}</h4>
      </div>
    </div>
  
  );
};

export default React.memo(GameStats);
