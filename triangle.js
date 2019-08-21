function triangle(n) {
  let results = [];
  for (let line = 1; line <= n; line++) {
    let num = 1;
    let lineArr = [];
    for (let i = 1; i <= line; i++) {
      lineArr.push(num);
      num = (num * (line - i)) / i;
    }
    results.push(lineArr);
  }
  return results;
}
// console.log(triangle(15));

function triangle2(n) {
  let results = [];
  if (n < 0) return result;

  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      if (col == 0 || col == row) {

        arr.push(1);
      } else {
        arr.push(results[row - 1][col - 1] + results[row - 1][col]);
      }
    }
    results.push(arr);
  }
  return results;
}

console.log(triangle2(3));
