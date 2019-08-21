function twoSum(A, sum) {
  let table = {};
  for (i = 0; i < A.length; i++) {
    if (table[sum - A[i]] == undefined)  table[A[i]] = i;
    else {
       return `idx: ${table[sum - A[i]]}, ${i}`;
    }
  }
}

console.log(twoSum([9, 2, 6, 1, 0], 11));
