import { useEffect, useState } from "react"
import createBoard from "../helpers/createBoard";
import Cell from "./Cell";

export default function Board() {
  const [grid, setGrid] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    //Creating a board
    function freshBoard() {
      const newBoard = createBoard(16, 16, 40);
      console.log(newBoard);
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
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert('game over')
    } else {
      newGrid[x][y].revealed = true;
      setGrid(newGrid)
    }
  }




  return grid.map((singleRow, index1) => {

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
  });

}