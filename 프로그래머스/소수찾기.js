const number = "23";
const numbers = number.split("").map(Number);
const N = numbers.length;

let visited = Array(N).fill(false);
let result = [];
let seq = [];

//M이 1~numbers.length

function getPermutation(k, M) {
  if (M > numbers.length) {
    return 0;
  }
  if (k === M) {
    const answer = [];
    for (let i = 0; i < M; i++) {
      answer.push(seq[i]);
    }
    result.push(Number(answer.join("")));
    getPermutation(k, M + 1);
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      seq[k] = numbers[i];
      visited[i] = true;
      getPermutation(k + 1, M);
      visited[i] = false;
    }
  }
}

getPermutation(0, 1);

let set = new Set([...result]);
let test = [...set];
let count = 0;

for (let i = 0; i < test.length; i++) {
  let isCheck = true;
  for (let j = 2; j <= Math.sqrt(test[i]); j++) {
    if (test[i] % j === 0) {
      isCheck = false;
      break;
    }
  }
  if (isCheck && test[i] > 1) {
    console.log(test[i]);
    count++;
  }
  isCheck = true;
}

console.log(count);
