const [M, N] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(Number);

let arr = [];
let result = true;

for (let i = M; i <= N; i++) {
  if (i !== 1) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) result = false;
    }
  } else {
    result = false;
  }

  result && arr.push(i);
  result = true;
}

console.log(
  arr.length == 0 ? -1 : arr.reduce((acc, cal) => acc + cal) + "\n" + arr[0]
);
