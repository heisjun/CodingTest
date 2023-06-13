let input = require("fs").readFileSync("example.txt").toString().trim();

const N = +input;

function dpFibonacci(N) {
  let arr = [0, 1, 1];
  let count = 0;
  for (let i = 3; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    count++;
  }
  return count;
}

function fibonacci(N) {
  let count = 1;
  if (N === 1 || N === 2) return count;
  else {
    count++;
    return fibonacci(N - 1) + fibonacci(N - 2);
  }
}

console.log(fibonacci(N));
console.log(dpFibonacci(N));
