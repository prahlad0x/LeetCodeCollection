problemUrl = `https://leetcode.com/problems/median-of-two-sorted-arrays/`


problemStatement = `
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    

    Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -10^6 <= nums1[i], nums2[i] <= 10^6
`


// solution


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(a, b) {

    if(a.length == 0){
        let x = Math.floor(b.length/2)
        if(b.length%2==0) { 
            return ((b[x]+b[x-1])/2).toFixed(5)
        }else return b[x].toFixed(5)
    }
    if(b.length == 0){
        let x = Math.floor(a.length/2)
        if(a.length%2==0) { 
            return ((a[x]+a[x-1])/2).toFixed(5)
        }else{
            return a[x].toFixed(5)
        }
    }
    let m = a.length+b.length
    let n = Math.floor(m/2)

    let f;
    let l;
    let c = 0
    let i = 0; 
    let j = 0;

    while(i<a.length && j < b.length){
        if(c > n) break;
        
        if(a[i] < b[j]){
           if(c==n)  f = a[i]
           if(c == n-1 && m%2==0) l = a[i] 
           i++
        }
        else{
           if(c==n)  f = b[j]
           if(c == n-1 && m%2==0) l = b[j] 
           j++
        }
        
        c++
    }

    while(i < a.length){
        if(c==n)  f = a[i]
        if(c == n-1 && m%2==0) l = a[i] 
        i++
        c++
    }
    while(j < b.length){
        if(c==n)  f = b[j]
        if(c == n-1 && m%2==0) l = b[j] 
        j++
        c++
    }
    if(!l) return f.toFixed(5)
    else if(f && l){
         return ((f+l)/2).toFixed(5)
    }else{
        let x = 0
         return x.toFixed(5)
    }
};