problemUrl = `https://leetcode.com/problems/longest-substring-without-repeating-characters/description/`


problemStatement = `
    Given a string s, find the length of the longest 
    substring
    without repeating characters.

    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    

    Constraints:

    0 <= s.length <= 5 * 10^4
    s consists of English letters, digits, symbols and spaces.
`


// solution


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let j = 0;
    let obj = {}
    let n = s.length
    for(let i = 0; i<n; i++){
        while(!obj[s[j]] && j < n){
            obj[s[j]] = 1;
            j++
        }

        max = Math.max(j-i, max)
        delete obj[s[i]]
    }

    return max
};