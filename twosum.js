function twoSum(arr, k) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let diff = k - arr[i];
        if(diff + '' in obj) {
            return [obj[diff], i]
        } else {
            obj[arr[i]] = i
        }
    }
}

// console.log("expect: [1,2]", twoSum([1, 3, 7, 2], 10))
// console.log("expect: [1,2]", twoSum([3,2,4], 6))
// console.log("expect: [1,4]]", twoSum([4, 2, 6, 5, 2], 4))
console.log("expect: [0,1]]", twoSum([3,3], 6))
console.log("expect: [0,1]]", twoSum([2,7,11,15], 9))