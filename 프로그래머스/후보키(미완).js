const relation = [
  ["100", "ryan", "music", "1"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "5"],
  ["600", "apeach", "music", "6"],
];
//2
let numbers = ["100", "ryan", "music", "1"]; //탐색할 배열
let selectedNum = 1; //조합할 개수

let visited = Array(numbers.length).fill(false);
let permutation = [];
let result = "";

const dfs = (idx, k) => {
  if (k === selectedNum) {
    let answer = [];
    for (let i = 0; i < permutation.length; i++) {
      answer.push(permutation[i]);
    }
    return (result += `${answer.join(" ")}\n`);
  }
  for (let i = idx; i <= numbers.length; i++) {
    if (!visited[i]) {
      permutation[k] = numbers[i - 1];
      visited[i] = true;
      dfs(i, k + 1);
      visited[i] = false;
    }
  }
};

dfs(1, 0);
console.log(result);
