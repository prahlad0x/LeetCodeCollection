problemUrl = `https://leetcode.com/problems/valid-parenthesis-string`

problemStatement = `
    Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

    The following rules define a valid string:

    Any left parenthesis '(' must have a corresponding right parenthesis ')'.
    Any right parenthesis ')' must have a corresponding left parenthesis '('.
    Left parenthesis '(' must go before the corresponding right parenthesis ')'.
    '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "(*)"
    Output: true

    Example 3:
    Input: s = "(*))"
    Output: true
    

    Constraints:
    1 <= s.length <= 100
    s[i] is '(', ')' or '*'.
`


// solutions 

// first one

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

    let o = 0
    let c = 0

    for (let i = 0; i<s.length; i++){
        if(s[i] == "*" || s[i] == "("){
            o++
        }else{
            o--
        }
        if(o<0) break;
    }

    for (let i = s.length-1; i>= 0; i--){
        if(s[i] == "*" || s[i] == ")"){
            c++
        }else{
            c--
        }
        if(c < 0) break;
    }
    
    return (c>=0 && o>=0) 
};


// second One


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

    let o = 0
    let c = 0
    let l = s.length-1
    for (let i = 0; i<=l; i++){
        if(s[i] == "*" || s[i] == "(") o++
        else o--
        if(s[l-i] == "*" || s[l-i] ==")") c++
        else c--

        if( o<0 || c<0) return false
    }
    
    return true
};