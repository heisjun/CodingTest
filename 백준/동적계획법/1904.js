let input = require("fs").readFileSync("example.txt").toString().trim();

const N = Number(input);

function dp(N) {
  let arr = [0, 1, 2];

  for (let i = 3; i <= N; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
  }

  return arr[N];
}

console.log(dp(N));
