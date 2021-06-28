/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
     let addrSplit = address.split("")
     for (let i = 0; i < addrSplit.length; i++) {
         if(addrSplit[i] === ".") {
             addrSplit[i] = "[.]";
         }
     }
    return addrSplit.join("");
};

console.log("expect: 1[.]1[.]1[.]1", "got: ", defangIPaddr("1.1.1.1"), "1[.]1[.]1[.]1" === defangIPaddr("1.1.1.1"))

