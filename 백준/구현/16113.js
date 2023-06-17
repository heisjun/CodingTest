let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const count = input[0];
const str = input[1];
let divide = Number(str.length / 5);
let arr = Array.from(Array(5), () => Array(divide).fill(0));
let draw = "";
let cnt = 0;

const verticalSignalToNumber = {
  ".....": 0,
  "#...#": 1,
  "#.###": 2,
  "###.#": 3,
  "#.#.#": 4,
  "#....": 5,
  "###..": 6,
  "..#..": 7,
  "#####": 8,
};

const numberToDigit = {
  818: 0,
  8: 1,
  243: 2,
  448: 3,
  678: 4,
  342: 5,
  842: 6,
  558: 7,
  848: 8,
  348: 9,
};

//배열로 숫자 표현
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < divide; j++) {
    if (str[cnt] === "#") {
      arr[i][j] = "#";
    } else {
      arr[i][j] = ".";
    }
    cnt++;
  }
}

const signalArr = [];
for (let i = 0; i < divide; i++) {
  let signal = "";
  for (let j = 0; j < 5; j++) {
    signal += arr[j][i];
  }
  signalArr.push(signal);
}

let signalNumber = [];
for (let i = 0; i < signalArr.length; i++) {
  signalNumber.push(verticalSignalToNumber[signalArr[i]]);
}

console.log(signalNumber);

let sol = [];
let convertNumber = 0;
for (let i = 0; i < signalNumber.length; i++) {
  if (signalNumber[i] !== 0) {
    convertNumber *= 10;
    convertNumber += signalNumber[i];
  } else if (convertNumber > 0) {
    sol.push(numberToDigit[convertNumber]);
    convertNumber = 0;
  }
}

console.log(sol.join(""));
