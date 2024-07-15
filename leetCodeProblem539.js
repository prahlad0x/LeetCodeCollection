problemUrl = `https://leetcode.com/problems/minimum-time-difference/`


problemStatement = `
    Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
    

    Example 1:
    Input: timePoints = ["23:59","00:00"]
    Output: 1

    Example 2:
    Input: timePoints = ["00:00","23:59","00:00"]
    Output: 0
    

    Constraints:
    2 <= timePoints.length <= 2 * 10^4
    timePoints[i] is in the format "HH:MM".
`



// solution

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(arr) {
    
    arr = arr.map(el=> {
        el = el.split(":")
        return +el[0]*60 + +el[1]
    }).sort()

       let minDiff = 1440;
       for(let i = 0; i<arr.length; i++){
           let temp = 1440;
           for(let j =i+1;j<arr.length;j++){
               if(arr[i] == arr[j]) return 0
               else if(arr[i] > 720){
                   let x =(1440-arr[i])  + arr[j]

                   let y = Math.abs(arr[i] - arr[j])
                   let min = Math.min(x, y)
                   temp = Math.min(temp, min)
               }
               else if(arr[i]== 0  ){
                   let x = Math.abs(arr[j]- arr[i])
                   let y = Math.abs(1440 - arr[j])
                   let min = Math.min(x, y)
                   temp = Math.min(temp, min)

               }
               else{
                   let x = Math.abs(arr[j]-arr[i])
                   temp = Math.min(temp, x)
               }
               console.log(temp)
           }
            minDiff = Math.min(temp, minDiff)
       }
       return minDiff
   
};