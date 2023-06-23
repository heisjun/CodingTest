let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  let num = i * 2;
  const N = input[num];
  const goalArr = input[num + 1].split(" ").map(Number);

  const map = goalArr.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1);
    return prev;
  }, new Map());
  let possible = [];
  for (let [key, val] of map) {
    if (val == 6) possible.push(key);
  }
  let teamScore = Array.from(Array(possible.length), () => Array());
  let score = 1;

  goalArr.map((team) => {
    if (possible.indexOf(team) !== -1) {
      teamScore[possible.indexOf(team)].push(score);
      score++;
    }
  });

  let testArr = [];

  for (let i = 0; i < teamScore.length; i++) {
    let hap =
      teamScore[i][0] + teamScore[i][1] + teamScore[i][2] + teamScore[i][3];
    testArr.push([hap, teamScore[i][4], i]);
  }
  testArr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(testArr);
  console.log(possible[testArr[0][2]]);
}
