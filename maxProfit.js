// Problem: You are given an array. Each element represents the price of a stock on that particular day.
//Calculate and return the maximum profit you can make from buying and selling that stock only once.

// Solution: This solution has a time complexity of O(N) since we only require a single pass of the array.
// It has a space complexity of O(1) since we use constant space to keep track of the min and max when iterating.
function maxProfit(prices) {
  let max = -Infinity;
  let min = prices[0];

  for (let p of prices) {
    let currProfit = p - min;
    max = Math.max(max, currProfit);
    min = Math.min(min, p);
  }
  return max;
}

console.log(maxProfit([9, 11, 8, 5, 7, 10]));

// If we iterate the array backwards, we can keep track of the highest price so far (this will be the best sell price for any element to its left).
// Then while iterating, we simply compute the profit by subtracting the current element (treat it as buy price) from the highest price to the right, and keep track of the maximum profit in a variable.
function maxProfit2(prices) {
  let maxCurr = 0;
  let maxProfit = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    maxCurr = Math.max(maxCurr, prices[i]);
    let currProfit = maxCurr - prices[i];
    maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxProfit;
}

console.log(maxProfit2([9, 11, 8, 5, 7, 10]));
