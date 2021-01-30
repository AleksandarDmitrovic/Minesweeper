import { useEffect, useState } from "react"
import createBoard from "../helpers/createBoard";
import Cell from "./Cell";

export default function Board() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      console.log(newBoard);
      setGrid(newBoard);
    }
    freshBoard();
  }, [])


  if (!grid.board) {
    return <div>loading</div>
  }

  return grid.board.map(singleRow => {

    return (
      <div style={{ display: "flex" }}>
        {singleRow.map(singleBlock => {
          return (
            <Cell details={singleBlock} />
          )
        })}
      </div>
    )
  });

}