problemUrl = `https://leetcode.com/problems/zigzag-conversion/`



problemStatement = `
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
    

    Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

    Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

    Example 3:
    Input: s = "A", numRows = 1
    Output: "A"

    Constraints:

    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000
`

// solution

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let mat = []
    for (let i = 0; i<numRows; i++){
        mat.push([])
    }
    let r = 0; 
    let c = 0;
    let i = 0

    while(i < s.length){
        while (r < numRows){
            mat[r++][c] = s[i++]
        }
        
        r  = r==1? 0 : r-=2
        c++

        while(r > 0){
            mat[r--][c++] = s[i++]
        }
    }
 
    let ans = ''
    
    for (let i = 0; i<numRows; i++){
        for(let j =0;j< mat[i].length; j++){
            if(mat[i][j]) ans+= mat[i][j]
        }
    }
   return ans
};