class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Solution {
  
   //time complexity is O(n+m)
   //space complexity is O(max(n,m)), where n and m are the lengths of the two lists
    addTwoNumsIterative2(l1, l2) {
      let result = new Node(0);
      let curr = result;
  
      while (l1 || l2) {
        let sum = 0;
        if (l1) {
          sum += l1.val;
          l1 = l1.next;
        }
        if (l2) {
          sum += l2.val;
          l2 = l2.next;
        }
        let carry= sum > 9 ? 1 : 0;
        curr.val += carry;
        curr.next = new Node(sum % 10);
        curr = curr.next;    
      }
      return result.val ? result : result.next;
    }
  }
  
  let l1 = new Node(5);
  l1.next = new Node(6);
  l1.next.next = new Node(8);
  
  let l2 = new Node(5);
  l2.next = new Node(2);
  l2.next.next = new Node(2);
  
  let result = new Solution().addTwoNumsIterative2(l1, l2);
  
  console.log("iterative");
  while (result) {
    console.log(result.val);
    result = result.next;
  }
  

  