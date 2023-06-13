let input = require("fs").readFileSync("example.txt").toString().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);
let arr = [];

for (let i = 1; i <= N; i++) {
  if (N % i == 0) {
    arr.push(i);
  }
}

console.log(arr[K - 1] ? arr[K - 1] : 0);
