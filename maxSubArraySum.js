function maxSubArrSum(arr) {
  let maxSumSoFar = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxSumSoFar = Math.max(arr[i], maxSumSoFar + arr[i]);
    maxSum = Math.max(maxSum, maxSumSoFar);
  }
  return maxSum;
}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrSum([-2, -1, -3, -1, -2, -1, -5, -4]));
console.log(maxSubArrSum([-2]));
