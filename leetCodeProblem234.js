problemUrl = `https://leetcode.com/problems/palindrome-linked-list/`


problemStatement = `
    Given the head of a singly linked list, return true if it is a 
    palindrome
    or false otherwise.

    
    Example 1:
    Input: head = [1,2,2,1]
    Output: true
    
    Example 2:
    Input: head = [1,2]
    Output: false
    

    Constraints:
    The number of nodes in the list is in the range [1, 10^5].
    0 <= Node.val <= 9
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [  ]
    if(!head.next) return true
    while(head){
        arr.push(head.val)
        head = head.next
    }

    for(let i = 0; i<Math.floor(arr.length/2); i++){
        if(arr[i] != arr[arr.length-1-i]) return false
    }

     return true
};