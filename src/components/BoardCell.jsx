import "./BoardCell.css";

const BoardCell = ({ cell }) => (
  <div className={`BoardCell ${cell.className}`}>
    <div className="Sparkle">
      <p className="text">{cell.word}</p>
    </div>
  </div>
);

export default BoardCell;
