import { setWord } from "../components/NextWord";

const className = "tetromino";


export const TETROMINOES = {
  2: {
    shape: [
      [1,1]
    ],
    className: `${className} ${className}__i`
  },
  3: {
    shape: [
      [1,1,1]
    ],
    className: `${className} ${className}__j`
  },
  4: {
    shape: [
     [1,1,1,1]
    ],
    className: `${className} ${className}__l`
  },
  5: {
    shape: [
      [1,1,1,1,1]
    ],
    className: `${className} ${className}__o`
  },
  6: {
    shape: [
      [1,1,1,1,1,1]
    ],
    className: `${className} ${className}__s`
  },
  7: {
    shape: [
      [1,1,1,1,1,1,1]
    ],
    className: `${className} ${className}__t`
  },
  8: {
    shape: [
      [1,1,1,1,1,1,1,1]
    ],
    className: `${className} ${className}__z`
  },
  12: {
    shape:[
      [1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    className: `${className} ${className}__m`
  },
};

const words = ["We" ,"design", "and", "develop", "applications","that", "run", "the", "world", "and" ,"showcase", "the", "future"];

let letter = "";


let idx =  Math.floor(Math.random() * words.length);

export const randomTetromino = () => {
  const idx2 =  Math.floor(Math.random() * words.length);
  const key = words[idx].length;
  letter = words[idx];
  setWord(words[idx2]);
  idx = idx2;
  console.log(letter);
  return TETROMINOES[key];
};


export const transferToBoard = ({
  className,
  isOccupied,
  position,
  rows,
  shape,
  letter
}) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied;
        const word = letter
        const _y = y + position.row;
        const _x = x + position.column;
        rows[_y][_x] = { occupied, className, word };
      }
    });
  });

  return rows;
};
