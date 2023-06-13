const numbers = [1, 1, 1, 1, 1];
const target = 3;
//2

const calculate = ["+", "-"];
const selectedNum = numbers.length; //4
let seq = [];
let result = [];
const dfs = (k) => {
  if (k === selectedNum) {
    let answer = [];
    for (let i = 0; i < seq.length; i++) {
      answer.push(seq[i]);
    }
    return result.push(answer);
  }
  for (let i = 0; i < calculate.length; i++) {
    seq.push(calculate[i]);
    dfs(k + 1);
    seq.pop();
  }
};

dfs(0);

let answer = 0;

for (let i = 0; i < result.length; i++) {
  let hap = 0;
  for (let j = 0; j < result[i].length; j++) {
    if (result[i][j] === "+") {
      hap += numbers[j];
    } else {
      hap -= numbers[j];
    }
  }
  if (hap === target) {
    answer++;
  }
}
console.log(answer);
