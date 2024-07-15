problemUrl = `https://leetcode.com/problems/single-element-in-a-sorted-array/`



problemStatement = `
    You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

    Return the single element that appears only once.

    Your solution must run in O(log n) time and O(1) space.

    


    Example 1:
    Input: nums = [1,1,2,3,3,4,4,8,8]
    Output: 2

    Example 2:
    Input: nums = [3,3,7,7,10,11,11]
    Output: 10
    

    Constraints:

    1 <= nums.length <= 10^5
    0 <= nums[i] <= 10^5
`


// solution


/**
 * @param {number[]} arr
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l = 0; 
    let r = arr.length-1
    if(arr.length == 1) return arr[0]
    while(l<r){
        if(arr[l] == arr[l+1]){
            l+=2
        }else{
            return arr[l]
        }
        if(arr[r] == arr[r-1]){
            r-=2
        }else{
            return arr[r]
        }
    }
    return arr[l]
};