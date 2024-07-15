problemUrl = `https://leetcode.com/problems/largest-substring-between-two-equal-characters/`

problemStatement = `
    Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

    A substring is a contiguous sequence of characters within a string.



    Example 1:
    Input: s = "aa"
    Output: 0
    Explanation: The optimal substring here is an empty substring between the two 'a's.
    
    Example 2:
    Input: s = "abca"
    Output: 2
    Explanation: The optimal substring here is "bc".

    Example 3:
    Input: s = "cbzxy"
    Output: -1
    Explanation: There are no characters that appear twice in s.
    

    Constraints:
    1 <= s.length <= 300
    s contains only lowercase English letters.
`


// solution 

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    let max = 0;
    let f = false
    let n = s.length
    for(let i =0 ; i<n-1; i++){
        for(let j = i+1; j<n; j++){
            if(s[i] == s[j]){
                f = true
                max = Math.max(max, j-i-1)
            }
        }
    }

    return f? max : -1
};

