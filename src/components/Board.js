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

  // On Right Click Flag Cell
  const updateFlag = (event, x, y) => {
    // Prevent dropdown menu right click
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));

    newGrid[x][y].flagged = true;
    console.log('newGrid[x][y] :', newGrid[x][y]);


    setGrid(newGrid);
    console.log("Right Click")
  }

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




  return (
    <div>
      <p>Minesweeper</p>
      <Timer />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: "relative" }}>
        {gameOver && <Modal restartGame={restartGame} />}
        {grid.map((singleRow, index1) => {

          return (
            <div style={{ display: "flex" }} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    details={singleBlock}
                    updateFlag={updateFlag}
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