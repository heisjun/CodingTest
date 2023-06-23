let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, newScore, P] = input[0].split(" ").map(Number);
//N개 , 태수점수, 등수에 오를 수 있는 수

if (N > 0) {
  const scoreArr = input[1].split(" ").map(Number);
  scoreArr.push(newScore);
  scoreArr.sort((a, b) => b - a);

  const rankArr = Array.from({ length: P }).fill(0);

  let rank = 1;
  rankArr[0] = rank;
  let tempRank = 0;
  for (let i = 1; i < scoreArr.length; i++) {
    if (scoreArr[i] === scoreArr[i - 1]) {
      rankArr[i] = rank;
      tempRank++;
    } else {
      rankArr[i] = ++rank + tempRank;
    }
  }
  if (scoreArr.indexOf(newScore, -1) >= P) {
    console.log(-1);
  } else {
    console.log(rankArr[scoreArr.indexOf(newScore)]);
  }
} else {
  if (P > 0) {
    console.log(1);
  } else {
    console.log(-1);
  }
}
