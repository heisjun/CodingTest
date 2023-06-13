let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const A = input[0].split(" ").map(Number);

let dpR = Array(N).fill(0);
let dpL = Array(N).fill(0);

for (let i = 0; i < N; i++) {}
//[5 2 3 1] k=0일떄
function check(k) {
  let count = 0;
  let standard = A[k];
  for (let i = k + 1; i < N; i++) {
    if (standard > A[i]) {
      count++;
      standard = A[i + 1];
    }
  }
}
