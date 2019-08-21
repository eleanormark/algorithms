var countBattleships = function(board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    let row = i;
    for (let j = 0; j < board[row].length; j++) {
      let position = j;
      row = i;
      if (board[row][position] === "X") {
        count++;
        board[row][position] = ".";
        while (
          board[row][position + 1] !== undefined &&
          board[row][position + 1] === "X"
        ) {
          board[row][position + 1] = ".";
          position = position + 1;
        }
        while (
          board[row + 1] !== undefined &&
          board[row + 1][position] === "X"
        ) {
          board[row + 1][position] = ".";
          row = row + 1;
        }
      }
    }
  }
  return count;
};
