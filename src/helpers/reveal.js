export default function revealed(arr, x, y, newNonMinesCount) {
  console.log(arr[x][y]);
  if (arr[x][y].revealed) {
    return;
  }

  // Stack of cells that should be revealed
  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let cell = flipped.pop();
    console.log('cell :', cell);

    if (!cell.revealed) {
      newNonMinesCount--;
      cell.revealed = true;
    }

    if (cell.value !== 0) {
      break;
    }

    // Top Left
    if (
      cell.x > 0 &&
      cell.y > 0 &&
      arr[cell.x - 1][cell.y - 1].value === 0 &&
      !arr[cell.x - 1][cell.y - 1].revealed
    ) {
      flipped.push(arr[cell.x - 1][cell.y - 1]);
    }

    // Top Right
    if (
      cell.x > 0 &&
      cell.y < arr[0].length - 1 &&
      arr[cell.x - 1][cell.y + 1].value === 0 &&
      !arr[cell.x - 1][cell.y + 1].revealed
    ) {
      flipped.push(arr[cell.x - 1][cell.y + 1]);
    }

    // Bottom Right
    if (
      cell.x < arr.length - 1 &&
      cell.y < arr.length - 1 &&
      arr[cell.x + 1][cell.y + 1].value === 0 &&
      !arr[cell.x + 1][cell.y + 1].revealed
    ) {
      flipped.push(arr[cell.x + 1][cell.y + 1]);
    }

    //Bottom Left
    if (
      cell.x < arr.length - 1 &&
      cell.y > 0 &&
      arr[cell.x + 1][cell.y - 1].value === 0 &&
      !arr[cell.x + 1][cell.y - 1].revealed
    ) {
      flipped.push(arr[cell.x + 1][cell.y - 1]);
    }

    //Unidirectionals

    // Top
    if (
      cell.x > 0 &&
      arr[cell.x - 1][cell.y].value === 0 &&
      !arr[cell.x - 1][cell.y].revealed
    ) {
      flipped.push(arr[cell.x - 1][cell.y]);
    }

    // Right
    if (
      cell.y < arr[0].length - 1 &&
      arr[cell.x][cell.y + 1].value === 0 &&
      !arr[cell.x][cell.y + 1].revealed
    ) {
      flipped.push(arr[cell.x][cell.y + 1]);
    }

    // Bottom
    if (
      cell.x < arr.length - 1 &&
      arr[cell.x + 1][cell.y].value === 0 &&
      !arr[cell.x + 1][cell.y].revealed
    ) {
      flipped.push(arr[cell.x + 1][cell.y]);
    }

    //Left
    if (
      cell.y > 0 &&
      arr[cell.x][cell.y - 1].value === 0 &&
      !arr[cell.x][cell.y - 1].revealed
    ) {
      flipped.push(arr[cell.x][cell.y - 1]);
    }

    // Reveal/Auto click non bomb ajacent squares

    // Click Top 
    if (
      cell.x > 0 &&
      !arr[cell.x - 1][cell.y].revealed
    ) {
      arr[cell.x - 1][cell.y].revealed = true;
      newNonMinesCount--;
    }

    // Click Top Right
    if (
      cell.x > 0 &&
      cell.y < arr[0].length - 1 &&
      !arr[cell.x - 1][cell.y + 1].revealed
    ) {
      arr[cell.x - 1][cell.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Right
    if (
      cell.y < arr[0].length - 1 &&
      !arr[cell.x][cell.y + 1].revealed
    ) {
      arr[cell.x][cell.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom Right
    if (
      cell.x < arr.length - 1 &&
      cell.y < arr[0].length - 1 &&
      !arr[cell.x + 1][cell.y + 1].revealed
    ) {
      arr[cell.x + 1][cell.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom
    if (
      cell.x < arr.length - 1 &&
      !arr[cell.x + 1][cell.y].revealed
    ) {
      arr[cell.x + 1][cell.y].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom Left
    if (
      cell.x < arr.length - 1 &&
      cell.y > 0 &&
      !arr[cell.x + 1][cell.y - 1].revealed
    ) {
      arr[cell.x + 1][cell.y - 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Left
    if (
      cell.y > 0 &&
      !arr[cell.x][cell.y - 1].revealed
    ) {
      arr[cell.x][cell.y - 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Top Left
    if (
      cell.x > 0 &&
      cell.y > 0 &&
      !arr[cell.x - 1][cell.y - 1].revealed
    ) {
      arr[cell.x - 1][cell.y - 1].revealed = true;
      newNonMinesCount--;
    }

  }

  return { arr, newNonMinesCount };
};