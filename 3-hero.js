// WPU Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Method 1
// function hero(bullets, dragons){
//     if(bullets / 2 >= dragons){
//         return true;
//     } else {
//         return false
//     }
// }

// Method 2
// function hero(bullets, dragons){
//     return bullets / 2 >= dragons ? true : false;
// }

// Method 3
// function hero(bullets, dragons){
//     // truthy or falsy
//     return bullets / 2 >= dragons;
// }

// Method one liner
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(1500, 750))