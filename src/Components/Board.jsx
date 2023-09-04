import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSqures] = useState(Array(9).fill(null));

  const [nextPlayer, setNextPlayer] = useState(true);

  const handleSquaresClick = (clickedPosition) => {
    if (squares[clickedPosition]) {
      return;
    }

    setSqures((currentSquare) => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return nextPlayer ? "X" : "0";
        }
        return squareValue;
      });
    });

    setNextPlayer((currentNext) => !currentNext);
  };

  const renderSquare = (position) => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquaresClick(position)}
      />
    );
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;
