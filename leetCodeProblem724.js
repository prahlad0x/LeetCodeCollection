problemUrl = `https://leetcode.com/problems/find-pivot-index/`

problemStatement= `
    Given an array of integers nums, calculate the pivot index of this array.

    The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

    If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

    Return the leftmost pivot index. If no such index exists, return -1.


    Example 1:
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11

    Example 2:
    Input: nums = [1,2,3]
    Output: -1
    Explanation:
    There is no index that satisfies the conditions in the problem statement.

    Example 3:
    Input: nums = [2,1,-1]
    Output: 0
    Explanation:
    The pivot index is 0.
    Left sum = 0 (no elements to the left of index 0)
    Right sum = nums[1] + nums[2] = 1 + -1 = 0
    

    Constraints:
    1 <= nums.length <= 10^4
    -1000 <= nums[i] <= 1000
    

    // Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/
`

// solution


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rs = nums.reduce((a,c)=> a+c)-nums[0]
    let ls = 0;
    let arr = []
    arr[0] = [ls, rs]
    let n = nums.length
    for(let i = 1; i<n; i++){
        ls = ls+nums[i-1]
        rs = rs-nums[i]
        arr[i] = [ls,rs]
    }
    
    for(let i = 0; i<n; i++){
        if(arr[i][0] == arr[i][1]) return i
    }
    return -1
};