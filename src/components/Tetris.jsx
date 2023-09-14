import "./Tetris.css";
import { useState, useCallback } from "react";
import GameController from "./GameController";
import ScoreBoard from "./Score";
import NextWord from "./NextWord";
import GameStats from "./GameStats";

import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";

import Previews from "./previews";



import Board from "./Board";


const Tetris = ({ rows, columns, setGameOver }) => {
  

  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });




  const [ nxtWord , setNxtWord ] = useState("none");
    

  return (
    <>
    
    <h1>W O R D T R I S</h1><br></br><br></br>
    <div className="Tetris">
      <Board board={board} />
      
      <div className="pane">
    {/*         
      <ScoreBoard score={score}/>
      <br></br><br></br>
      
      <br></br><br></br>
        <GameController
        board={board}
        setRow={setRow}
        setCol={setCol}
        /> */}
      <GameStats gameStats={gameStats} />
      <br></br><br></br>
      <NextWord />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
      </div>
    </div>
    
  </>
  );
};

export default Tetris;
