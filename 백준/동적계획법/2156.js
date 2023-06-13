let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const wine = input.map(Number);
dp = Array(N).fill(0);

function solution(N) {
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + wine[i - 2] + wine[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 1]
    );
  }
  return dp[N];
}

console.log(solution(N));

//... b c d e
//e가 될 수 있는경우 ==> e + b까지의 최대(3개 연속일 가능성 유)따라서 c 건너뛰고+ d
//               ==> e + c까지의 최대(3개 연속일 가능성 유)따라서 d 건너뜀
//               ==> d까지의 최대(3개 연속일 가능성 유)따라서 e 건너뜀
