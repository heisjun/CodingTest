const input = require("fs").readFileSync("example.txt").toString().trim();

const openingBrackets = ["[", "{", "("];
const closingBrackets = ["]", "}", ")"];

let isValid = true;
const stack = [];

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (openingBrackets.includes(char)) {
    stack.push(char);
  } else if (closingBrackets.includes(char)) {
    const lastOpeningBracket = stack.pop();
    const expectedClosingBracket =
      closingBrackets[openingBrackets.indexOf(lastOpeningBracket)];

    if (char !== expectedClosingBracket) {
      isValid = false;
      break;
    }
  }
}

if (!isValid || stack.length > 0) {
  console.log("False");
} else {
  console.log("True");
}
