let input = require("fs").readFileSync("example.txt").toString().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  let first = input[i].split(" ")[0];
  let second = input[i].split(" ")[1];
  if (second % first == 0) {
    console.log("factor");
  } else if (first % second == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
