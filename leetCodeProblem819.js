problemUrl = `https://leetcode.com/problems/most-common-word/description/`

problemStatement =`
    Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

    The words in paragraph are case-insensitive and the answer should be returned in lowercase.

    Example 1:
    Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
    Output: "ball"
    Explanation: 
    "hit" occurs 3 times, but it is a banned word.
    "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
    Note that words in the paragraph are not case sensitive,
    that punctuation is ignored (even if adjacent to words, such as "ball,"), 
    and that "hit" isn't the answer even though it occurs more because it is banned.

    Example 2:
    Input: paragraph = "a.", banned = []
    Output: "a"
    

    Constraints:
    1 <= paragraph.length <= 1000
    paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
    0 <= banned.length <= 100
    1 <= banned[i].length <= 10
    banned[i] consists of only lowercase English letters.
`

// solution

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let str = "~!@#$%^&*()_-+={[><.,/?|:;']}"
   
    let obj = {}

    paragraph = paragraph.split("")

    for(let i = 0; i<str.length; i++){
        obj[str[i]]  = 1
    }

    for(let i =0; i<paragraph.length; i++){
        if(obj[paragraph[i]]) paragraph[i]= " "
    }

    paragraph = paragraph.join("").split(" ")

    obj ={}

    // console.log(paragraph)
    for(let i = 0; i<paragraph.length; i++){
        if(paragraph[i]!= " " && paragraph[i]){
            let x = paragraph[i].toLowerCase()
            if(obj[x]) obj[x] +=1
            else obj[x] = 1
        }
    }

    let ans = ["", 0]
    for(let i in obj){
        if(!banned.includes(i) && ans[1] < obj[i]){
            ans[0] = i
            ans[1] = obj[i]
        }
    }

   return ans[0]
};