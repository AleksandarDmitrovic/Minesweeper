export default function revealed(arr, x, y, newNonMinesCount) {
  console.log(arr[x][y]);
  if (arr[x][y].revealed) {
    return;
  }

  // Stack of cells that should be revealed
  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.revealed) {
      newNonMinesCount--;
      single.revealed = true;
    }

    if (single.value !== 0) {
      break;
    }

    // Top Left
    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    // Top Right
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    // Bottom Right
    if (
      single.x < arr.length - 1 &&
      single.y < arr.length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    //Bottom Left
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    //Unidirectionals

    // Top
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      flipped.push([single.x - 1][single.y]);
    }

    // Right
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    // Bottom
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    //Left
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    // Reveal/Auto click non bomb ajacent squares

    // Click Top 
    if (
      single.x > 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      arr[single.x - 1][single.y].revealed = true;
      newNonMinesCount--;
    }

    // Click Top Right
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      arr[single.x - 1][single.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Right
    if (
      single.y < arr[0].length - 1 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      arr[single.x][single.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom Right
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      arr[single.x + 1][single.y + 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom
    if (
      single.x < arr.length - 1 &&
      !arr[single.x + 1][single.y].revealed
    ) {
      arr[single.x + 1][single.y].revealed = true;
      newNonMinesCount--;
    }

    // Click Bottom Left
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      arr[single.x + 1][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Left
    if (
      single.y > 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      arr[single.x][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

    // Click Top Left
    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      arr[single.x - 1][single.y - 1].revealed = true;
      newNonMinesCount--;
    }

  }

  return { arr, newNonMinesCount };
};