problemUrl = `https://leetcode.com/problems/guess-number-higher-or-lower/`

problemStatement = `
    We are playing the Guess Game. The game is as follows:

    I pick a number from 1 to n. You have to guess which number I picked.

    Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

    You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).
    Return the number that I picked.

    Example 1:
    Input: n = 10, pick = 6
    Output: 6

    Example 2:
    Input: n = 1, pick = 1
    Output: 1
    
    Example 3:
    Input: n = 2, pick = 1
    Output: 1
    

    Constraints:

    1 <= n <= 2^31 - 1
    1 <= pick <= n
`

// solution

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 0; 
    let h = n;
 
    while(l<=h){
        let num = Math.floor((l+h)/2)
        let  x = guess(num)
        if(x==0) return num
        else if(x == 1){
            l= num +1
        }
        else {
            h = num -1
        }
    }

};