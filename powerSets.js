function powerset(array) {
  let subsets = [[]];
  for (let el of array) {
    let len = subsets.length;
    for (let i = 0; i < len; i++) {
      let currSubset = subsets[i];
      subsets.push(currSubset.concat(el));
    }
  }
  return subsets;
}
