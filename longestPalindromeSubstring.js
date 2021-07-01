/**
 * @param {string}
 * @return {string}
 */

 var longestPalindrome = function(s) {
     if(s.length < 1 || s === null) return '';
     let longest = '';

     for (let i = 0; i < s.length; i++) {
         let oddPal = pal(s, i, i)
         let evenPal = pal(s, i - 1, i)
         if(oddPal.length > longest.length) {
             longest = oddPal
         }
         if(evenPal.length > longest.length) {
            longest = evenPal
        }
     }
     return longest;

};

var pal = function(s, l, r) {
    //keep track of position
    let i = 0;
    //loop as long as left isnt null and left equals right
    while(s[l - i] && s[l - i] === s[r + i]) {
        i++
    }
    //after loop, we arent in a palindrome anymore
    //decrement i and return sliced string containing palindrome
    i--;
    return s.slice(l - i, r + i + 1);
}

console.log("expect: bab", longestPalindrome("bbabbbad"))
console.log("expect: cccc", longestPalindrome("cccc"))
console.log("expect: ccc", longestPalindrome("ccc"))
console.log("expect: bb", longestPalindrome("cbbd"))
console.log("expect: abb", longestPalindrome("abb"))