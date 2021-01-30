

export default function Cell(props) {
  const { details } = props;

  return (
    <div
      onClick={() => console.log(details)}
      style={style.cellStyle} >
      { details.value}
    </ div>
  )
};

const style = {
  cellStyle: {
    width: 40,
    height: 40,
    border: "2px solid black",
    background: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};