problemUrl = `https://leetcode.com/problems/reverse-integer/`



    problemStatement = `
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    

    Example 1:
    Input: x = 123
    Output: 321

    Example 2:
    Input: x = -123
    Output: -321
    
    Example 3:
    Input: x = 120
    Output: 21
    

    Constraints:
    -2^31 <= x <= 2^31 - 1
`


// solution

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x%10 == 0? x/10 : x

    x = x +"";
    x = x.split("")
    isNegative = false
    if(x[0] =='-'){
        x.shift()
        isNegative = true
    }

    x = x.reverse()
    // x = isNegative? x.unshift('-'): x
    x = x.join("")
    x = isNegative? '-'+x : x
    if((x < -2147483648 ) || (x > 2**31 -1)) return 0
    return x

};