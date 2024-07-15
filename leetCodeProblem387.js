problemUrl = `https://leetcode.com/problems/first-unique-character-in-a-string/`


problemStatement =  `
    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

    Example 1:
    Input: s = "leetcode"
    Output: 0

    Example 2:
    Input: s = "loveleetcode"
    Output: 2

    Example 3:
    Input: s = "aabb"
    Output: -1
    

    Constraints:
    1 <= s.length <= 10^5
    s consists of only lowercase English letters.
`


// solution 


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}

    for(let i = 0; i<s.length; i++){
        if(obj[s[i]]) obj[s[i]].count += 1
        else {
            obj[s[i]] = {}
            obj[s[i]].count = 1
            obj[s[i]].index = i
        }
    }

    obj = Object.values(obj).sort((a,b)=> a.index - b.index)
    
    for(let i = 0 ; i<obj.length; i++){

        if(obj[i].count == 1) return obj[i].index
    }

    return -1
    
};