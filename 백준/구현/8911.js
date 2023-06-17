let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const count = input.shift();
for (let i = 0; i < input.length; i++) {
  let direction = 12;
  let x = 0;
  let y = 0;
  let positionX = [0];
  let positionY = [0];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "F") {
      if (direction === 12) {
        y++;
      } else if (direction === 3) {
        x++;
      } else if (direction === 6) {
        y--;
      } else if (direction === 9) {
        x--;
      }
    } else if (input[i][j] === "B") {
      if (direction === 12) {
        y--;
      } else if (direction === 3) {
        x--;
      } else if (direction === 6) {
        y++;
      } else if (direction === 9) {
        x++;
      }
    } else if (input[i][j] === "L") {
      direction -= 3;
      if (direction === 0) {
        direction = 12;
      }
    } else if (input[i][j] === "R") {
      direction += 3;
      if (direction > 12) {
        direction -= 12;
      }
    }
    positionX.push(x);
    positionY.push(y);
  }

  let width = Math.max(...positionX) - Math.min(...positionX);
  let height = Math.max(...positionY) - Math.min(...positionY);
  console.log(width * height);
}
