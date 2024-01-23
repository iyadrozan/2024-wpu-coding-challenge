// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// Method 1

// const reverseSeq = n => {
//     const result = [];
//     for(let i = n; i >= 1; i--) {
//         result.push(i)
//     }

//     return result
//   };

// Method 2

// reverseSeq = (n) => {
//     return Array(n).fill().map((el, i) => i + 1).reverse()
// }

// Method 3

// reverseSeq = (n) => {
//     return [...Array(n)].map((el, i) => i + 1).reverse()
// }

// One Line Method

// reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse()

// Without Reverse Method

reverseSeq = (n) => [...Array(n)].map((el, i) => n - i)

console.log(reverseSeq(5));