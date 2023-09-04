import "./style.scss";
import { useState } from "react";

import Board from "./Components/Board";
function App() {
  const [squares, setSqures] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);
  const statusMessage = nextPlayer ? "X" : "0";

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

  return (
    <>
      <div className="app">
        <h2>Next Player : {statusMessage}</h2>
        <Board squares={squares} handleSquaresClick={handleSquaresClick} />
      </div>
    </>
  );
}

export default App;
