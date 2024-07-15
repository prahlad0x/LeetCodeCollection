problemUrl = `https://leetcode.com/problems/longest-palindromic-substring/description/`



problemStatement = `
    Given a string s, return the longest 
    palindromic substring in s.

    Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

    Example 2:
    Input: s = "cbbd"
    Output: "bb"
    

    Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.
`

// solution

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let str = "";
    
    function check(s){
        let x = s.length
        for(let i = 0; i<Math.floor(s.length/2); i++){
        if(s[i] != s[x-1-i]) return false
        }
        return true
    }
    
    for (let i = 0; i< s.length;i++){
        let t = ''
        for(let j = i; j<s.length; j++){
            t+= s[j]
            x = t.length >= str.length? check(t): false
           if( x && str.length < t.length){
               str = t
           }
        }
    }
    return str
};