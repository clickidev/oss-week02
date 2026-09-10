// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);
for(let i = 0; i < n ; i++) {
    if(i < n - i) {
       const stars = 2*i + 1;
       const spaces = (n - stars)/2;

       console.log(" ".repeat(spaces) + "*".repeat(stars)); 
    }
     
    else if (i >= n - i) {
        const stars = 2*(n - 1 - i) + 1;
       const spaces = (n - stars)/2;

       console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
}


// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".
