let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let infos = [];
input.map((info, idx) => {
  infos.push(info.split(" ").map(Number));
  infos[idx].push(idx + 1);
});

for (let i = 0; i < infos.length; i++) {
  let rankCount = 1;
  for (let j = 0; j < infos.length; j++) {
    if (infos[i][0] < infos[j][0] && infos[i][1] < infos[j][1]) {
      rankCount++;
    }
  }
  infos[i].push(rankCount);
}

const answer = [];

infos.map((info) => {
  answer.push(info[3]);
});

console.log(answer.join(" "));
