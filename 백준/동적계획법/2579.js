let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const stair = input.shift();
const stairScore = input.map(Number);

const dp = [];

function solution(N) {
  dp[0] = stairScore[0];
  dp[1] = stairScore[0] + stairScore[1];
  dp[2] = stairScore[2] + Math.max(stairScore[0], stairScore[1]);

  for (let i = 3; i < N; i++) {
    dp[i] = stairScore[i] + Math.max(stairScore[i - 1] + dp[i - 3], dp[i - 2]);
  }

  return dp[N - 1];
}

console.log(solution(stair));
