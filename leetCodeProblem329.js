problemUrl = `https://leetcode.com/problems/longest-increasing-path-in-a-matrix/`



problemStatement = `
    Given an m x n integers matrix, return the length of the longest increasing path in matrix.

    From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

    

    Example 1:
    Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
    Output: 4
    Explanation: The longest increasing path is [1, 2, 6, 9].

    Example 2:
    Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
    Output: 4
    Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

    Example 3:
    Input: matrix = [[1]]
    Output: 1
    

    Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 200
    0 <= matrix[i][j] <= 2^31 - 1
`



// solution


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let r = matrix.length
    let c = matrix[0].length

    let directions = [[-1,0], [0,1], [1,0], [0,-1]]

    let dp = new Array(r).fill(0).map(el=> {return new Array(c).fill(0)})
    

    let ans = 0;

    for(let i = 0; i<r; i++){
        for(let j = 0; j<c; j++){
            ans = Math.max(ans, lip(i,j))
        }
    }


    function lip(row, col){
        if(dp[row][col]!= 0) return dp[row][col]

        let maxlen = 1;

        for(let d of directions){
            let nr = d[0] + row
            let nc = d[1] + col

            if(nr < r && nr >=0 && nc >=0 && nc < c && matrix[row][col] > matrix[nr][nc]){
                let nlen = 1+lip(nr,nc)
                maxlen = Math.max(nlen,maxlen)
            }
        }
        dp[row][col] = maxlen
        return maxlen
    }


    return ans 
};