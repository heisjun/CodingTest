let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let T = input.shift();
let answer = [];

function CheckVpn(arr) {
  let checkArr = [];
  let check = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      checkArr.push(arr[i]);
    } else if (arr[i] == ")") {
      if (checkArr.length == 0) {
        check = false;
        break;
      } else checkArr.pop();
    } else {
      check = false;
      break;
    }
  }
  if (checkArr.length != 0 || check == false) {
    return false;
  } else return true;
}

for (let i = 0; i < T; i++) {
  let str = input[i].split("");
  CheckVpn(str) ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));
