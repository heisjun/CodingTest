let input = require("fs").readFileSync("example.txt").toString().trim();

const chess = Array(Number(input)).fill(0);

//chess[idx-1] >> 행 값
//idx-1 >> 열 값
let answer = 0;

const dfs = (k) => {
  if (k === chess.length) {
    answer++;
    console.log(chess);
    return;
  }
  for (let i = 1; i <= chess.length; i++) {
    chess[k] = i;
    if (isValid(k)) {
      dfs(k + 1);
    }
  }
};

const isValid = (k) => {
  for (let i = 0; i < k; i++) {
    //같은 행, 열일 경우 false
    if (chess[k] === chess[i]) return false;
    //대각선에 있을경우 false
    if (k - i == Math.abs(chess[k] - chess[i])) return false;
  }
  return true;
};

dfs(0);
console.log(answer);
