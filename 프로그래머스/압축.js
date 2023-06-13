const msg = "ABABABABABABABAB";

const dic = [
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let answer = [];
let i = 0;

while (i < msg.length) {
  let j = 1;
  while (dic.indexOf(msg.slice(i, i + j)) !== -1 && i + j <= msg.length) {
    j++;
  }
  dic.push(msg.slice(i, i + j));

  answer.push(dic.indexOf(msg.slice(i, i + j - 1)));
  i = i + j - 1;
}

console.log(answer);
