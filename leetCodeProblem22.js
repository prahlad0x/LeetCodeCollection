problemUrl = `https://leetcode.com/problems/generate-parentheses/`


problemStatement = `
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


    Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

    Example 2:
    Input: n = 1
    Output: ["()"]
    

    Constraints:

    1 <= n <= 8
`


// solution 


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    
    function check(str){
        let st = []
        st.push(str[0])
        for(let i = 1; i<2*n; i++){
            if(str[i] == "(") st.push(str[i])
            else{
                if(st.length == 0) return false
                else{
                    st.pop()
                }
            }
        }
        
        if(st.length == 0) {
            return true
        }
        else return false
    }

    function generate(o, c, s) {
        if (o > n || c > n) return;
        if(s.length > n*2) return
        if (s.length == n*2) {
           if(check(s)) ans.push(s)
        }

        generate(o + 1, c, s + "(");
        generate(o, c + 1, s + ")");
    }

    generate(1, 0, "(");
   return ans
};