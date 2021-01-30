import { useEffect, useState } from "react"
import createBoard from "../helpers/createBoard";
import Cell from "./Cell";

export default function Board() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      console.log(newBoard);
      setGrid(newBoard.board);
    }
    freshBoard();
  }, [])

  const updateFlag = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));

    newGrid[x][y].flagged = true;
    console.log('newGrid[x][y] :', newGrid[x][y]);


    setGrid(newGrid);
    console.log("Right Click")
  }




  return grid.map((singleRow, index1) => {

    return (
      <div style={{ display: "flex" }}> key={index1}
        {singleRow.map((singleBlock, index2) => {
          return (
            <Cell
              details={singleBlock}
              updateFlag={updateFlag}
              key={index2}
            />
          )
        })}
      </div>
    )
  });

}