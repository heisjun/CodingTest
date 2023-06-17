let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ");

let score = [];

input.map((medal) => {
  let medalArr = medal.split(" ");
  const teamNum = medalArr.shift();
  const [gold, silver, cooper] = medalArr;
  score.push([teamNum, gold * 10000 + silver * 100 + cooper * 1]);
});

let sortScore = score.sort((a, b) => {
  if (a[1] - b[1] > 0) {
    return -1;
  }
  if (a[1] - b[1] < 0) {
    return 1;
  }
});

sortScore[0].push(1);
let rankCount = 0;
for (let i = 1; i < sortScore.length; i++) {
  let prevRank = sortScore[i - 1][2];
  if (sortScore[i - 1][1] == sortScore[i][1]) {
    sortScore[i].push(prevRank);
    rankCount++;
  } else {
    sortScore[i].push(++prevRank + rankCount);
    rankCount = 0;
  }
}

for (let i = 0; i < sortScore.length; i++) {
  if (sortScore[i][0] == parseInt(K)) {
    console.log(sortScore[i][2]);
  }
}
