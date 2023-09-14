import React, { useState } from 'react';
import "./pane.css"

let text = "";

export const setWord = (word) => {
  text = word;
}

const NextWord = () => {

  return (
    <div className="score-board ">
        <h4>Next Word</h4>
        <br></br>
      <div className="score-display">
        <h4>{text}</h4>
      </div>
    </div>
  );
};

export default NextWord;
