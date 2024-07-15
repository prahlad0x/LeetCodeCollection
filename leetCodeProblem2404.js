problemUrl = `https://leetcode.com/problems/most-frequent-even-element/`


problemStatement = `
    Given an integer array nums, return the most frequent even element.

    If there is a tie, return the smallest one. If there is no such element, return -1.

    
    Example 1:
    Input: nums = [0,1,2,2,4,4,1]
    Output: 2
    Explanation:
    The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
    We return the smallest one, which is 2.
    
    Example 2:
    Input: nums = [4,4,4,9,2,4]
    Output: 4
    Explanation: 4 is the even element appears the most.
    
    Example 3:
    Input: nums = [29,47,21,41,13,37,25,7]
    Output: -1
    Explanation: There is no even element.
    

    Constraints:
    1 <= nums.length <= 2000
    0 <= nums[i] <= 10^5
`


// solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let obj= {}
    for(let i = 0; i<nums.length; i++){
      if(nums[i]%2== 0){
        if(obj[nums[i]]) obj[nums[i]]++
        else obj[nums[i]]=1
      }
    }

    let max = Math.max(...Object.values(obj)) || 0
    let el = []

    for(let i in obj){
        if(obj[i] == max) el.push(+i)
    }


    el = el.sort((a,b)=> a-b)
    return el.length?  el[0] : -1
};