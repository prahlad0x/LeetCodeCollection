problemUrl = `https://leetcode.com/problems/partition-list/`


problemStatement = `
    Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

    You should preserve the original relative order of the nodes in each of the two partitions.

    
    Example 1:
    Input: head = [1,4,3,2,5,2], x = 3
    Output: [1,2,2,4,3,5]

    Example 2:
    Input: head = [2,1], x = 2
    Output: [1,2]
    

    Constraints:

    The number of nodes in the list is in the range [0, 200].
    -100 <= Node.val <= 100
    -200 <= x <= 200
`


// solution 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

var partition = function(head, x) {
  let  o = {}
  let arr = []
  let a = []

  if(!head ) return head
  let crr = head
  while(crr){
    arr.push(crr.val)
    crr = crr.next
  }

  for(let i = 0; i<arr.length; i++){
    if(arr[i] < x){
      a.push(arr[i])
      o[i] = 1
    }
  }

  for(let i = 0; i<arr.length; i++){
    if(!o[i]){
      a.push(arr[i])
    }
  }


  let n = new ListNode(a[0])
  let c = n

  for(let i = 1; i<a.length; i++){
    let x = new ListNode(a[i])
    c.next = x
    c = x
  }
  
  return n
};
