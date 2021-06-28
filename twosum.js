function twoSum(arr, k) {
    let result = false;
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let difference = k - arr[i];

        //this is the key for reducing time complexity
        

        if(difference + '' in hash) {
            return true;
        } else {
            hash[arr[i] +''] = arr[i];
        }
    }
    return result;
}

console.log("expect: true", twoSum([1, 3, 8, 2], 10))
console.log("expect: false", twoSum([3, 9, 13, 7], 8))
console.log("expect: true", twoSum([4, 2, 6, 5, 2], 4))