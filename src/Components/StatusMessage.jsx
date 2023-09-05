const StatusMessage = ({ winner, nextPlayer, squares }) => {
  const nxtPlayer = nextPlayer ? "X" : "0";
  const noMovesLeft = squares.every((squareValue) => squareValue !== null);

  const renderMessage = () => {
    if (winner) {
      return <div>Winner is <span className={nextPlayer ? "text-orange" : "text-green"}>{winner}</span></div>;
    } else if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-orange">0</span> and
          <span className="text-green">X</span> Tied
        </div>
      );
    } else if (!winner && !noMovesLeft) {
      return (
        <div>
          Next Player is :
          <span className={nextPlayer ? "text-green" : "text-orange"}>
            {nxtPlayer}
          </span>
        </div>
      );
    }
    return null;
  };

  return <h2>{renderMessage()}</h2>;
};

export default StatusMessage;
