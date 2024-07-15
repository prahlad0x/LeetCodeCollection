problemUrl = `https://leetcode.com/problems/greatest-common-divisor-of-strings/`

problemStatement = `
    For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

    

    
    Example 1:
    Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"
    
    Example 2:
    Input: str1 = "ABABAB", str2 = "ABAB"
    Output: "AB"
    
    Example 3:
    Input: str1 = "LEET", str2 = "CODE"
    Output: ""
    

    Constraints:
    1 <= str1.length, str2.length <= 1000
    str1 and str2 consist of English uppercase letters.
`


// solution

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 != str2+str1) return ""

    if(str1 == str2) return str2
    if(str1.length < str2.length) {
        return gcdOfStrings(str2.substring(str1.length), str1)
    }
    else{
        return gcdOfStrings(str1.substring(str2.length), str2)
    }
};