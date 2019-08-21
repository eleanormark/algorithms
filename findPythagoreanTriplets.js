function findPythagoreanTriplets(nums) {
  let squares = new Set();
  for (let c of nums) {
    squares.add(c * c);
  }

  for (let a of nums) {
    for (let b of nums) {
      if (squares.has(a * a + b * b)) {
        return true;
      }
    }
  }
  return false;
}

console.log(findPythagoreanTriplets([3, 12, 5, 13]));
