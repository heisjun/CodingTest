let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let graph = Array.from(Array(N + 1), () => []);
let answer = Array.from(Array(N + 1), () => []);

for (let i = 0; i < N; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 0; j < line.length; j++) {
    if (line[j] === 1) {
      graph[i + 1].push(j + 1);
    }
  }
}
let visited = graph;

console.log(visited);

for (let i = 1; i <= N; i++) {
  if (visited[i].length !== 0) {
    dfs(i, i);
  }
}

function dfs(standard, startIdx) {
  for (let i = 0; i < visited[startIdx].length; i++) {
    let next = visited[startIdx][i];
    if (answer[standard].indexOf(next) === -1) {
      answer[standard].push(next);
      dfs(standard, next);
    } else {
      break;
    }
  }
}

let result = Array.from(Array(N), () => new Array(N).fill(0));

for (let i = 1; i < answer.length; i++) {
  for (let j = 0; j < answer[i].length; j++) {
    result[i - 1][answer[i][j] - 1] = 1;
  }
}

console.log(result.map((i) => i.join(" ")).join("\n"));
