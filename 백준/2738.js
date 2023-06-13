let input = require("fs").readFileSync("example.txt").toString().split("\n");

//['3 3','1 1 1','2 2 2',...]
input = input.map((item) => item.split(" "));
//[['3','3'],['1','1','1'],..]

const [N, M] = input.shift();

let arr = new Array(Number(N)).fill(0).map(() => new Array(Number(M)).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = Number(input[i][j]) + Number(input[i + Number(N)][j]);
  }
}

console.log(arr.map((v) => v.join(" ")).join("\n"));
