const brown = 8;
const yellow = 1;
//[4,3] 가로 세로

const count = brown + yellow;
let seq = [];

for (let i = count; i >= Math.sqrt(count); i--) {
  if (count % i === 0 && count / i > 2) {
    seq.push([i, count / i]);
  }
}

for (let i = 0; i < seq.length; i++) {
  let width = seq[i][0];
  let height = seq[i][1];
  if (brown === 2 * width + (height - 2) * 2) {
    console.log(seq[i]);
    break;
  }
}
