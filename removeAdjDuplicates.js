/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
     let result = [];
     for (let i = 0; i < s.length; i++) {
         if(result[result.length - 1] === s[i]) {
             result.pop()
         } else {
            result.push(s[i]);
         }
     }
    return result;
};

console.log("expect: 'ca'", removeDuplicates("abbaca"))
console.log("expect: 'ay'", removeDuplicates("azxxzy"))