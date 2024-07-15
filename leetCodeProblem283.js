problemUrl = `https://leetcode.com/problems/move-zeroes/`

problemStateement = `
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

    Example 2:
    Input: nums = [0]
    Output: [0]
    

    Constraints:
    1 <= nums.length <= 104
    -2^31 <= nums[i] <= 2^31 - 1
`

// solution

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  
    let n = nums.length
   let  t = nums.filter(el=> el).length
      let el = 0;
      for(let i = 0; i<n; i++){
          if(nums[i]!= 0){
              nums[el++] = nums[i]
          }
      }
      
      for(let i = t; i<n; i++){
          nums[i] = 0
      }
  };