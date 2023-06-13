let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const count = input.shift();

let code = input.map((item) => item.split(" "));

let check = false; //true면 4번비트 1 && 12~15 모두 사용하여 숫자표현

for (let i = 0; i < code.length; i++) {
  let result = "";
  result += converter(code[i][0]);
  if (check) {
    result += "10";
  } else {
    result += "00";
  }
  result += Number(code[i][1]).toString(2).padStart(3, "0");
  result += Number(code[i][2]).toString(2).padStart(3, "0");
  if (check) {
    result += Number(code[i][3]).toString(2).padStart(4, "0");
  } else {
    result += Number(code[i][3]).toString(2).padStart(3, "0");
    result += "0";
  }
  check = false;
  console.log(result);
}
function converter(str) {
  if (str.match("ADD")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0000";
  } else if (str.match("SUB")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0001";
  } else if (str.match("MOV")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0010";
  } else if (str.match("AND")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0011";
  } else if (str.match("OR")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0100";
  } else if (str.match("NOT")) {
    return "0101";
  } else if (str.match("MULT")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0110";
  } else if (str.match("LSFTL")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "0111";
  } else if (str.match("LSFTR")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "1000";
  } else if (str.match("ASFTR")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "1001";
  } else if (str.match("RL")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "1010";
  } else if (str.match("RR")) {
    if (str[str.length - 1] === "C") {
      check = true;
    }
    return "1011";
  }
}
