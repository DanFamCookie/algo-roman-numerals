// function toRomanLazy(num) {
//   let output = "";

//   const romanNumeralstoArabic = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000
//   };
//   // console.log(romanNumeralstoArabic["x"];
//   const romanNumeralPriotiyOrder = ["M", "D", "C", "L", "X", "V", I"];

//     for (let i = 0; i < num; i++) { }
  
//   return "";
// }my code 


// function romanNumeralsToRoman(num) {
//   let output = "";

//   const romanNumeralsArabic = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   const romanNumeralsPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

//   for (let i = 0; i < romanNumeralsPriorityOrder.length; i++) {
//     const roman = romanNumeralsPriorityOrder[i];
//     const arabic = romanNumeralsArabic[roman];

//     const count = Math.floor(num / arabic); 
//     output += roman.repeat(count);
//     num -= count * arabic;
    
//     if (num === 0) {
//       break;
//     }
//   }

//   return output;
// }

// console.log(romanNumeralsToRoman(42));
// console.log(romanNumeralsToRoman(1994));

function toRoman(num) {
    let output = " ";

  const romanNumeralsArabic = {
    I: 1,
    IV: 4,
    V: 5,  
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

   const romanNumeralsPriorityOrder = ['M',"CM",'D', "CD", 'C', "XC", 'L', "XL", 'X', "IX", 'V' , "IV", 'I'];

  for (let i = 0; i < romanNumeralsPriorityOrder.length; i++) {
    const roman = romanNumeralsPriorityOrder[i];
    const arabic = romanNumeralsArabic[roman];

    const count = Math.floor(num / arabic); 
    output += roman.repeat(count);
    num -= count * arabic;
    
    if (num === 0) {
      break;
    }
  }

  return output;
}
console.log(toRoman(4));
console.log(toRoman(150));
console.log(toRoman(944));


// module.exports = { toRoman, toRomanLazy };


