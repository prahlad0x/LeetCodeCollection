problemUrl = `https://leetcode.com/problems/pascals-triangle/`

problemStatement = `
    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


    Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    Example 2:
    Input: numRows = 1
    Output: [[1]]
    
    Constraints:
    1 <= numRows <= 30
`

// solution

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
    
    let main = []

    for(let i = 0; i<n; i++){
        main[i] = new Array(i+1).fill(1)

        if(i > 1){
            for(let  j = 1; j<i; j++){
                main[i][j] = main[i-1][j-1] + main[i-1][j]
            }
        }
    }

   return main
};