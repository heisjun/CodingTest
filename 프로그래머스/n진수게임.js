const n = 16; //진수
const t = 16; //말할개수
const m = 2; //명
const p = 2; //순서

const len = (t - 1) * m + p;
let speak = "";
let count = 0;
while (speak.length < len) {
  let convertNum = count.toString(n);
  speak += convertNum;
  count++;
}

console.log(speak);

let result = "";
let reCount = 1;

let idx = 0;
while (true) {
  if (result.length == t) {
    break;
  }
  if ((idx + 1) % m === p % m) {
    result += speak[idx];
  }
  idx++;
}

console.log(result);
