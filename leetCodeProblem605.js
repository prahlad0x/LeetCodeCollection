problemUrl = `https://leetcode.com/problems/can-place-flowers/`

problemStatement `
    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    
    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true
    
    Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false
        
    Constraints:
    1 <= flowerbed.length <= 2 * 10^4
    flowerbed[i] is 0 or 1.
    There are no two adjacent flowers in flowerbed.
    0 <= n <= flowerbed.length
`

// solution 

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length ==1 && flowerbed[0]==0){
        n--
    }
    for(let  i=0; i<flowerbed.length; i++){
        if(i == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0 ) {
            n-- 
            flowerbed [i] = 1
        }
        else if(i == flowerbed.length-1 && flowerbed[i] == 0 && flowerbed[i-1] == 0){
             n-- 
            flowerbed [i] = 1
        }
        else if(flowerbed[i] == 0 && flowerbed[i+1] == 0 && flowerbed[i-1] == 0) {
             n-- 
            flowerbed [i] = 1
        }
    }

    return n<= 0? true : false
};