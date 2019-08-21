class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {

 //time complexity is O(n+m)
 //space complexity is O(max(n,m)), where n and m are the lengths of the two lists
  addTwoNumsIterative(l1, l2) {
    let sum = 0;
    let result = new Node(0);
    let curr = result;

    while (l1 || l2 || sum) {
      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
      curr.next = new Node(sum % 10);
      sum = sum > 9 ? 1 : 0;
      curr = curr.next;
    }
    return result.next;
  }

  addTwoNumsRecursive(l1, l2) {
    function recursiveHelper(l1, l2, sum = 0) {
      if (!l1 && !l2 && !sum) return null;

      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }

      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
      let result = new Node(sum % 10);
      sum = sum > 9 ? 1 : 0;
      result.next = recursiveHelper(l1, l2, sum);
      return result;
    }

    return recursiveHelper(l1, l2);
  }
}

let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

let result = new Solution().addTwoNumsIterative(l1, l2);

console.log("iterative");
while (result) {
  console.log(result.val);
  result = result.next;
}

let l3 = new Node(2);
l3.next = new Node(4);
l3.next.next = new Node(3);

let l4 = new Node(5);
l4.next = new Node(6);
l4.next.next = new Node(4);

let result2 = new Solution().addTwoNumsRecursive(l3, l4);

console.log("recursive");
while (result2) {
  console.log(result2.val);
  result2 = result2.next;
}
