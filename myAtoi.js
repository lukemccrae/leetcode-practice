/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
     let sign = 1;
     let result = [];
     for (let i = 0; i < s.length; i++) {
         if(s[i] === "-") sign = sign * -1;
         if(s[i] === " " || isNaN(parseInt(s[i]))) {
             result.push(s[i])
         } else {
             return 0;
         }
     }
    return result.join("")
    // return 2;
};

console.log("expect: '0'", myAtoi("words and     -987"))