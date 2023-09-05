import "./style.scss";
import { useState } from "react";
import { calculateWinner } from "./Winner";
import StatusMessage from "./Components/statusMessage";

import Board from "./Components/Board";
function App() {
  const [squares, setSqures] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);

  const winner = calculateWinner(squares);

  const handleSquaresClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
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

  return (
    <>
      <div className="app">
        <StatusMessage
          squares={squares}
          nextPlayer={nextPlayer}
          winner={winner}
        />
        <Board squares={squares} handleSquaresClick={handleSquaresClick} />
      </div>
    </>
  );
}

export default App;
