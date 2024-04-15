problemUrl = `https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/`

problemStatemet =` 
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
    
    Constraints:
    1 <= haystack.length, needle.length <= 10^4
    haystack and needle consist of only lowercase English characters.
`


// solution

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack == needle) return 0
    let l = haystack.length 
    let nl = needle.length
    haystack = haystack.split("")

    for(let i =0; i<l ;i++){

        if(haystack[i] ==  needle[0]){
          
           let temp = [...haystack]
            let  x = temp.splice(i,nl).join("")
        
            if(x == needle) return i
        }
    }
    return -1
};