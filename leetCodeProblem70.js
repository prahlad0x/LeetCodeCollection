problemUrl = `https://leetcode.com/problems/climbing-stairs/`


problemStatement = `
    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
    

    Constraints:
    1 <= n <= 45
`


// solution


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n).fill(0)
    function fun(n){
    if(n < 0 )return 0
    if(n==0) return 1
    if(dp[n]) return dp[n]
    dp[n] = fun(n-1) + fun(n-2)
    return dp[n]
    }
    fun(n)
    return dp[n]
};