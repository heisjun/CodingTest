let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .toUpperCase();

const dic = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  dic[input.charCodeAt(i) - 65] += 1;
}

let maxCount = Math.max(...dic);

let count = 0;
for (let i = 0; i < dic.length; i++) {
  if (dic[i] === maxCount) {
    count++;
  }
}

if (count > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(dic.indexOf(maxCount) + 65));
}
