// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1");            // prediction:1 true
console.log(2, 1 === "1");           // prediction:2 true -> false
//type 다름
console.log(3, 0 == "");             // prediction:3 true
console.log(4, 0 === "");            // prediction:4 false
console.log(5, "" == " ");           // prediction:5 false
console.log(6, null == undefined);   // prediction:6 true
console.log(7, null === undefined);  // prediction:7 false
console.log(8, "4" - true);          // prediction:8 3
console.log(9, "4" + 1);             // prediction:9 5 -> 41
//문자열끼리 합쳐진 것
console.log(10, "4" * "2");          // prediction:10 8
console.log(11, typeof "4");         // prediction:11 number -> string
//문자열 ""
console.log(12, typeof null);        // prediction:12 object
console.log(13, typeof []);          // prediction:13 object
console.log(14, [1, 2] == [1, 2]);   // prediction:14 true -> false
//참조값을 비교함
console.log(15, NaN === NaN);        // prediction:15 true -> false
//NaN은 Not a Number, 자기 자신과도 같지 않은 유일한 값
