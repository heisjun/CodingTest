let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const compareArr = input.map((i) => i.split(" ").map(Number))[0];
const result = Array(N).fill(0);
const temp = Array(N).fill(N + 1);
//2 1 1 0
for (let i = 0; i < compareArr.length; i++) {
  if (result[compareArr[i]] == 0) {
    result[compareArr[i]] = i + 1;
  } else {
    let temp = compareArr[i];
    while (result[temp] !== 0) {}
  }
}
//4 2 1 3
console.log(result);
