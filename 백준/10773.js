let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let K = input.shift();
let answer = [0];

for (let i = 0; i < K; i++) {
  if (input[i] != 0) {
    answer.push(Number(input[i]));
  } else {
    answer.pop();
  }
}

console.log(answer.reduce((acc, cal) => acc + cal));
