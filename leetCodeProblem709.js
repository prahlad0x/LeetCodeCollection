problemUrl = `https://leetcode.com/problems/to-lower-case/`

problemStatement = `
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.


Example 1:
Input: s = "Hello"
Output: "hello"

Example 2:
Input: s = "here"
Output: "here"

Example 3:
Input: s = "LOVELY"
Output: "lovely"
 
Constraints:
1 <= s.length <= 100
s consists of printable ASCII characters.
`

// solution

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let obj = {
        "A" : "a",
        "B" : "b",
        "C" : "c",
        "D" : "d",
        "E" : "e",
        "F" : "f",
        "G" : "g", 
        "H" : "h",
        "I" : "i",
        "J" : "j",
        "K" : "k",
        "L" : "l",
        "M" : "m",
        "N" : "n",
        "O" : "o",
        "P" : "p",
        "Q" : "q",
        "R" : "r",
        "S" : "s",
        "T" : "t",
        "U" : "u",
        "V" : "v",
        "W" : "w",
        "X" : "x",
        "Y" : "y",
        "Z" : "z"
    }

    s = s.split('')

    for(let i = 0; i<s.length; i++){
        if(obj[s[i]]) s[i] = obj[s[i]]
    }


    return s.join("")
};
