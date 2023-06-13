let input = require("fs").readFileSync("example.txt").toString().trim();

const N = +input;

function solution(N) {
  let dp = Array(N).fill(0);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= N; i++) {
    let num3 = 1000000;
    let num2 = 1000000;
    let num1 = 1000000;
    if (i % 3 === 0) {
      num3 = Math.min(dp[i / 3], dp[i - 1]) + 1;
    }
    if (i % 2 === 0) {
      num2 = Math.min(dp[i / 2], dp[i - 1]) + 1;
    }
    num1 = dp[i - 1] + 1;
    dp[i] = Math.min(num3, num2, num1);
  }

  return dp[N];
}

console.log(solution(N));
