let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let commandLine = Number(input.shift());
let stack = [];
let answer = [];

for (let i = 0; i < commandLine; i++) {
  if (input[i].split(" ")[0] === "push") {
    stack.push(Number(input[i].split(" ")[1]));
  }
  if (input[i] === "pop") {
    if (stack.length == 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  }
  if (input[i] === "size") {
    answer.push(stack.length);
  }
  if (input[i] === "empty") {
    stack.length == 0 ? answer.push(1) : answer.push(0);
  }
  if (input[i] === "top") {
    if (stack.length == 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }
}

console.log(answer.join("\n"));
