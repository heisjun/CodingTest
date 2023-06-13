let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const output = "";

let dp = [];

for (let i = 0; i < 21; i++) {
  dp[i] = [];
  for (let j = 0; j < 21; j++) {
    dp[i][j] = [];
    for (let k = 0; k < 21; k++) {
      dp[i][j][k] = 0;
    }
  }
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c] != 0) return dp[a][b][c];

  if (a < b && b < c) {
    return (dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
  } else {
    return (dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1));
  }
}

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  if (a == -1 && b == -1 && c == -1) break;

  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
