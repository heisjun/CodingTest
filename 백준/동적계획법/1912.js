let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const numbers = input[0].split(" ").map(Number);
let dp = [numbers[0]];

for (let i = 1; i < N; i++) {
  dp[i] =
    numbers[i] > numbers[i] + dp[i - 1] ? numbers[i] : numbers[i] + dp[i - 1];
}

console.log(Math.max(...dp));
