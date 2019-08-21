function moveZeros(nums) {
  let slowPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slowPointer] = nums[i];
      slowPointer++;
    }
  }
  while (slowPointer < nums.length) {
    nums[slowPointer] = 0;
    slowPointer++;
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12, 8, 0]));
