let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input.shift().split(" ").map(Number);

const route = input.map((item) => item.split(""));

const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let [startX, startY] = [0, 0];
let realdirection = "";
for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    if (route[i][j] === "#") {
      let cnt = 0;
      for (let d = 0; d < 4; d++) {
        var posX = i + ds[d][0];
        var posY = j + ds[d][1];
        if (posX < 0 || posY < 0 || posX >= a || posY >= b) continue;
        if (route[posX][posY] === "#") {
          cnt++;
        }
      }
      if (cnt === 1) {
        [startX, startY] = [i, j];
        let directX = startX - posX;
        let directY = startY - posY;
        if (directX) {
          realdirection = "^";
        } else if (directX == -1) {
          realdirection = "v";
        } else if (directY) {
          realdirection = "<";
        } else if (directY == -1) {
          realdirection = ">";
        }
      }
    }
  }
}

console.log(startX + 1, startY + 1);
console.log(realdirection);
let direction = realdirection;

let answer = "";
let strX = startX;
let strY = startY;
while (direction !== "done") {
  route[strX][strY] = ".";
  if (direction == "<") {
    for (let i = 0; i < 2; i++) {
      strY = strY - 1;
      route[strX][strY] = ".";
    }
    answer += "A";
    direction = findDirect(strX, strY);
    if (direction == "v") {
      answer += "L";
    }
    if (direction == "^") {
      answer += "R";
    }
  } else if (direction == ">") {
    for (let i = 0; i < 2; i++) {
      strY = strY + 1;
      route[strX][strY] = ".";
    }
    answer += "A";
    direction = findDirect(strX, strY);
    if (direction == "v") {
      answer += "R";
    } else if (direction == "^") {
      answer += "L";
    }
  } else if (direction == "v") {
    for (let i = 0; i < 2; i++) {
      strX = strX + 1;
      route[strX][strY] = ".";
    }
    answer += "A";
    direction = findDirect(strX, strY);
    if (direction == "<") {
      answer += "R";
    } else if (direction == ">") {
      answer += "L";
    } else if (direction == "done") {
      break;
    }
  } else if (direction == "^") {
    for (let i = 0; i < 2; i++) {
      strX = strX - 1;
      route[strX][strY] = ".";
    }
    answer += "A";
    direction = findDirect(strX, strY);
    if (direction == "<") {
      answer += "L";
    } else if (direction == ">") {
      answer += "R";
    } else if (direction == "done") {
      break;
    }
  }
}

function findDirect(x, y) {
  if (y - 2 > 0 && route[x][y - 1] === "#" && route[x][y - 2]) {
    return "<";
  } else if (y + 2 < b && route[x][y + 1] === "#" && route[x][y + 2]) {
    return ">";
  } else if (x - 2 > 0 && route[x - 1][y] === "#" && route[x - 2][y]) {
    return "^";
  } else if (x + 2 < a && route[x + 1][y] === "#" && route[x + 2][y]) {
    return "v";
  } else {
    return "done";
  }
}

console.log(answer);
