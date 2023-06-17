let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = input.shift().split(" ").map(Number);
const time = input.map((i) => i.split(" ").map(Number));
let arr = Array(101).fill(0);

for (let i = 0; i < time.length; i++) {
  for (let j = time[i][0]; j < time[i][1]; j++) {
    arr[j] += 1;
  }
}

let charge = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    charge += A;
  } else if (arr[i] === 2) {
    charge += B * 2;
  } else if (arr[i] === 3) {
    charge += C * 3;
  }
}

console.log(charge);
