problemUrl = `https://leetcode.com/problems/swap-nodes-in-pairs/`



problemStatement = `
    Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

    

    Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]

    Example 2:
    Input: head = []
    Output: []
    
    Example 3:
    Input: head = [1]
    Output: [1]
    

    Constraints:

    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
   
    if(!head || !head.next) return head

    let curr = new ListNode(0)
    curr.next = head
    let temp = curr

    while(head && head.next){
      let  next  = head.next.next

      let f = head
      let s  = head.next

      temp.next = s;
      s.next = f;
      f.next = next
      
      temp = f
      head = next

    }

    return curr.next
};