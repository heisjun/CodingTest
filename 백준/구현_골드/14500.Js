const [[N, M], ...paper] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const offset = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from(Array(N), () => Array(M).fill(0));
let maxSum = 0;

const dfs = (x, y, count, sum) => {
  if (count === 4) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + offset[i][0], y + offset[i][1]];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (!visited[nx][ny]) {
      if (count === 2) {
        visited[nx][ny] = true;
        dfs(x, y, count + 1, sum + paper[nx][ny]);
        visited[nx][ny] = false;
      }

      visited[nx][ny] = true;
      dfs(nx, ny, count + 1, sum + paper[nx][ny]);
      visited[nx][ny] = false;
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, paper[i][j]);
    visited[i][j] = false;
  }
}

console.log(maxSum);
