const number = "4321";
let k = 2;

const arr = number.split("").map(Number);
let isTrue = false;
for (let i = 0; i < arr.length - k; i++) {
  for (let j = i; j <= i + k; j++) {
    if (arr[i] < arr[j]) {
      arr[i] = null;
      k = k - 1;
      isTrue = true;
      break;
    }
  }
}

if (!isTrue) {
  for (let i = 0; i < k; i++) {
    arr.pop();
  }
}

console.log(arr.join(""));
