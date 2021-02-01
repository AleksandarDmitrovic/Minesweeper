import { useEffect, useState } from "react"
import createBoard from "../helpers/createBoard";
import Cell from "./Cell";
import revealed from "../helpers/reveal";
import Modal from "./Modal";
import Timer from "./Timer";

export default function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    freshBoard();
  }, [])

  //Creating a board
  const freshBoard = () => {
    const newBoard = createBoard(16, 16, 40);
    setNonMineCount(16 * 16 - 40);
    setMineLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  // Restart Game
  const restartGame = () => {
    freshBoard();
    setGameOver(false);
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    // Reveal once only
    if (grid[x][y].revealed || gameOver) {
      return;
    }

    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount)
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount)
      if (newRevealedBoard.newNonMinesCount === 0) {
        setGameOver(true);
      }
    }
  }

  const flagCell = (x, y) => {
    let newBoardValues = JSON.parse(JSON.stringify(grid));
    newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
    setGrid(newBoardValues);
  }


  return (
    <div>
      <Timer />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: "relative" }}>
        {gameOver && <Modal restartGame={restartGame} />}
        {grid.map((row, index1) => {

          return (
            <div style={{ display: "flex" }} key={index1}>
              {row.map((cell, index2) => {
                return (
                  <Cell
                    data={cell}
                    flagCell={flagCell}
                    revealCell={revealCell}
                    key={index2}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )


}