function getPermutations(array) {
  const perms = [];
  recursiveHelper(0, array, perms);
  return perms;
}

function recursiveHelper(i, array, perms) {
  if (i === array.length - 1) {
    perms.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array, "swap");
      recursiveHelper(i + 1, array, perms);
      swap(i, j, array, "undo swap");
    }
  }
}

function swap(i, j, array, job) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  console.log(job);
}
