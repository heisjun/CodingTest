let words = require("fs").readFileSync("example.txt").toString().split("\n");
//['ABCDE','abcde',...]
const maxLength = Math.max(...words.map((i) => i.length));
let reuslt = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < words.length; j++) {
    reuslt += words[j][i] || "";
  }
}
console.log(reuslt);
