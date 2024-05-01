problemUrl = `https://leetcode.com/problems/valid-palindrome/`


problemStatement  = `
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.



    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
    

    Constraints:
    1 <= s.length <= 2 * 10^5
    s consists only of printable ASCII characters.
`

// solution


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.split("")
    let n = s.length
    if(n== 0|| n == 1  ) return true

    for(let i = 0; i<n; i++){
        if(/^[a-zA-Z]+$/.test(s[i])) s[i] = s[i].toLowerCase()
        else if(/^[0-9]+$/.test(s[i])) continue
        else s[i] = ""
    }

    s = s.join("")
    n = s.length
    if(n == 0) return  true

    for(let i = 0; i<Math.floor(n/2); i++){
        if(s[i] != s[n-1-i]) return false
    }    

    return true
};