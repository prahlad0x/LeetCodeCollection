problemUrl = `https://leetcode.com/problems/reverse-vowels-of-a-string/`

problemStatement = `
    Given a string s, reverse only all the vowels in the string and return it.

    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


    Example 1:
    Input: s = "hello"
    Output: "holle"

    Example 2:
    Input: s = "leetcode"
    Output: "leotcede"
    

    Constraints:
    1 <= s.length <= 3 * 10^5
    s consist of printable ASCII characters.
`

// solution 

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let temp = []

    let obj = { "a":1, "e":1, "i" : 1, "o":1, "u":1}

    for(let i = 0 ; i<s.length; i++){
        if(obj[s[i].toLowerCase()]){
            temp.push([s[i]])
        }
    }

    temp = temp.reverse()

    s = s.split("")
    let l = 0;
    for(let i = 0; i<s.length; i++){
        if(obj[s[i].toLowerCase()]){
            s[i] = temp[l++]
        }
    }

    return s.join("")

};