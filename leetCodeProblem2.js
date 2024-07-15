problemUrl = `https://leetcode.com/problems/add-two-numbers/`


problemStatement = `
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

        
    Example 1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

    Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
    

    Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

var addTwoNumbers = function(l1, l2) {

    let a = []
    let  b = []
    let curr = l1
    let c = l2
    while(curr ){
        a.push(curr.val)
        curr = curr.next
    }
    while( c){
        b.push(c.val)
        c = c.next
    }
    
    let carr = 0;
    
    let i = 0; 
    let j = 0;
    let ans = []
    while(i < a.length && j < b.length){
        let x  = a[i] + b[j] + carr
        carr = Math.floor(x/10)   
        x = x %10     
        ans.push(x)
        i++
        j++
    }

    while(i< a.length){
        let x = a[i] + carr
        carr = Math.floor(x/10)   
        x = x%10
        ans.push(x)
        i++
    }

    while(j < b.length){
        let x = b[j] + carr
        carr = Math.floor(x/10)   
        x = x%10
        ans.push(x) 
        j++
    }

    if(carr > 0){
        ans.push(carr)
    }
    // console.log(a,b,ans)
   

    let x = new ListNode(ans[0])
    let y = x
    for(let i = 1; i<ans.length; i++){
        let d = new ListNode(ans[i])
        y.next = d
        y = d
    }

 return x
};