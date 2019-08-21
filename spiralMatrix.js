function spitalMatrix(matrix) {
  let results = [];
  if (matrix.length == 0) return results;

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      results.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      results.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowEnd >= rowStart) {
      for (let i = colEnd; i >= colStart; i--) {
        results.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colEnd >= colStart) {
      for (let i = rowEnd; i >= rowStart; i--) {
        results.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }
  return results;
}
