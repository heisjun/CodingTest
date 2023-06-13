const scoville = [1, 2, 30, 9, 10, 12];
K = 100;

let arr = scoville.sort((a, b) => a - b);
let count = 0;
while (true) {
  count++;
  if (isNaN(arr[0])) {
    count = -1;
    break;
  }
  let mix = arr[0] + arr[1] * 2;
  arr.splice(0, 2, mix);
  console.log(arr);
  if (arr[0] >= K) {
    break;
  }
}

console.log(count);
