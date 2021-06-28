/**
 * @param {string}
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

     let result = 0;

     //initialize array to represent presence of characters in substring
     //initialize array with -1 for every possible ASCII char
     let indexTracker = Array(256).fill(-1);
     
     //pointer to beginnig of substring
     let i = 0;

     //increment second pointer through string
     for (let j = 0; j < s.length; j++) {
         //make i equal to the max of i or the stored char value
         //basically, if we find a duplicate char in our string, we store the value of the current substring,
         //and we move our starting pointer up one
        i = Math.max(i, indexTracker[s[j].charCodeAt(0)] + 1)

         //update result if we get a larger window
            //ending pointer minus starting pointer + 1 (to account for 0 index)
         result = Math.max(result, j - i + 1);

         //update index storing array with j for current char
         indexTracker[s[j].charCodeAt(0)] = j;
     }

     return result;
};

console.log("expect: 3", lengthOfLongestSubstring("abcabcbb"))
console.log("expect: 1", lengthOfLongestSubstring("bbbbb"), 1 == lengthOfLongestSubstring("bbbbb"))
console.log("expect: 3", lengthOfLongestSubstring("pwwkew"), 3 == lengthOfLongestSubstring("pwwkew"))
console.log("expect: 1", lengthOfLongestSubstring("c"), 1 == lengthOfLongestSubstring("c"))
console.log("expect: 2", lengthOfLongestSubstring("au"), 2 == lengthOfLongestSubstring("au"))
console.log("expect: 3", lengthOfLongestSubstring("abc"), 3 == lengthOfLongestSubstring("abc"))
console.log("expect: 2", lengthOfLongestSubstring("aab"), 2 == lengthOfLongestSubstring("aab"))
console.log("expect: 3", lengthOfLongestSubstring("dvdf"), 3 == lengthOfLongestSubstring("dvdf"))
console.log("expect: 6", lengthOfLongestSubstring("bbtablud"), 6 == lengthOfLongestSubstring("bbtablud"))
console.log("expect: 6", lengthOfLongestSubstring("wobgrovw"), 6 == lengthOfLongestSubstring("wobgrovw"))




// let obj = {};
// let countChar = {};
// let extra = 0;
// for (let i = 0; i < s.length; i++) {
//     //if character is not in countChar
//     if(!countChar[s[i]]) {
//        countChar[s[i]] = i;
//     } else {
//         obj[Object.keys(countChar).length] = true;
//         extra = i - countChar[s[i]] - 1;
//         countChar = {};
//         countChar[s[i]] = i;
//     }
// }

// if(Object.keys(obj).length < Math.round(s.length / 2)) {
//    obj[Object.keys(countChar).length] = true;
// }
// console.log(extra)

// let result = parseInt(Object.keys(obj)[Object.keys(obj).length - 1]);

// if(Object.keys(countChar).length < result) return result;
// return parseInt(Object.keys(obj)[Object.keys(obj).length - 1]) + extra;