import "./App.css";
import { gameSubject } from "./Game";
import { useState, useEffect } from "react";
import Board from "./Board";

const App = () => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    console.log(gameSubject.value);
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board));
    return subscribe.unsubscribe();
  }, []);

  return (
    <div className="container">
    <div className="board-container">

      <Board board={board}></Board>
    </div>
    </div>
  );
};

export default App;
