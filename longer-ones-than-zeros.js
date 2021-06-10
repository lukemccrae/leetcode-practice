/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
     if(s === "1") return true
     if(s === "0") return false;

    //store counts for 0 and 1
    let count = [0, 0];

    //set current number as the first in the string
    let runStart = 0;

    let runLen = 1;

    //loop through s
    for (let i = 1; i < s.length + 1; i++) {
        //log length of running digits
        if(s[i] === s[runStart]) {
            runLen ++;
        } else {
            if(runLen > count[s[runStart]]) {
                count[s[runStart]] = runLen;
            }
            runStart = i;
            runLen = 1;
        }
    }
    return count[1] > count[0];;
};

console.log("expect: true", checkZeroOnes("1101"))
console.log("expect: false", checkZeroOnes("111000"))