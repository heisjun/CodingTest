let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input.shift().split(" ").map(Number);

const cloudArr = Array.from(Array(H), () => Array(W).fill(-1));

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "c") {
      cloudArr[i][j] = 0;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (cloudArr[i][j] !== -1 && cloudArr[i][j + 1] === -1) {
      cloudArr[i][j + 1] = cloudArr[i][j] + 1;
    }
  }
}

console.log(cloudArr.map((i) => i.join(" ")).join("\n"));
