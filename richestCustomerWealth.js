/**
 * @param {number[][]} accounts
 * @return {number}
 */

var sumArr = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            sum += arr[i]
        }
    }
    return sum;
}

 var maximumWealth = function(accounts) {
     let result = {};
     accounts.forEach(element => {
         result[sumArr(element)] = accounts.indexOf(element)
     });
     //properties in the object are sorted automatically
    return Object.keys(result).pop();
};

console.log("expect: 6", maximumWealth([[1,2,1],[3,1,1]]))

// time O(n^2) space O(n)
// var maximumWealth = function(accounts) {
//     return Math.max(...accounts.map(account => 
//         account.reduce((accumulator, current) => accumulator + current, 0)
//     ))
// };