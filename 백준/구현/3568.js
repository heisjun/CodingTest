let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

//순서 & [] *
const base = input.shift();

const reg = /[\;,]/;

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].replace(reg, "");
}

for (let i = 0; i < input.length; i++) {
  const alphareg = /[a-z]/i;
  const temp = [];
  //abc*[]& => temp =[a,b,c] input[i]='*[]&'
  input[i].split("").map((char) => {
    if (char.match(alphareg)) {
      temp.push(char);
      input[i] = input[i].replace(char, "");
    }
  });

  input[i] = input[i].split("").reverse().join("").replace(/\]\[/g, "[]");
  console.log(base + input[i] + " " + temp.join("") + ";");
}
