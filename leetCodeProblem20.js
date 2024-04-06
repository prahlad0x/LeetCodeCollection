problemUrl = `https://leetcode.com/problems/valid-parentheses/`


problemStatement = `
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    
    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true

    Example 3:
    Input: s = "(]"
    Output: false
    
    Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
`


// solution 

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let st = []
    st.push(s[0])
    for(let i = 1; i<s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            st.push(s[i])
        }else{
            if(!st.length) return false
            let last = st[st.length-1]
            if(last == s[i]) return false
            if(s[i] == ")" && (last == "{" || last =="[")) return false
            else if(s[i] == "}" && (last == "(" || last =="[")) return false
            else if(s[i] == "]" && (last == "{" || last =="(")) return false
            else st.pop()
        }
    }

    return (st.length != 0)? false : true
};