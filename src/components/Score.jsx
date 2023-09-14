import React, { useState } from 'react';
import "./pane.css"

const ScoreBoard = ({score}) => {

  return (
    <div className="score-board">
        <h2>Score</h2>
        <br></br>
      <div className="score-display">
        <h4>{score}</h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
