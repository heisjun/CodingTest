let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

function division(drawLen) {
  if (drawLen == 1) return "-";
  else {
    let divideLen = drawLen / 3;
    let result = division(divideLen);
    return result + " ".repeat(divideLen) + result;
  }
}

for (let i = 0; i < input.length; i++) {
  const len = Math.pow(3, input[i]);
  let draw = [];
  for (let j = 0; j < len; j++) {
    draw.push("-");
  }
  console.log(division(draw.length, draw));
}
