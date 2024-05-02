problemUrl = `https://leetcode.com/problems/happy-number/`

problemStatement =  `
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

    Example 1:
    Input: n = 19
    Output: true
    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1

    Example 2:
    Input: n = 2
    Output: false
    

    Constraints:
    1 <= n <= 2^31 - 1
`

// solution

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function hello(nums){

        if(nums == 1) return true
        if(nums <= 9) return false ;
        
        nums = nums.split("").map(Number)
        nums = nums.map(el=> el**2)
        
        nums = nums.reduce((a,c)=> a+c)
        
       return  hello(nums.toString())
    }

    if(n > 9){
        n = n.toString()
        n = n.split("").map(el=> (+el)**2)
        n = n.reduce((a,c)=> a+c)
        
        return n>9? hello(n.toString()) : hello((n**2).toString())
    }else{
        return hello((n**2).toString())
    }
};