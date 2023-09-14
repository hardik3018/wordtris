import "./preview.css";
import React from "react";

import { buildBoard } from "../functions/Board";
import { transferToBoard } from "../functions/Tetrominoes";

import BoardCell from "./BoardCell";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });

  return (
    <div className="Preview" style={style}>
      <div className="Preview-board">
      </div>
    </div>
  );
};

export default React.memo(Preview);
