let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const count = 2;
const num = Number(input[1]);

function eight() {
  for (let i = 0; i < count * 2 + 3; i++) {
    let result = "";
    for (let j = 0; j < count + 2; j++) {
      if (j % (count + 1) === 0 && i % (count + 1) === 0) {
        result += "*";
      } else if (i % (count + 1) === 0) {
        result += "-";
      } else if (j % (count + 1) === 0) {
        result += "|";
      } else {
        result += " ";
      }
    }
  }
}

eight();

function zero() {
  let realNum = "";
  for (let i = 0; i < count * 2 + 3; i++) {
    let result = "";
    for (let j = 0; j < count + 2; j++) {
      if (j % (count + 1) === 0 && i % (count + 1) === 0) {
        result += "*";
      } else if (i % ((count + 1) * 2) === 0) {
        result += "-";
      } else if (j % (count + 1) === 0) {
        result += "|";
      } else {
        result += " ";
      }
    }
    realNum += result + "\n";
  }
  return realNum + realNum;
}

let n = require("fs").readFileSync("example.txt").toString().trim().split(" ");

let s = +n.shift();
let nums = n.shift();
let garo = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 1, 1],
  [1, 1, 1],
  [0, 1, 0],
  [1, 1, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 1, 1],
  [1, 0, 1],
];
let sero = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];

for (let i = 0; i < 2 * s + 3; i++) {
  let line = "";
  if (i % (s + 1) === 0) {
    nums.split("").forEach((num) => {
      line += " ";
      line += (garo[+num][i / (s + 1)] ? "-" : " ").repeat(s);
      line += "  ";
    });
  } else {
    nums.split("").forEach((num) => {
      if (i < s + 1) {
        line += sero[+num][0] ? "|" : " ";
      } else {
        line += sero[+num][3] ? "|" : " ";
      }
      line += " ".repeat(s);
      if (i < s + 1) {
        line += sero[+num][1] ? "|" : " ";
      } else {
        line += sero[+num][2] ? "|" : " ";
      }
      line += " ";
    });
  }
  console.log(line);
}
