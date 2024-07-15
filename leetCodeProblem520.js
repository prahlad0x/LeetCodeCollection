problemUrl = `https://leetcode.com/problems/detect-capital/`

problemStatement = `
    We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".
    Given a string word, return true if the usage of capitals in it is right.

    
    Example 1:
    Input: word = "USA"
    Output: true
    
    Example 2:
    Input: word = "FlaG"
    Output: false
    
    Constraints:
    1 <= word.length <= 100
    word consists of lowercase and uppercase English letters.
`

// solution 


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) { 
    let allCaps = 0;
    let allSm = 0;
    for(let i = 0; i<word.length; i++){
        if(/[A-Z]/.test(word[i])) allCaps++
        else allSm++
    }
    if(allSm == word.length || allCaps == word.length) return true
    if(allCaps > 1 && allSm > 0) return false
    if(allCaps == 1) return (/[A-Z]/.test(word[0]))? true : false 
};