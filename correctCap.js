function correctCap(str) {
    //check if first character is uppercase
    //change to false if that changes
    let allCaps = str[0].toUpperCase() === str[0];
    for (let i = 1; i < str.length; i++) {
        //if character and allCaps is false return false
        if(str[i].toUpperCase() != str[i]) allCaps = false;
        if(str[i].toUpperCase() === str[i] && allCaps === false) return false;
    }
    return true;
}

console.log("expect: true", correctCap("USA"))
console.log("expect: true", correctCap("Calvin"))
console.log("expect: false", correctCap("compUter"))
console.log("expect: true", correctCap("coding"))
console.log("expect: true", correctCap("McCrae"))