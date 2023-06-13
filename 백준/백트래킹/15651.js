let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
let numbers = Array.from(Array(Number(input[0])), (_, idx) => idx + 1); //탐색할 노드 집합
let selectedNum = Number(input[1]); //조합할 개수

let permutation = [];
let result = "";

const dfs = (k) => {
  if (k === selectedNum) {
    let answer = [];
    for (let i = 0; i < permutation.length; i++) {
      answer.push(permutation[i]);
    }
    return (result += `${answer.join(" ")}\n`);
  }
  for (let i = 1; i <= numbers.length; i++) {
    permutation[k] = numbers[i - 1];

    dfs(k + 1);
  }
};

dfs(0);
console.log(result);
