let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

for (let i = 0; i < T; i++) {
  console.log(dp(input[i]));
}

function dp(N) {
  let arr = [0, 1, 1, 1, 2, 2];

  for (let i = 6; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 5];
  }
  return arr[N];
}
