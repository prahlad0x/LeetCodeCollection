problemUrl = `https://leetcode.com/problems/contains-duplicate/`


problemStatement = `
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
`


// solution


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let o = {}
    for(let i =0; i<nums.length; i++){
        if(!o[nums[i]]){
            o[nums[i]] = 1
        }else return true
    }
    return false
};