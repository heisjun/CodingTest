let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let triangle = input.map((i) => i.split(" ").map(Number));

console.log(triangle);
for (let i = 1; i < triangle.length; i++) {
  for (let j = 0; j < triangle[i].length; j++) {
    let prev;
    if (j === 0) {
      prev = triangle[i - 1][0];
    } else if (j === triangle[i].length - 1) {
      prev = triangle[i - 1][j - 1];
    } else {
      prev = Math.max(triangle[i - 1][j], triangle[i - 1][j - 1]);
    }
    triangle[i][j] += prev;
  }
}

console.log(triangle);
