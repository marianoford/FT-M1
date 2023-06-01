'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let power = 0;
 
   for (let i = binary.length - 1; i >= 0; i--) {
     const digit = parseInt(binary[i]);
     decimal += digit * Math.pow(2, power);
     power++;
   }
 
   return decimal.toString();
 }
 var a = 5 
 console.log(a) 

 function DecimalABinario(num) {
      let str = "";
      var number = num;
      while (number > 0){
        str = number % 2 + str 
        number = Math.floor(numer/ 2)
      }
      return str
 }

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
