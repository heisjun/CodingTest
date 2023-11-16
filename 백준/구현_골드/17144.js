const input = require("fs").readFileSync("example.txt").toString().split("\n");

let [R, C, T] = input.shift().split(" ").map(Number);
const room = input.map((ele) => ele.split(" ").map(Number));
let flag = false;
let upperCleaner = [0, 0];
let lowerCleaner = [0, 0];

for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    if (room[row][col] === -1) {
      upperCleaner = row;
      lowerCleaner = row + 1;
      flag = true;
      break;
    }
  }
  if (flag) break;
}
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function spreadDust() {
  let spreadList = [];
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (room[row][col] > 0) {
        //미세먼지의 확산
        const spreadDust = Math.floor(room[row][col] / 5);
        for (let d = 0; d < 4; d++) {
          const spreadX = row + dir[d][0];
          const spreadY = col + dir[d][1];

          if (
            spreadX < 0 ||
            spreadX >= R ||
            spreadY < 0 ||
            spreadY >= C ||
            room[spreadX][spreadY] === -1
          )
            continue;
          spreadList.push([spreadX, spreadY, spreadDust]);
          room[row][col] -= spreadDust;
        }
      }
    }
  }
  for (let spread of spreadList) {
    const [row, col, value] = spread;
    room[row][col] += value;
  }
}

let result = 0;
while (T--) {
  spreadDust();
  rotateUp(upperCleaner);
  rotateDown(lowerCleaner);
}

room.map((ele) => {
  result += ele.reduce((acc, cur) => acc + cur);
});
console.log(result + 2);

//공기청정기 작동 후 상태
function rotateUp(cleanerRow) {
  //ㅜ
  for (let row = cleanerRow - 2; row >= 0; row--) {
    room[row + 1][0] = room[row][0];
  }
  //<-
  for (let col = 1; col < C; col++) {
    room[0][col - 1] = room[0][col];
  }

  //ㅗ
  for (let row = 1; row <= cleanerRow; row++) {
    room[row - 1][C - 1] = room[row][C - 1];
  }
  //->
  for (let col = C - 2; col > 0; col--) {
    room[cleanerRow][col + 1] = room[cleanerRow][col];
  }

  room[cleanerRow][1] = 0;
}

function rotateDown(cleanerRow) {
  for (let row = cleanerRow + 2; row < R; row++) {
    room[row - 1][0] = room[row][0];
  }

  for (let col = 1; col < C; col++) {
    room[R - 1][col - 1] = room[R - 1][col];
  }

  for (let row = R - 2; row >= cleanerRow; row--) {
    room[row + 1][C - 1] = room[row][C - 1];
  }

  for (let col = C - 2; col > 0; col--) {
    room[cleanerRow][col + 1] = room[cleanerRow][col];
  }

  room[cleanerRow][1] = 0;
}
