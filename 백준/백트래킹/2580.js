let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let zeroPlace = [];
let answer = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] === 0) {
      zeroPlace.push([i, j]);
    }
  }
}

const dfs = (k) => {
  if (k === zeroPlace.length) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        answer.push(input[i][j]);
      }
      console.log(answer.join(" "));
      answer = [];
    }
    process.exit(0);
  } else {
    let zeroX = zeroPlace[k][0];
    let zeroY = zeroPlace[k][1];

    //스도쿠에 값 넣기
    for (let i = 1; i <= 9; i++) {
      if (isValid(zeroX, zeroY, i)) {
        input[zeroX][zeroY] = i;
        dfs(k + 1);
        input[zeroX][zeroY] = 0;
      }
    }
  }
};

const isValid = (x, y, value) => {
  for (let i = 0; i < 9; i++) {
    if (input[x][i] === value || input[i][y] === value) return false;
  }
  //3*3 체크 검사
  let startX = Math.floor(x / 3) * 3;
  let startY = Math.floor(y / 3) * 3;

  for (let i = startX; i < startX + 3; i++) {
    for (let j = startY; j < startY + 3; j++) {
      if (input[i][j] === value) return false;
    }
  }
  return true;
};

dfs(0);
