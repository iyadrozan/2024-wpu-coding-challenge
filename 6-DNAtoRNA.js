// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// Method 1

// function DNAtoRNA(dna) {

//     let rna = '';

//     for(let i = 0; i < dna.length; i++) {

//         if(dna[i] === 'T') {
//             rna += 'U'
//         } else {
//             rna += dna[i];
//         }

//     }

//     return rna;    
// }

// Method 2

// function DNAtoRNA(dna) {
//     let rna = '';

//     for(let i = 0; i < dna.length; i++) {
//         rna += dna[i] === 'T' ? 'U' : dna[i]
//     }
//     return rna
// }

// Method 3

// function DNAtoRNA(dna) {
//     return dna.split('').map((el) => el === 'T' ? 'U' : el)
// }

// One Line Method

// const DNAtoRNA = (dna) => dna.split('').map((el) => el === 'T' ? 'U' : el).join('')

// Regex Method

const DNAtoRNA = (dna) => dna.replace('T', 'U')

  console.log(DNAtoRNA('GCAT'));