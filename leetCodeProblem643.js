problemUrl = `https://leetcode.com/problems/maximum-average-subarray-i/`

problemStatement = `
    You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

    
    Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
    
    Example 2:
    Input: nums = [5], k = 1
    Output: 5.00000
    

    Constraints:
    n == nums.length
    1 <= k <= n <= 10^5
    -10^4 <= nums[i] <= 10^4
`


// solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let sum = 0;
    let ans = 0
    for(let i = 0; i<k; i++){
        sum += nums[i]
    }
    ans = sum/k

    let temp = sum

    for(let i = k; i<nums.length; i++){

        temp += nums[i] - nums[i-k]
        // console.log(sum, ans, temp)
        ans = Math.max(ans, temp/k)
    }

    return ans.toFixed(5)
};