import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "../functions/Input";
import { playerController } from "../functions/PlayerController";

import { useDropTime } from "../hooks/useDropTime";
import { useInterval } from "../hooks/useInterval";
import left from "../assets/left.png";
import right from "../assets/right.png";
import down from "../assets/down.png";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  };

  function buttonup( code ){
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  function buttondown( code ){
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

 
  return (
    <>
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
    <br></br>
    <br></br>
    <p className="para">use your laptop's <br></br><p className="keey">LEFT &nbsp; &nbsp; RIGHT<br></br> DOWN &nbsp; &nbsp;SPACE </p>keys for better experience</p>
    <br></br>
    <br></br>
    <div>

        <button onClick={()=>{buttonup("ArrowLeft"); buttondown("ArrowLeft");}}><img src={left}></img></button>
        <button onClick={()=>{buttonup("ArrowRight"); buttondown("ArrowRight");}}><img src={right}></img></button>
        <button className="fordown"></button>
        
    </div>

    </>
    
  );
};

export default GameController;
