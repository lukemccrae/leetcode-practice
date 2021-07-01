/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

 var convert = function(s, numRows) {
    let holder = []
    for (let i = 0; i < numRows; i++) {
        holder.push(Array(numRows))
    }
    if(numRows === 4) {
        for (let i = 0; i < s.length; i++) {
            //row 1 condition
            if(i === 0 || i % 6 === 0) {
                holder[0].push(s[i])
            }
            if(i != || i % 5 )
            
        }
    }
    if(numRows === 3) {

    }


};

console.log(convert("PAYPALISHIRING", 4))
console.log(17 % 5)