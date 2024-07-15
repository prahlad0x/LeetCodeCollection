problemUrl = `https://leetcode.com/problems/reverse-nodes-in-k-group/`



problemStatement = `
    Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
    k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
    You may not alter the values in the list's nodes, only nodes themselves may be changed.
    

    Example 1:
    Input: head = [1,2,3,4,5], k = 2
    Output: [2,1,4,3,5]
    
    
    Example 2:
    Input: head = [1,2,3,4,5], k = 3
    Output: [3,2,1,4,5]
    
    Constraints:
    The number of nodes in the list is n.
    1 <= k <= n <= 5000
    0 <= Node.val <= 1000
    

    Follow-up: Can you solve the problem in O(1) extra memory space?
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let arr = []
    
    while(head){
        arr.push(head.val)
        head = head.next
    }    
    
    let n = arr.length-(arr.length%k);
    for(let i = 0; i < n; i+= k){
        let l = i
        let r = i+k-1
        while(l<r){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }

    head = new ListNode(arr[0])
    let temp = head
    for(let i = 1; i<arr.length; i++){
        let t = new ListNode(arr[i])
        temp.next = t
        temp = t
    }

    return head
};