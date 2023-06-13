let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const N = input.shift(); //4
const M = input[0]; //2

//순열
function solution(N, M) {
  let seq = [];
  let visited = Array(N).fill(false);
  let result = "";

  function getPermutation(k) {
    if (k === M) {
      const answer = [];
      for (let i = 0; i < M; i++) {
        answer.push(seq[i]);
      }
      return (result += `${answer.join(" ")}\n`);
    }
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        seq[k] = i;
        visited[i] = true;
        getPermutation(k + 1);
        visited[i] = false;
      }
    }
  }

  getPermutation(0);

  return result;
}

console.log(solution(N, M));
