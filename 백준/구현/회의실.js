let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number);

let room = {};
input.map((item, index) => {
  if (index < N) {
    room[item] = Array(9).fill(0);
  } else {
    const [name, startT, endT] = item.split(" ");
    for (let i = startT - 9; i < endT - 9; i++) {
      room[name][i] = 1;
    }
  }
});

//이름순 정렬
let sortRoom = Object.fromEntries(Object.entries(room).sort());

const keys = Object.keys(sortRoom);
console.log(sortRoom);

//[0,1,0,0,0,1,1,0,0]
//정렬된 객체(room) 순회
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = sortRoom[key];
  let sTime = 9;
  let fTime = 9;
  let temp = [];
  let current = value[0];

  for (let j = 0; j < 9; j++) {
    if (current === 1 && value[j] === 0) {
      sTime = j + 9;
      current = 0;
    } else if (current === 0 && value[j] === 1) {
      fTime = j + 9;
      current = 1;
      temp.push([sTime, fTime]);
    }
  }
  if (current === 0) {
    temp.push([sTime, 18]);
  }
  console.log(temp);
}

"2".padStart(2, 0);
