

export default function Cell(props) {
  const { details, updateFlag, revealCell } = props;

  return (
    <div
      onContextMenu={(event) => updateFlag(event, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
      style={style.cellStyle} >
      { details.revealed ? details.value : ""}
    </ div>
  )
};

const style = {
  cellStyle: {
    width: 40,
    height: 40,
    border: "2px solid green",
    background: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};