import { useEffect, useState } from "react"
import createBoard from "../helpers/createBoard";
import Cell from "./Cell";
import revealed from "../helpers/reveal";

export default function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    //Creating a board
    function freshBoard() {
      const newBoard = createBoard(16, 16, 40);
      setNonMineCount(16 * 16 - 40);
      setMineLocations(newBoard.mineLocation);
      setGrid(newBoard.board);
    }

    freshBoard();
  }, [])

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
    if (grid[x][y].revealed) {
      return;
    }

    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert('game over');
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount)
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount)
    }
  }




  return (
    <div>
      <p>{nonMineCount}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
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