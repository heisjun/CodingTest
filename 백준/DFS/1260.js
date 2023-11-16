let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => []);
let visited = Array(N + 1).fill(false);

input.map((item) => {
  let [to, from] = item.split(" ").map(Number);
  graph[to].push(from);
  graph[from].push(to);
});

let answer_dfs = [];
function dfs(a) {
  if (visited[a]) return;
  visited[a] = true;
  answer_dfs.push(a);
  for (let i = 0; i < graph[a].length; i++) {
    let nextIdx = graph[a][i];
    if (!visited[nextIdx]) {
      dfs(nextIdx);
    }
  }
}

dfs(V);

let answer_bfs = [];
let visited_bfs = Array(N + 1).fill(false);
function bfs(a) {
  let que = [a];
  while (que.length) {
    let x = que.shift();
    if (visited_bfs[x]) {
      continue;
    }
    visited_bfs[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let nextIdx = graph[x][i];
      if (!visited_bfs[nextIdx]) {
        que.push(nextIdx);
      }
    }
  }
}

bfs(V);
console.log(answer_bfs.join(" "));
console.log(answer_dfs.join(" "));
