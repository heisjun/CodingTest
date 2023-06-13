let input = require("fs").readFileSync("example.txt").toString().trim();
let answer = [];
function hannoi(n, str, dst, mid) {
  if (n == 1) answer.push([str, dst]);
  else {
    hannoi(n - 1, str, mid, dst);
    answer.push([str, dst]);
    hannoi(n - 1, mid, dst, str);
  }
}
hannoi(input, 1, 3, 2);

console.log(answer.length);
console.log(answer.map((i) => i.join(" ")).join("\n"));
