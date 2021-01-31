import randomColor from '../helpers/randomColor';
import '../styling/Cell.css';

export default function Cell(props) {
  const { data, flagCell, revealCell } = props;

  const cellstyle = {
    background: data.revealed
      ? data.value === "X"
        ? randomColor()
        : reaveledChexPattern(data.x, data.y)
      : chexPattern(data.x, data.y),
    color: numColorCode(data.value)
  }

  const onClickReveal = (event) => {
    if (data.flagged) {
      return;
    }
    console.log(event.type);
    revealCell(data.x, data.y);
  };

  const onContextMenuFlag = (event) => {
    event.preventDefault();
    flagCell(data.x, data.y)
  };

  return (
    <div
      onContextMenu={(event) => onContextMenuFlag(event)}
      onClick={(event) => onClickReveal(event)}
      style={cellstyle}
      className="cell"
    >
      {data.flagged && !data.revealed ? (
        "🚩"
      ) : data.revealed && data.value !== 0 ? (
        data.value === "X" ? (
          "💣"
        ) : (
            data.value
          )
      ) : (
            ""
          )}
    </ div>
  )
};



const reaveledChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#aad751";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#a2d249";
  } else {
    return "#aad751";
  }
};

const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#f70c0c";
  } else {
    return "#ff0000";
  }
};