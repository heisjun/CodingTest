let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const board = input.map((i) => i.split(" ").map(Number));

//숫자들 사이에서 조합 찾기

function solution(N) {
  let visited = Array(N).fill(false);
  let min = Number.MAX_SAFE_INTEGER;

  function findCombi(k, idx) {
    if (k === N / 2) {
      let sTeam = [];
      let lTeam = [];
      let sSum = 0;
      let lSum = 0;
      for (let i = 1; i <= N; i++) {
        if (visited[i]) sTeam.push(i);
        else lTeam.push(i);
      }
      console.log(sTeam);
      console.log(lTeam);
      for (i = 0; i < N / 2; i++) {
        for (let j = 0; j < N / 2; j++) {
          if (i == j) continue;
          sSum =
            sSum +
            board[sTeam[i] - 1][sTeam[j] - 1] +
            board[sTeam[j] - 1][sTeam[i] - 1];
          lSum =
            lSum +
            board[lTeam[i] - 1][lTeam[j] - 1] +
            board[lTeam[j] - 1][lTeam[i] - 1];
        }
        min = Math.min(min, Math.abs(sSum - lSum));
        console.log("빼기:", Math.abs(sSum - lSum));
        console.log(min);
      }
    }
    for (let i = idx; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        findCombi(k + 1, i);
        visited[i] = false;
      }
    }
  }
  findCombi(0, 1);
  return min;
}

console.log(solution(N));
