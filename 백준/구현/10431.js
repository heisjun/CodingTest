let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const testCount = input.shift();

input.map((item) => {
  let testArr = item.split(" ").map(Number);
  let testNum = testArr.shift();
  let sortCount = 0;
  for (let x = 1; x < testArr.length; x++) {
    let value = testArr[x]; //918
    let prev = x - 1; //919
    //919 918 917
    while (prev >= 0 && testArr[prev] > value) {
      testArr[prev + 1] = testArr[prev]; //>>testArr[1] = testArr[0] // 919 919 917
      prev--;
      sortCount++;
    }
    testArr[prev + 1] = value;
  }

  console.log(`${testNum} ${sortCount}`);
});
