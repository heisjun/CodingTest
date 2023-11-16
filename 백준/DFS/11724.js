let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => []);
let visited = new Array(N + 1).fill(false);
let answer = 0;

input.map((item) => {
  const [from, to] = item.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(index) {
  visited[index] = true;
  for (let i = 0; i < graph[index].length; i++) {
    let nextIdx = graph[index][i];
    if (!visited[nextIdx]) {
      dfs(nextIdx);
    }
  }
}
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

console.log(visited);
console.log(answer);
