/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//return number, not null
var returnOnlyNumber = function(num) {
    return num ? num : 0;
}

 var addTwoNumbers = function(l1, l2) {
     //remainder, index on which to add it
    let remainder = [0, 0];

    //result list
    let result = [];

    //set index with the largest length
    let largest = l1.length > l2.length ? l1.length : l2.length;

    //loop as many times as the longest list
    for (let i = 0; i < largest; i++) {
        //if added number is bigger than 9, turn number to string, add the second, put the first in remainder
        let sum = returnOnlyNumber(l1[i]) + returnOnlyNumber(l2[i]);

        //sum into string
        let sumStr = sum + "";
        if(sumStr.length > 1) {
            result.push(parseInt(sumStr[1]))
            if(i == remainder[1]) {
                result[result.length - 1] += remainder[0];
                remainder = [0, 0];
            }

            //set remainder with value to add
            remainder[0] = parseInt(sumStr[0])

            //add it next iteration
            remainder[1] = i + 1;
            
        } else {
            result.push(sum)
        }
    }

    //if remainder index is less than largest sum it
    if(remainder[0] > 0 && remainder[1] < largest) {
        result[result.length - 1] += remainder[0]
    } else if(remainder[0] > 0) {
        //if remainder index is more than largest push it
        result.push(remainder[0])
    }
    return result[0];

    //add numbers at index together, storing their remainder, and applying it to the next addition
};

console.log("expect: [7, 0, 8]", addTwoNumbers([2,4,3], [5,6,4]))
console.log("expect: [2, 5, 7, 1]", addTwoNumbers([6,7,8], [6,7,8]))
console.log("expect: [0]", addTwoNumbers([0],[0]))
console.log("expect: [8,9,9,9,0,0,0,1]", addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))