problemUrl = `https://leetcode.com/problems/merge-k-sorted-lists/`


problemStatement = `
    You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

    Merge all the linked-lists into one sorted linked-list and return it. 


    Example 1:
    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6

    Example 2:
    Input: lists = []
    Output: []

    Example 3:
    Input: lists = [[]]
    Output: []
    

    Constraints:

    k == lists.length
    0 <= k <= 10^4
    0 <= lists[i].length <= 500
    -10^4 <= lists[i][j] <= 10^4
    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 10^4.
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0) return null
    for(let i = 1; i< lists.length; i++){
        // console.log(list)
        let x = add(lists[i], lists[i-1])
       lists[i] = x
    }


    
    function add(list1, list2){
        let list = new ListNode(0)
        let c = list;
        while(list1 && list2){
            if(list1.val < list2.val){
            c.next = list1
            list1 = list1.next
            }else{
            c.next = list2
            list2 =  list2.next
            }

        c = c.next
        }

        if(list1) c.next = list1
        if(list2) c.next = list2
         return list.next
    }
    // console.log(lists)
     return lists[lists.length-1]
};