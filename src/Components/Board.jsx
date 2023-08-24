import Square from "./Square";

const Board =() =>{
   return <>
    <div className="board">
        <div className="board-row">
            <Square value="1" className="square"/>
            <Square value="2"className="square"/>
            <Square value="3"className="square"/>
        </div>
        <div className="board-row">
            <Square value="4"className="square"/>
            <Square value="5"className="square"/>
            <Square value="6"className="square"/>
        </div>
        <div className="board-row">
            <Square value="7"className="square"/>
            <Square value="8"className="square"/>
            <Square value="9"className="square"/>
        </div>
    </div></>
}

export default Board;