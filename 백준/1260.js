let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m, v] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const DFS = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    console.log("방문완료노드", visitedQueue);
    console.log("방문해야할 노드", needVisitStack);
    console.log("pop노드", node);
    //탐색을 마친 노드들에 pop한 노드가 없다면
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }
  console.log(visitedQueue);
};

DFS(graph, v);
