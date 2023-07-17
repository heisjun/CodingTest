const set = new Set();

for (let i = 1; i <= 10000; i++) {
  let N = 0;
  let stringNumber = String(i);
  for (let j = 0; j < stringNumber.length; j++) {
    N += Number(stringNumber[j]);
  }
  let nNum = i + N;
  set.add(nNum);
}

let arr = [...set];
let answer = [];
for (let i = 1; i < arr.length; i++) {
  if (arr.indexOf(i) === -1) {
    answer.push(i);
  }
}

console.log(answer);
