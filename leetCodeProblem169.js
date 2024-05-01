problemUrl = `https://leetcode.com/problems/majority-element/`

problemStatement = `
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


    Example 1:
    Input: nums = [3,2,3]
    Output: 3

    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
    
    Constraints:
    n == nums.length
    1 <= n <= 5 * 10^4
    -10^9 <= nums[i] <= 10^9
    
    Follow-up: Could you solve the problem in linear time and in O(1) space?
`

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj= {}
    for(let i = 0; i<nums.length; i++){
      if(obj[nums[i]]) obj[nums[i]]++
      else obj[nums[i]]=1
    }

    let max =0;
    let el = ''

    for(let i in obj){
     if(max < obj[i]){
       el = i;
       max = obj[i]
     }
    }

    return el
};