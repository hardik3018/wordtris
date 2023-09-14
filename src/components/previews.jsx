import React from "react";

import Preview from "./preview";

const Previews = ({ tetrominoes }) => {
  // We want everything except the last one
  const previewTetrominoes = tetrominoes
    .slice( (tetrominoes.length -1) - tetrominoes.length)
    .reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </>
  );
};

export default React.memo(Previews);
